import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Home from './Home';
import './DashBoardPageStyle.css';
import MakePayment from './MakePayment';
import { useState } from 'react';


const DashBoardPage = () => {
  const [activeComponent, setActiveComponent] = useState('home');
  return (
    <div className='grid-container'>
      <Header/>
      <SideBar setActiveComponent={setActiveComponent}/>
      <div className="main-content">
        {activeComponent === 'home' && <Home />}
        {activeComponent === 'payment' && <MakePayment />}
      </div>
    </div>
  )
}

export default DashBoardPage




