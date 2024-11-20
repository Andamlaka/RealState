import React from 'react';
import dashboard from "../assets/nav2/dashboard.jpg";
import property from "../assets/nav2/property.jpg";
import agent from "../assets/nav2/agent.jpg";
import review from "../assets/nav2/review.jpg";
import message from "../assets/nav2/message.jpg";
import profile from "../assets/nav2/profile.jpg";

const menuItems = [
  { label: "Dashboard", icon: dashboard },
  { label: "Property", icon: property },
  { label: "Agent", icon: agent },
  { label: "Review", icon: review },
  { label: "Message", icon: message },
  { label: "My Profile", icon: profile }
];

const Navbar2 = () => {
  return (
    <div className='bg-white sm:hidden w-80 mt-3 ml-3 mr-3 pt-3 px-4 pb-16 gap-2 items-center justify-center'>
      <div className='w-fit h-fit py-2 px-6  gap-2 items-center justify-center bg-white rounded-xl'>
        {menuItems.map((item, index) => (
          <div className='w-44 h-14 py-4 hover:bg-blue-800 rounded-lg cursor-pointer ' key={index}>
            <div className='flex w-fit h-6 gap-2 items-center '>
              <img src={item.icon} alt={item.label} className='w-6 h-6 ml-2 text-gray-500' />
              <h1 className=' w-fit text-xl hover:text-white  rounded-xl px-4 py-2 font-bold font-manrope text-left text-gray-500'>
                {item.label}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar2;
