import React from 'react'
import { Routes,Route } from "react-router-dom";
import Login from "./routes/Login";
import DashBoard from './routes/DashBoard';

import NewGoldLoan from './routes/NewGoldLoan';
import MakePayment from './routes/MakePayment';
import RenewalLoan from './routes/RenewalLoan';
import LoanDetails from './routes/LoanDetails';
import CustomerDetails from './routes/CustomerDetails';



const App = () => {
  return (
    <>
    <Routes>
       <Route path="/" element={<Login />}/>
       <Route path="/DashBoard" element={<DashBoard />}/>
       <Route path="/DashBoard/MakePayment" element={<MakePayment />}/>
       <Route path="/DashBoard/NewGoldLoan" element={<NewGoldLoan />}/>
       <Route path="/DashBoard/RenewelLoan" element={<RenewalLoan />}/>
       <Route path="/DashBoard/LoanDetails" element={<LoanDetails />}/>
       <Route path="/DashBoard/CustomerDetails" element={<CustomerDetails />}/>
    </Routes>
    </>
  )
}

export default App