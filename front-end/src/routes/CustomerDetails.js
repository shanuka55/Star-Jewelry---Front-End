import React from 'react'
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { FaSearch } from "react-icons/fa";

const CustomerDetails = () => {
  return (
    <div className='grid-container'>
      <Header/>
      <SideBar />
      <main className='main-container'>

        <div className='main-title'>
          <h3>CUSTOMER DETAILS</h3>
        </div>
        <div className='customer-deatails-container'>
          <div class="Search-Loan-number">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="search-input-icon">
                <g>
                <path
                  d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                ></path>
                </g>
              </svg>
              <input className="search-input" type="search" placeholder="Customer NIC" />
              <button class="search-button"><FaSearch /> search</button>
          </div>
          <table class="table-fill">
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th class="text-left">NIC</th>
                <th class="text-left">Full Name</th>
                <th class="text-left">Address</th>
                <th class="text-left">Contact</th>
                <th class="text-left">Description</th>
              </tr>
            </thead>
            <tbody class="table-hover">
              <tr>
                <td class="text-left">C001</td>
                <td class="text-left">200023525645</td>
                <td class="text-left">Manuka Jayarathne</td>
                <td class="text-left">Polonnaruwa,Aralaganvila</td>
                <td class="text-left">0784449617</td>
                <td class="text-left">Get a loan</td>
              </tr>
              <tr>
                <td class="text-left">C002</td>
                <td class="text-left">200023525665</td>
                <td class="text-left">Peshala Ranasinhe</td>
                <td class="text-left">Polonnaruwa,Aralaganvila</td>
                <td class="text-left">0784449617</td>
                <td class="text-left">Get a loan</td>
              </tr>
              <tr>
                <td class="text-left">C003</td>
                <td class="text-left">200013525222</td>
                <td class="text-left">Manuka Jayarathne</td>
                <td class="text-left">Polonnaruwa,Aralaganvila</td>
                <td class="text-left">0784449617</td>
                <td class="text-left">Get a loan</td>       
              </tr> 
              <tr>
                <td class="text-left">C004</td>
                <td class="text-left">200033525456</td>
                <td class="text-left">Manuka Jayarathne</td>
                <td class="text-left">Polonnaruwa,Aralaganvila</td>
                <td class="text-left">0784449617</td>
                <td class="text-left">Get a loan</td>
              </tr>
              <tr>
                <td class="text-left">C005</td>
                <td class="text-left">200523525685</td>
                <td class="text-left">Manuka Jayarathne</td>
                <td class="text-left">Polonnaruwa,Aralaganvila</td>
                <td class="text-left">0784449617</td>
                <td class="text-left">Get a loan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default CustomerDetails