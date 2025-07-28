import { Link } from 'react-router';

export const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/30 shadow-md border-b border-white/20 px-6 py-4 flex items-center'>
      <div className='text-xl font-bold text-blue-600'>
        <Link to='/'>Dribbio</Link>
      </div>
      <ul className='ml-auto flex space-x-6 text-gray-700 font-medium'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};
