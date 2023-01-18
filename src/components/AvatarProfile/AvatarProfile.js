import { Avatar, Dropdown } from 'flowbite-react/lib/esm/components';
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

function AvatarProfile() {
  const trueStatus = true;
  const { currentUser, logout } = useAuth();

  // const [profileOrLogout, setProfileOrLogout] = useState(false);
  // function profileLogout() {
  //   setProfileOrLogout(!profileOrLogout);
  //   console.log('yes');
  // }
  // function handleSignOut() {
  //   console.log('sign out');
  // }
  const handleSignOut = () => {
    logout();
  };

  return (
    <div className="h-10 object-scale-down">
      <Dropdown
        label={
          <Avatar
            alt="User settings"
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={trueStatus}
          />
        }
        arrowIcon={!trueStatus}
        inline={trueStatus}
      >
        <Dropdown.Header>
          {/* <span className="block text-sm">Bonnie Green</span> */}
          <span className="block truncate text-sm font-medium">
            {currentUser ? currentUser.name : 'User'}
          </span>
        </Dropdown.Header>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default AvatarProfile;
