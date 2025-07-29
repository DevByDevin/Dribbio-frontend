import { Link } from 'react-router';

export const UserActivities = () => {
  const activities = [
    { id: 1, title: 'Activity 1', description: 'Description for Activity 1' },
    { id: 2, title: 'Activity 2', description: 'Description for Activity 2' },
    { id: 3, title: 'Activity 3', description: 'Description for Activity 3' },
    { id: 4, title: 'Activity 4', description: 'Description for Activity 4' },
    { id: 5, title: 'Activity 5', description: 'Description for Activity 5' },
    { id: 6, title: 'Activity 6', description: 'Description for Activity 6' },
  ];

  return (
    <div className='p-6 bg-gray-100 rounded-lg shadow-md'>
      <h2 className='text-xl font-bold text-gray-800 mb-4'>
        Most Recent Activities
      </h2>
      <div className='flex flex-wrap gap-4'>
        {activities.slice(0, 6).map((activity) => (
          <div
            key={activity.id}
            className='flex-1 min-w-[30%] bg-white p-4 rounded-lg shadow-md'
          >
            <h3 className='text-lg font-semibold text-gray-800'>
              {activity.title}
            </h3>
            <p className='text-gray-600'>{activity.description}</p>
          </div>
        ))}
      </div>
      <div className='mt-6 text-center'>
        <Link to='/profile/activities' className='text-blue-600 font-medium'>
          See more
        </Link>
      </div>
    </div>
  );
};
