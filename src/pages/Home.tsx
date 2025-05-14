import React from 'react';
import { Link } from 'react-router';
import { ActivityCard } from '../components/shared/ActivityCard';

const Home = () => {
  return (
    <div className='min-h-screen px-4 py-16 bg-gradient-to-br from-blue-100 via-white to-orange-100'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900'>
          华人篮球社区
        </h1>
        <p className='text-lg sm:text-xl text-gray-700 mb-8'>
          🏀 组队打球 · 球员主页 · 线下活动 · 夏令营报名
        </p>
        <Link
          to='/activities'
          className='inline-block px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-blue-700 transition'
        >
          查看全部活动
        </Link>
      </div>

      <div className='mt-16 max-w-5xl mx-auto'>
        <h2 className='text-2xl font-semibold mb-6 text-gray-800 text-center'>
          📅 近期活动预览
        </h2>

        <div className='grid gap-6 sm:grid-cols-2 px-2 sm:px-0'>
          <ActivityCard
            title={'湾区 · 周末 Pickup 比赛'}
            date={'5月19日'}
            location={'Sunnyvale'}
          />
          <ActivityCard
            title={'暑期青少年训练营'}
            date={'7月15日'}
            location={'Seattle'}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
