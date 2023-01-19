import { deleteUser, updatePassword, updateProfile } from 'firebase/auth';
import { deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage';
import {
  Alert,
  Avatar,
  Button,
  FileInput,
  Label,
  Select,
  TextInput,
} from 'flowbite-react/lib/esm/components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db, storage } from '../../backend/firebase';
import { useAuth } from '../../contexts/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [profile, setProfile] = useState({
    uid: currentUser.uid,
    displayName: currentUser.displayName,
    email: currentUser.email,
    photoURL: currentUser.photoURL,
    gender: '',
    education: '',
    birthDate: '',
    hobbies: '',
    familySize: '',
    phoneNumber: '',
  });
  const navigate = useNavigate();

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleProfileImageUpload = async (file) => {
    const fileType = file.type.split('/')[0];
    if (fileType !== 'image') {
      return setErrorMessage('Please upload an image file');
    }
    if (file.size > 1024 * 1024) {
      return setErrorMessage('Please upload an image less than 1MB in size');
    }

    const fileRef = ref(storage, `avatars/${currentUser.uid}/profile-picture`);
    const uploadTask = await uploadBytes(fileRef, file);
    const downloadURL = await getDownloadURL(uploadTask.ref);

    setProfile((prevProfile) => ({
      ...prevProfile,
      photoURL: downloadURL,
    }));

    updateProfile(auth.currentUser, {
      photoURL: downloadURL,
    }).then(
      () => {
        setSuccessMessage('Profile updated successfully');
      },
      (error) => {
        setErrorMessage(error.message);
      }
    );
    return downloadURL;
  };

  const handleProfileImageChange = async (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      await handleProfileImageUpload(file);
    }
  };

  const handleDeleteAccount = async () => {
    const user = auth.currentUser;
    await deleteUser(user);
    await deleteDoc(doc(db, 'users', user.uid));
    await deleteObject(ref(storage, `avatars/${user.uid}/profile-picture`));
  };

  const createProfile = async () => {
    try {
      await setDoc(doc(db, 'users', currentUser.uid), {
        uid: currentUser.uid,
        displayName: currentUser.displayName,
        email: currentUser.email,
        gender: profile.gender,
        education: profile.education,
        birthDate: profile.birthDate,
        hobbies: profile.hobbies,
        familySize: profile.familySize,
        phoneNumber: profile.phoneNumber,
      });
      setSuccessMessage('Profile updated successfully');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProfile(auth.currentUser, {
      displayName: profile.displayName,
      photoURL: profile.photoURL,
    }).then(
      () => {
        setSuccessMessage('Profile updated successfully');
      },
      (error) => {
        setErrorMessage(error.message);
      }
    );

    createProfile();
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    if (name === 'password') {
      setPassword(value);
    } else {
      setPasswordConfirm(value);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === passwordConfirm && password.length >= 6) {
      updatePassword(auth.currentUser, password).then(
        () => {
          setSuccessMessage('Password updated successfully');
        },
        (error) => {
          setErrorMessage(error.message);
        }
      );
    } else {
      setErrorMessage('Passwords do not match');
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, 'users', currentUser.uid),
      (userProfile) => {
        if (userProfile.exists()) {
          setProfile(userProfile.data());
        }
      }
    );
    return unsubscribe;
  }, []);

  return (
    <div className="profile container mx-auto max-w-2xl text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 flex flex-col my-8">
      <div className="profile-header text-center py-4 mb-4 mx-4">
        <h1 className="text-center text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Profile
        </h1>
        <p className="text-center text-red-500 dark:text-red-300">
          Please fill all the fields with correct and valid details to complete
          your profile.
        </p>
        {errorMessage && (
          <Alert color="failure" className="mt-4">
            <span className="font-medium">{errorMessage}</span>
          </Alert>
        )}
        {successMessage && (
          <Alert color="success" className="mt-4">
            <span className="font-medium">{successMessage}</span>
          </Alert>
        )}
      </div>
      <form
        className="profile-body flex flex-wrap justify-center sm:justify-between gap-8 mx-4"
        onSubmit={handleSubmit}
      >
        <div className="profile-column flex flex-col md:flex-row">
          <div className="profile-picture mb-4 md:mb-0 full-rounded">
            <Avatar
              size="xl"
              className="shadow-lg"
              img={currentUser.photoURL}
            />
            <FileInput
              color="dark"
              className="mt-4 w-[110px]"
              onChange={handleProfileImageChange}
            />
          </div>
        </div>
        <div className="profile-column flex flex-col flex-grow gap-4">
          <div className="profile-info flex flex-col gap-4">
            <div className="full-name mb-4 md:mb-0">
              <Label htmlFor="full-name" value="Fullname" />
              <TextInput
                id="full-name"
                label="Full Name"
                name="displayName"
                placeholder="John Doe"
                value={profile.displayName}
                onChange={handleProfileChange}
              />
            </div>
            <div className="email mb-4 md:mb-0">
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                name="email"
                label="Email"
                placeholder="Email"
                value={profile.email}
                disabled
              />
            </div>
            <div className="phone mb-4 md:mb-0">
              <Label htmlFor="phone" value="Phone" />
              <TextInput
                id="phone"
                name="phoneNumber"
                label="Phone"
                placeholder="Phone"
                value={profile.phoneNumber}
                onChange={handleProfileChange}
              />
            </div>
            <div className="gender mb-4 md:mb-0">
              <Label htmlFor="gender" value="Gender" />
              <Select
                id="gender"
                name="gender"
                label="Gender"
                value={profile.gender}
                onChange={handleProfileChange}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Prefers not to say</option>
              </Select>
            </div>
            <div className="education-level mb-4 md:mb-0">
              <Label htmlFor="education" value="Education" />
              <Select
                id="education"
                name="education"
                label="Education Level"
                value={profile.education}
                onChange={handleProfileChange}
              >
                <option>High School</option>
                <option>College</option>
                <option>Graduate School</option>
                <option>Post Graduate School</option>
              </Select>
            </div>
            <div className="birth-date mb-4 md:mb-0">
              <Label htmlFor="birth-date" value="Birth Date" />
              <TextInput
                id="birth-date"
                name="birthDate"
                label="Birth Date"
                placeholder="Birth Date"
                type="date"
                value={profile.birthDate}
                onChange={handleProfileChange}
              />
            </div>
            <div className="hobbies mb-4 md:mb-0">
              <Label htmlFor="hobbies" value="Hobbies" />
              <TextInput
                id="hobbies"
                name="hobbies"
                label="Hobbies"
                placeholder="Hiking, Swimming, Reading, Writing, Coding, etc."
                value={profile.hobbies}
                onChange={handleProfileChange}
              />
            </div>
            <div className="family-size mb-4 md:mb-0 flex gap-4 flex-wrap items-center">
              <Label htmlFor="family-size" value="Family Size" />
              <TextInput
                id="family-size"
                name="familySize"
                label="Family Size"
                placeholder="5"
                type="number"
                value={profile.familySize}
                onChange={handleProfileChange}
              />
            </div>

            <div className="upload-id mb-4 md:mb-0">
              <Label htmlFor="upload-id" value="Upload ID" />
              <FileInput
                label="Upload ID"
                name="IdCard"
                id="upload-id"
                value={profile.IdCard}
                onChange={handleProfileChange}
                disabled
              />
            </div>
            <div className="save-button flex flex-wrap gap-4">
              <Button type="submit">Save Changes</Button>
              <Button onClick={handleDeleteAccount} color="failure">
                Delete Account
              </Button>
              <Button onClick={handleCancel} color="dark">
                Cancel
              </Button>
            </div>
          </div>
          <div className="security">
            <h1 className="mb-4 text-2xl text-bold">Security</h1>
            <div className="password mb-4 md:mb-0 flex flex-col gap-4 items-start">
              <div className="password-inputs flex flex-wrap gap-4">
                <div className="password">
                  <Label htmlFor="password" value="Password" />
                  <TextInput
                    id="password"
                    label="Password"
                    placeholder="Password"
                    value={password}
                    type="password"
                    onChange={handlePasswordChange}
                    name="password"
                    minLength="6"
                  />
                </div>
                <div className="confirm-password">
                  <Label htmlFor="confirm-password" value="Confirm Password" />
                  <TextInput
                    id="confirm-password"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    value={passwordConfirm}
                    type="password"
                    onChange={handlePasswordChange}
                    name="passwordConfirm"
                    minLength="6"
                  />
                </div>
              </div>
              <Button onClick={handlePasswordSubmit}>Change Password</Button>
            </div>
          </div>
          <div className="payment-info">
            <div className="payment-details">
              <h1 className="mb-4 text-2xl text-bold">Payment Info</h1>
              <div className="payment-info flex flex-wrap gap-4 w-full">
                <div className="card flex flex-col gap-4">
                  <Label htmlFor="show-cards" value="3 Cards added" />
                  <Button id="show-cards">Show Cards</Button>
                </div>
                <div className="card flex flex-col gap-4">
                  <Label htmlFor="buy-tickets" value="10 tickets remaining" />
                  <Button id="buy-tickets">Buy Tickets</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
