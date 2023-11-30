import React from 'react';

const Spinner = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='animate-ping w-16 h-16 rounded-full bg-gray-600'></div>
    </div>
  );
};

export default Spinner;
