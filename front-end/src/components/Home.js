import React from 'react'
import './DashBoardPageStyle.css';

const Home = () => {
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-'>

        <div class="input-container">
          <input placeholder="Enter text" class="input-field" type="text"/>
          <label for="input-field" class="input-label">Enter text</label>
          <span class="input-highlight"></span>
        </div>

      </div>
    </main>
  )
}

export default Home;