import { Link } from 'react-router';

export const HomeHeader = () => {
  return (
    <div className='max-w-4xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-[length:200%_100%] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-text-flash'>
        Dribbio
      </h1>
      <h2 className='text-lg sm:text-xl text-gray-600 font-semibold space-y-1 mb-8'>
        <div>Where Ballers Connect</div>
        <div>Run. Rise. Dribbio.</div>
        <div>Your Game, Your Squad, Your Way</div>
      </h2>
      <Link
        to='/activities'
        className='inline-block px-10 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200'
      >
        See All Activities
      </Link>
    </div>
  );
};
