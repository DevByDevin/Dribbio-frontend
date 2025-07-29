import React, { useState } from 'react';
import { Link } from 'react-router';
import { useAuthStore } from '../../store';
import { UserActivities } from '../../components/layout/Profile/UserActivities';
import { CreateActivity } from '../../components/ui/CreateActivity';

const MyProfile: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  const profile = localStorage.getItem('dribbio-username') || 'Profile';
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <h1 className='text-2xl font-bold text-gray-800'>
          Please log in to view your profile.
        </h1>
        <Link to='/login' className='ml-4 text-blue-600 hover:underline'>
          Login
        </Link>
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div className='min-h-screen flex gap-4 p-4 bg-gray-100'>
        {/* Left section */}
        <aside className='hidden md:block w-64 bg-white shadow-md px-6 py-12 rounded-2xl'>
          <div className='flex flex-col items-center mb-12'>
            <img
              src='https://via.placeholder.com/100' // 替换为实际头像 URL
              alt='Profile Avatar'
              className='w-24 h-24 rounded-full shadow-md'
            />
            <h3 className='mt-4 text-lg font-semibold text-gray-800'>
              {profile}
            </h3>
          </div>

          {/* Left nav */}
          <nav className='space-y-4'>
            <Link
              to='/profile/overview'
              className='block text-gray-700 hover:text-blue-600 text-center'
            >
              Overview
            </Link>
            <Link
              to='/profile/settings'
              className='block text-gray-700 hover:text-blue-600 text-center'
            >
              Settings
            </Link>
            <Link
              to='/profile/activities'
              className='block text-gray-700 hover:text-blue-600 text-center'
            >
              My Activities
            </Link>
          </nav>
        </aside>

        {/* Right content */}
        <main className='flex-grow bg-white px-8 py-12 shadow-md rounded-2xl'>
          <div className='flex justify-between items-center mb-8'>
            <h1 className='text-2xl font-bold text-gray-800'>
              Welcome, {profile}!
            </h1>
            <button
              onClick={() => setIsDialogOpen(true)}
              className='px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all'
            >
              Create Activity
            </button>
          </div>
          <UserActivities />
        </main>

        {/* Create Activity Dialog */}
        <CreateActivity
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      </div>
    )
  );
};

export default MyProfile;
