import React from 'react'
import Header from '../components/Header';
import SideBar from '../components/SideBar';


const LoanDetails = () => {
  return (
    <div className='grid-container'>
    <Header/>
    <SideBar />
    <main className='main-container'>

      <div className='main-title'>
        <h3>LOAN DETAILS</h3>
      </div>

      </main>
  </div>
  )
}

export default LoanDetails