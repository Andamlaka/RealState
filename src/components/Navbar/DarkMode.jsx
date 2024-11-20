import React, { useState } from 'react';

const DarkMode = ({ toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode} className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-300'>
      <span className='text-sm'>🌙</span>
    </button>
  );
};

export default DarkMode;