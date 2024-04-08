import React from 'react'
import Header from '../components/Header';
import SideBar from '../components/SideBar';


const NewGoldLoan = () => {
  return (
    <div className='grid-container'>
      <Header/>
      <SideBar />
      <main className='main-container'>

        <div className='main-title'>
          <h3>NEW GOLD LOAN</h3>
        </div>
        <div>
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
        </div>
        </main>
    </div>
  )
}

export default NewGoldLoan