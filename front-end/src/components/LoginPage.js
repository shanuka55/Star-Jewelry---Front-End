import React from 'react'
import "./LoginPageStyle.css";
import IntroImg from "../Assets/image03.jpg"
import { IoIosStar } from "react-icons/io";

const LoginPage = () => {
  return (
    <div>
      <img className='into-img' 
      src={IntroImg} alt='IntroImg'/>

      <div className='login-Section'>
        <div className='login-name'>
          <h1><IoIosStar />Jewelry</h1>
        </div>
        

        <div className="form__group field">
          <input type="text" autocomplete="off" name="text" className="input" placeholder="Username"/>
          <input type="password" autocomplete="off" name="text" className="input" placeholder="Password"/>
        </div>

        
        <a href="#" class="btn"> Click Me</a>

      </div>
      
    </div>

      
  )
}

export default LoginPage;