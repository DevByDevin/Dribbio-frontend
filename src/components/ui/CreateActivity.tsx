import React from 'react';

interface CreateActivityProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateActivity: React.FC<CreateActivityProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      {/* 背景遮罩 */}
      <div
        className='absolute inset-0 bg-black transition-opacity animate-fade-in-fifty'
        onClick={onClose}
      ></div>

      {/* 对话框 */}
      <div className='relative bg-white w-full max-w-lg p-6 rounded-lg shadow-lg scale-100 animate-fade-in'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>
          Create Activity
        </h2>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2'>
              Title
            </label>
            <input
              type='text'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
              placeholder='Enter activity title'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2'>
              Description
            </label>
            <textarea
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
              placeholder='Enter activity description'
              rows={4}
            ></textarea>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-2'>Date</label>
            <input
              type='date'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
            />
          </div>
          <div className='flex justify-end gap-4'>
            <button
              type='button'
              onClick={onClose}
              className='px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
