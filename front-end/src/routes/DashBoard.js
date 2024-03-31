import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import '../components/DashBoardPageStyle.css';

const DashBoard = () => {
  return (
    <div className='grid-container'>
      <Header/>
      <SideBar />
      
    </div>
  )
}

export default DashBoard;
