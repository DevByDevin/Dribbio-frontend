import { Link } from 'react-router';
import { useAuthStore } from '../../store';
import { ProfileButton } from './ProfileButton';

export const Navbar = () => {
  const { isAuthenticated } = useAuthStore();
  const profile = localStorage.getItem('dribbio-username') || 'Profile';

  return (
    <nav className='fixed top-0 left-0 h-16 w-full z-50 backdrop-blur-lg bg-white/30 shadow-md border-b border-white/20 px-6 py-4 flex items-center'>
      <div className='text-xl font-bold text-blue-600'>
        <Link to='/'>Dribbio</Link>
      </div>
      <div className='ml-auto flex gap-1 text-gray-700 font-medium'>
        <div className='hidden sm:block p-4'>
          <Link to='/'>Home</Link>
        </div>
        <div className='hidden sm:block p-4'>
          <Link to='/about'>About</Link>
        </div>
        <div className='hidden sm:block p-4'>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className='p-4 hover:bg-blue-200 rounded-lg transition-all duration-400'>
          {isAuthenticated ? (
            <ProfileButton text={profile} />
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};
