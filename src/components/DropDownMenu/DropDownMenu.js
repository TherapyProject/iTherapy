import { Avatar, Dropdown } from 'flowbite-react/lib/esm/components';
import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';

function DropDownMenu() {
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="h-10 object-scale-down">
      <Dropdown
        label={
          <Avatar alt="User settings" img={currentUser?.photoURL} rounded />
        }
        arrowIcon={false}
        inline
      >
        <Dropdown.Header>
          <span className="block text-sm">
            <strong>{currentUser.displayName || 'User'}</strong>
          </span>
          <span className="block truncate text-sm font-medium">
            {currentUser?.email}
          </span>
        </Dropdown.Header>
        <Dropdown.Item onClick={() => navigate('/profile')}>
          Profile
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => logOut()}>Log Out</Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default DropDownMenu;
