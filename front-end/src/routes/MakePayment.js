import React from 'react'
import Header from '../components/Header';
import SideBar from '../components/SideBar';


const MakePayment = () => {

  return (
    <div className='grid-container'>
      <Header/>
      <SideBar />
      <main className='main-container'>

        <div className='main-title'>
          <h3>MAKE A PAYMENT</h3>
        </div>

        <div className='main-'>
          <div className='Search-Customer'>
            <div class="Search-Loan-number">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="search-input-icon">
                    <g>
                    <path
                        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                    ></path>
                    </g>
                </svg>
                
                <input className="search-input" type="search" placeholder="Loan Number" />
                <button class="search-button">search</button>
                <button class="Pay-More-button">PayMore</button>

            </div>
          </div>
        


          <div class="input-container">
            <input placeholder="Loan Number" class="input-field" type="text"/>
            <label for="input-field" class="input-label">Enter Loan Number</label>
            <span className="input-highlight"></span>
          </div>
          <div class="input-container">
            <input placeholder="Loan Number" class="input-field" type="text"/>
            <label for="input-field" class="input-label">Enter Loan Number</label>
            <span class="input-highlight"></span>
          </div>
          <div class="input-container">
            <input placeholder="Loan Number" class="input-field" type="text"/>
            <label for="input-field" class="input-label">Enter Loan Number</label>
            <span class="input-highlight"></span>
          </div>

        </div>
        </main>
    </div>
    
  )
}

export default MakePayment