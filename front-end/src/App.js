import React from 'react'
import { Routes,Route } from "react-router-dom";
import Login from "./routes/Login";
import DashBoard from './routes/DashBoard';


const App = () => {
  return (
    <>
    <Routes>
       <Route path="/" element={<Login />}/>
       <Route path="/DashBoard" element={<DashBoard />}/>
       
    </Routes>
    </>
  )
}

export default App