import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Home from './Home';
import './DashBoardPageStyle.css';


const DashBoardPage = () => {
  return (
    <div className='grid-container'>
      <Header/>
      <SideBar/>
      <Home/>
    </div>
  )
}

export default DashBoardPage