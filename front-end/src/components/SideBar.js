import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillGold } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { RiCalendarEventFill } from "react-icons/ri";
import { BiSolidDetail } from "react-icons/bi";
import { MdPeopleAlt } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import "./SideBarStyle.css";

const SideBar = () => {
    // const navigate = useNavigate();
  return (
    <aside id='sidebar'>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          NEW <IoIosStar className="icon" style={{color: 'goldenrod'}}/> STAR JEWELRY
        </div>
        <span className='icon close_icon'>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to='/DashBoard/NewGoldLoan'>
            <AiFillGold className="icon"/> New Gold Loan
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/DashBoard/MakePayment'>
            <MdOutlinePayment className="icon"/> Make a Payment
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/DashBoard/RenewelLoan'>
            <RiCalendarEventFill className="icon"/> Renewal Loan
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/DashBoard/LoanDetails'>
            <BiSolidDetail className="icon"/> Loan Details
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to='/DashBoard/CustomerDetails'>
            <MdPeopleAlt className="icon"/> Customer Details
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <button>
          <Link to='/DashBoard/CustomerDetails'>
            <MdPeopleAlt className="icon"/> Customer Details
          </Link>
          </button>
          
        </li>
      </ul>
    </aside>
  )
}

export default SideBar;
