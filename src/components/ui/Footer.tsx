import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className='backdrop-blur-lg bg-white/30 border-t border-gray-200 py-4'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
        {/* Logo and Copyright */}
        <div className='text-center md:text-left'>
          <div className='text-xl font-bold text-blue-600'>Dribbio</div>
          <div className='text-sm text-gray-500 mt-1'>
            © {new Date().getFullYear()} Dribbio. All rights reserved.
          </div>
        </div>

        {/* Links Section */}
        <div className='flex space-x-6 mt-4 md:mt-0'>
          <a
            href='/about'
            className='text-sm text-gray-600 hover:text-blue-600'
          >
            About Us
          </a>
          <a
            href='/privacy'
            className='text-sm text-gray-600 hover:text-blue-600'
          >
            Privacy Policy
          </a>
          <a
            href='/terms'
            className='text-sm text-gray-600 hover:text-blue-600'
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
