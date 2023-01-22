import { useState } from 'react';

import {
  Label,
  TextInput,
  Button,
  Checkbox,
} from 'flowbite-react/lib/esm/components';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

function TherapistCreate() {
 
  // const [UserName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  // const [city, setCity] = useState('');
  // const [licenseNumber, setLicenseNumber] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    
    const [setError] = useState('');
    const [signUp] = useAuth();
    e.preventDefault();
    if (password !== repeatPassword) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
     await signUp(email,password);
      const timer = setTimeout(() => {
        return navigate('/home');
      }, 3000);
      return () => clearTimeout(timer);
    } catch (firebaseError) {
      console.log(firebaseError.message)
      return setError(firebaseError.message.split(':')[1].split('(')[0].trim());
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" m-10 mb-24 sm:ml-32  flex flex-col w-72 gap-4  "
      >
        <h1 className="font-[Poppins] text-2xl whitespace-nowrap">
          CREATE AN ACCOUNT
        </h1>
        {/* <div>
          <div className="mb-2 text-neutral-500">
            <Label htmlFor="UserName" value="User Name" />
          </div>
          <TextInput
            id="UserName"
            type="text"
            required="true"
            shadow="true"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div> */}
        <div>
          <div className="mb-2 ">
            <Label htmlFor="email2" value="Email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            required="true"
            shadow="true"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* <div>
          <div className="mb-2 ">
            <Label htmlFor="City" value="City" />
          </div>
          <TextInput
            id="City"
            type="text"
            required="true"
            shadow="true"
            onChange={(e) => setCity(e.target.value)}
          />
        </div> */}
        {/* <div>
          <div className="mb-2 ">
            <Label htmlFor="LicenseNumber" value="License Number" />
          </div>
          <TextInput
            id="LicenseNumber"
            type="text"
            required="true"
            shadow="true"
            onChange={(e) => setLicenseNumber(e.target.value)}
          />
        </div> */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Create Password" />
          </div>
          <TextInput
            id="password2"
            type="password"
            required="true"
            shadow="true"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Confirm password" />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            required="true"
            shadow="true"
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree">
            I agree with the{' '}
            <a
              href="//#region "
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </Label>
        </div>
        <Button className="w-20" type="submit">
          CREATE
        </Button>
      </form>
    </div>
  );
}

export default TherapistCreate;
