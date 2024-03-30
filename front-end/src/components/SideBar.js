import React from 'react'
import { Bs123 } from 'react-icons/bs';
import { IoIosStar } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { RiCalendarEventFill } from "react-icons/ri";
import { BiSolidDetail } from "react-icons/bi";
import { AiFillGold } from "react-icons/ai";
import "./SideBarStyle.css";


const SideBar = ({ setActiveComponent }) => {
    const handleLinkClick = (component) => {
        setActiveComponent(component);
      };
  return (
    <aside id='sidebar'>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <IoIosStar className="icon"/> JEWELRY
            </div>
            <span className='icon close_icon'>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href='#' >
                    <AiFillGold className="icon"/> New Gold Loan
                </a>     
            </li>
            <li className='sidebar-list-item'>
                <a href='#' onClick={() => handleLinkClick('payment')}>
                    <MdOutlinePayment className="icon"/> Make a Payment
                </a>     
            </li>
            <li className='sidebar-list-item'>
                <a href='#'>
                    <RiCalendarEventFill className="icon"/> Renewal Loan
                </a>     
            </li>
            <li className='sidebar-list-item'>
                <a href='#'>
                    <BiSolidDetail className="icon"/> Loan Deatails
                </a>     
            </li>
            <li className='sidebar-list-item'>
                <a href='#'>
                    <MdPeopleAlt className="icon"/> Customer Deatails
                </a>     
            </li>
            <li className='sidebar-list-item'>
                <a href='#'>
                    <Bs123 className="icon"/>DashBoard
                </a>     
            </li>
            <li className='sidebar-list-item'>
                <a href='#'>
                    <Bs123 className="icon"/>DashBoard
                </a>     
            </li>
            <li className='sidebar-list-item'>
                <a href='#'>
                    <Bs123 className="icon"/>DashBoard
                </a>     
            </li>
            <li className='sidebar-list-item'>
                <a href='#'>
                    <Bs123 className="icon"/>DashBoard
                </a>     
            </li>
            
        </ul>
    </aside>
  )
}

export default SideBar