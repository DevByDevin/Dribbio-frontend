import React, { useState } from 'react';

interface ProfileButtonProps {
  text?: string;
}

export const ProfileButton: React.FC<ProfileButtonProps> = ({
  text = 'Profile',
}: ProfileButtonProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <button onClick={() => setDropdownOpen(!dropdownOpen)}>{text}</button>
      <div
        className={`absolute right-1 mt-6 p-2 w-48 bg-white border border-gray-200 rounded shadow-lg transform transition-all duration-300 ${
          dropdownOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <ul className='space-y-2'>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </div>
    </>
  );
};
