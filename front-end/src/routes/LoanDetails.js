import React from 'react'
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { FaSearch } from "react-icons/fa";

const LoanDetails = () => {
  return (
    <div className='grid-container'>
      <Header/>
      <SideBar />
      <main className='main-container'>

        <div className='main-title'>
          <h3>LOAN DETAILS</h3>
        </div>
        <div className='loan-deatails-container'>
          <div class="Search-Loan-number">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="search-input-icon">
                <g>
                <path
                  d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                ></path>
                </g>
              </svg>
              <input className="search-input" type="search" placeholder="Loan Number" />
              <button class="search-button"><FaSearch /> search</button>
          </div>
          <table class="table-fill">
            <thead>
              <tr>
                <th class="text-left">Loan Number</th>
                <th class="text-left">Total Weitht(Gram)</th>
                <th class="text-left">Assessed Value</th>
                <th class="text-left">Market Value</th>
                <th class="text-left">Loan Amount</th>
                <th class="text-left">Closly Date</th>
                <th class="text-left">Interest</th>
              </tr>
            </thead>
            <tbody class="table-hover">
              <tr>
                <td class="text-left">NSJ001</td>
                <td class="text-left">30g</td>
                <td class="text-left">250000.00</td>
                <td class="text-left">260000.00</td>
                <td class="text-left">100000.00</td>
                <td class="text-left">2024-January-10</td>
                <td class="text-left">No</td>
              </tr>
              <tr>
                <td class="text-left">NSJ002</td>
                <td class="text-left">20g</td>
                <td class="text-left">150000.00</td>
                <td class="text-left">160000.00</td>
                <td class="text-left">100000.00</td>
                <td class="text-left">2023-Octomber-10</td>
                <td class="text-left">No</td>
              </tr>
              <tr>
                <td class="text-left">NSJ003</td>
                <td class="text-left">11g</td>
                <td class="text-left">60000.00</td>
                <td class="text-left">65000.00</td>
                <td class="text-left">20000.00</td>
                <td class="text-left">2024-January-15</td>
                <td class="text-left">No</td>     
              </tr> 
              <tr>
                <td class="text-left">NSJ001</td>
                <td class="text-left">5g</td>
                <td class="text-left">50000.00</td>
                <td class="text-left">60000.00</td>
                <td class="text-left">10000.00</td>
                <td class="text-left">2024-March-10</td>
                <td class="text-left">No</td>
              </tr>
              <tr>
                <td class="text-left">NSJ001</td>
                <td class="text-left">40g</td>
                <td class="text-left">850000.00</td>
                <td class="text-left">960000.00</td>
                <td class="text-left">500000.00</td>
                <td class="text-left">2024-April-11</td>
                <td class="text-left">No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default LoanDetails