import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Logo from './assets/nav/logo.jpg';
import profile from './assets/nav/profile.jpg';
import Navbar2 from './components/Navbar2.jsx';
import BodyMain from './components/Body/BodyMain.jsx';

const rightBarData = {
  image: profile,
  name: "Hawkins Maru",
  title: "Company Manager",
};

const App = () => {
  return (
   <>
   <div className="bg-gray-200">
    <Navbar logo={Logo} data={rightBarData} />
    <div className="flex">
    <Navbar2/>
    <BodyMain/>
    </div>
    </div>
    </>
  );
};

export default App;