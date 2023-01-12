import {
  Avatar,
  Button,
  FileInput,
  Label,
  Select,
  TextInput,
} from 'flowbite-react/lib/esm/components';
import React from 'react';

const Profile = () => {
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
      </div>
      <div className="profile-body flex flex-wrap justify-center sm:justify-between gap-8 mx-4">
        <div className="profile-column flex flex-col md:flex-row">
          <div className="profile-picture mb-4 md:mb-0 full-rounded">
            <Avatar size="xl" className="shadow-lg" />
            <Button color="dark" className="mt-4">
              Upload Picture
            </Button>
          </div>
        </div>
        <div className="profile-column flex flex-col flex-grow gap-4">
          <div className="profile-info flex flex-col gap-4">
            <div className="full-name mb-4 md:mb-0">
              <Label htmlFor="full-name" value="Fullname" />
              <TextInput
                id="full-name"
                label="Full Name"
                placeholder="John Doe"
                value=""
              />
            </div>
            <div className="education-level mb-4 md:mb-0">
              <Label htmlFor="education" value="Education" />
              <Select
                label="Education Level"
                value="Education Level"
                id="education"
              >
                <option>High School</option>
                <option>College</option>
                <option>Graduate School</option>
                <option>Post Graduate School</option>
              </Select>
            </div>
            <div className="hobbies mb-4 md:mb-0">
              <Label htmlFor="hobbies" value="Hobbies" />
              <TextInput
                id="hobbies"
                label="Hobbies"
                placeholder="Hiking, Swimming, Reading, Writing, Coding, etc."
                value=""
              />
            </div>
            <div className="family-name mb-4 md:mb-0 flex gap-4 flex-wrap items-center">
              <Label htmlFor="family-size" value="Family Size" />
              <TextInput
                id="family-size"
                label="Family Size"
                placeholder="5"
                value=""
                type="number"
              />
            </div>
            <div className="gender mb-4 md:mb-0">
              <Label htmlFor="gender" value="Gender" />
              <Select label="Gender" value="Gender" id="gender">
                <option>Male</option>
                <option>Female</option>
                <option>Prefers not to say</option>
              </Select>
            </div>
            <div className="birth-date mb-4 md:mb-0">
              <Label htmlFor="birth-date" value="Birth Date" />
              <TextInput
                id="birth-date"
                label="Birth Date"
                placeholder="Birth Date"
                value="01/01/2000"
                type="date"
              />
            </div>
            <div className="email mb-4 md:mb-0">
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                label="Email"
                placeholder="Email"
                value=""
              />
            </div>
            <div className="phone mb-4 md:mb-0">
              <Label htmlFor="phone" value="Phone" />
              <TextInput
                id="phone"
                label="Phone"
                placeholder="Phone"
                value=""
              />
            </div>
            <div className="upload-id mb-4 md:mb-0">
              <Label htmlFor="upload-id" value="Upload ID" />
              <FileInput label="Upload ID" id="upload-id" />
            </div>
            <div className="save-button flex flex-wrap gap-4">
              <Button>Save Changes</Button>
              <Button color="failure">Delete Account</Button>
              <Button>Cancel</Button>
            </div>
          </div>
          <div className="security">
            <h1 className="mb-4 text-2xl text-bold">Security</h1>
            <div className="password mb-4 md:mb-0 flex flex-wrap gap-4 items-center">
              <div className="password">
                <Label htmlFor="password" value="Password" />
                <TextInput
                  id="password"
                  label="Password"
                  placeholder="Password"
                  value=""
                  type="password"
                />
              </div>
              <div className="confirm-password">
                <Label htmlFor="confirm-password" value="Confirm Password" />
                <TextInput
                  id="confirm-password"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  value=""
                  type="password"
                />
              </div>
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
      </div>
    </div>
  );
};

export default Profile;
