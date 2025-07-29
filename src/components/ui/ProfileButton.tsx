import React, { useState } from 'react';
import { useAuthStore } from '../../store';
import { Link, useNavigate } from 'react-router';

interface ProfileButtonProps {
  text?: string;
}

export const ProfileButton: React.FC<ProfileButtonProps> = ({
  text = 'Profile',
}: ProfileButtonProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <button onClick={() => setDropdownOpen(!dropdownOpen)}>{text}</button>
      <div
        className={`absolute right-1 mt-6 p-4 w-48 bg-white border border-gray-200 rounded-2xl shadow-lg transform transition-all duration-300 ${
          dropdownOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <ul className='space-y-2'>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
    </>
  );
};
