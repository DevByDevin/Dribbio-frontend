type Props = {
  title: string;
  date: string;
  location: string;
  onClick?: () => void;
};

export const ActivityCard = ({ title, date, location, onClick }: Props) => (
  <div
    onClick={onClick}
    className='p-4 rounded-xl bg-white shadow hover:scale-[1.02] transition cursor-pointer'
  >
    <h3 className='text-lg font-semibold text-gray-900 mb-1'>{title}</h3>
    <p className='text-sm text-gray-500'>📅 {date}</p>
    <p className='text-sm text-gray-500'>📍 {location}</p>
  </div>
);
