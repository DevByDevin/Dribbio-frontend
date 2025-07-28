import { ActivityCard } from '../components/shared/ActivityCard';
import { HomeHeader } from '../components/layout/Home/Header';
import { dummyActivitys } from '../dummyData/activitys';

const Home = () => {
  return (
    <div className='min-h-screen px-4 py-16 bg-gradient-to-br from-blue-200 via-white to-orange-100'>
      <HomeHeader />
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-2xl font-semibold mb-6 text-gray-800 text-center'>
          📅 Recently Activities
        </h2>
        <div className='grid gap-6 sm:grid-cols-2 px-2 sm:px-0'>
          {dummyActivitys.map((activity) => (
            <ActivityCard
              key={activity.id}
              title={activity.title}
              location={activity.location}
              date={activity.date.toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
              description={activity.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
