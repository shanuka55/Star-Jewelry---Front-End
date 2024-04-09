import React from 'react'
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import "../components/DashBoardPageStyle.css";


const NewGoldLoan = () => {
  return (
    <div className='grid-container'>
      <Header/>
      <SideBar />
      <main className='main-container'>

        <div className='main-title'>
          <h3>NEW GOLD LOAN</h3>
        </div>
        <div className='new-gold-loan-conatiner'>
            <div class="input-container">
                <input placeholder="Loan Number" class="input-field" type="text"/>
                <label for="input-field" class="input-label">Enter Loan Number</label>
                <span className="input-highlight"></span>
            </div>
            <div class="input-container">
                <input placeholder="Total Weitht of Articles(Gram)" class="input-field" type="text"/>
                <label for="input-field" class="input-label">Enter Total Weitht of Articles (Gram) </label>
                <span className="input-highlight"></span>
            </div>
            <div class="input-container">
                <input placeholder="Assessed Value" class="input-field" type="text"/>
                <label for="input-field" class="input-label">Enter Assessed Value </label>
                <span className="input-highlight"></span>
            </div>
            <div class="input-container">
                <input placeholder="Market Value" class="input-field" type="text"/>
                <label for="input-field" class="input-label">Enter Market Value of Article </label>
                <span className="input-highlight"></span>
            </div>
            <div class="input-container">
                <input placeholder="Loan Amount" class="input-field" type="text"/>
                <label for="input-field" class="input-label">Enter Loan Amount </label>
                <span className="input-highlight"></span>
            </div>
            <div class="input-container">
                <input placeholder="Closly Date" class="input-field" type="text"/>
                <label for="input-field" class="input-label">Enter Closly Date </label>
                <span className="input-highlight"></span>
            </div>
            <div class="input-container">
                <input placeholder="Interest" class="input-field" type="text"/>
                <label for="input-field" class="input-label">Interest </label>
                <span className="input-highlight"></span>
            </div>
        </div>
        
        <div className='Customer-deatails-container'>
          <div className='Search-Customer'>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="search-input-icon">
                      <g>
                      <path
                          d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                      ></path>
                      </g>
                  </svg>
                  
                  <input className="search-input" type="search" placeholder="Search Customer" />
                  <button class="search-button">search</button>
          </div>
          
          <div class="input-container">
                <input placeholder="NIC" class="input-field" type="text"/>
                <label for="input-field" class="input-label">NIC Number</label>
                <span className="input-highlight"></span>
          </div>
          <div class="input-container">
                <input placeholder="Full Name" class="input-field" type="text"/>
                <label for="input-field" class="input-label">Full Name</label>
                <span className="input-highlight"></span>
          </div>
          <div class="input-container">
                <input placeholder="Address" class="input-field" type="text"/>
                <label for="input-field" class="input-label">Address</label>
                <span className="input-highlight"></span>
          </div>
          <div class="input-container">
                <input placeholder="Full Name" class="input-field" type="text"/>
                <label for="input-field" class="input-label">Full Name</label>
                <span className="input-highlight"></span>
          </div>
          <div class="input-container">
                <input placeholder="Telephone Number" class="input-field" type="text"/>
                <label for="input-field" class="input-label">Telephone Number</label>
                <span className="input-highlight"></span>
          </div>
          <div class="input-container">
                <input placeholder="Description" class="input-field" type="text"/>
                <label for="input-field" class="input-label">Description</label>
                <span className="input-highlight"></span>
          </div>

          <button class="Add-customer-button">Add</button>

        </div>
        </main>
    </div>
  )
}

export default NewGoldLoan