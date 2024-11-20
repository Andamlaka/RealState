import React, { useState, createContext } from 'react';
import { IonIcon } from '@ionic/react';
import { search, notifications, menu } from 'ionicons/icons';
import DarkMode from './DarkMode.jsx';

// Create a context to manage dark mode state
const DarkModeContext = createContext();

const Navbar = ({ logo, data }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={isDarkMode}>
      <div className='w-fit '>
      <div className={`w-fit h-70 pt-5 pb-3 pl-3 pr-3 sm:pt-6 sm:pb-3 sm:pl-3 sm:pr-3 gap-20 sm:gap-0 flex items-center justify-between
         ${isDarkMode ? 'dark:bg-gray-900' : 'bg-white'}`}>
        <div className='w-fit h-10  flex gap-12 '>
          {/* Logo section */}
          <div>
            <IonIcon icon={menu} className='hidden text-3xl w-10 h-10 items-center sm:block  text-gray-500' />
          </div>
          <div className='sm:hidden w-56 h-10 flex items-center gap-2'>
            <img src={logo} className='w-10 h-10' alt='Real-State-Logo' />
            <a href='/' className={`text-2xl font-semibold font-sans ${isDarkMode ? 'dark:text-white' : 'text-black'}`}>Yariga</a>
          </div>
          
          {/* Search bar section */}
          <div className={`w-96 h-12 rounded-xl p-2 flex gap-2 items-center ${isDarkMode ? 'dark:bg-black' : 'bg-gray-200 sm:bg-white'}`}>
            <IonIcon icon={search} className='  w-16 h-7  text-gray-600 opacity-45' />
            <input
              type='text'
              placeholder='Search Property, customer, etc'
              className={`sm:hidden w-96 h-9 ${isDarkMode ? 'dark:bg-black' : 'bg-gray-200'} border-none outline-none`}
            />
          </div>
        </div>

        {/* Right navbar section */}
        
        <div className={`relative w-12 h-10  gap-0  sm:gap-6 flex  items-center  ${isDarkMode ? 'dark:text-white' : 'text-black'}`}>
          <IonIcon icon={notifications} className={`w-6 h-6    ${isDarkMode ? 'text-gray-500' : 'text-black'}`} />
          <div className=' text absolute top-0 right-0 bg-red-500 w-5 h-5 flex items-center justify-center rounded-full text-white text-xs '>
            4
          </div>
        </div>

        <div className={`container flex w-44 ml-0 h-10   gap-0 ${isDarkMode ? 'dark:text-white' : 'text-black'}`}>
          <img src={data.image} className='w-10 h-10  rounded-full' alt='profile' />
          <div className='w-40 h-10 gap-2'>
            <p className={`w-40 h-5 gap-2 mt-[-5px] font-bold sm:hidden ${isDarkMode ? 'text-white' : 'text-black'}`}>{data.name}</p>
            <p className='w-40 h-5 gap-2 mt-1.5 text-gray-500 sm:hidden'>{data.title}</p>
          </div>
        </div>
        
        <DarkMode toggleDarkMode={toggleDarkMode} />
      </div>
      </div>
    </DarkModeContext.Provider>
  );
};

export default Navbar;