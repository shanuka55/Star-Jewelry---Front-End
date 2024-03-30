import React from 'react'
import { Bs123 } from 'react-icons/bs';
import { IoIosStar } from "react-icons/io";
import "./SideBarStyle.css";

const SideBar = () => {
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
                <a href=''>
                    <Bs123 className="icon"/>DashBoard
                </a>     
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <Bs123 className="icon"/>DashBoard
                </a>     
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <Bs123 className="icon"/>DashBoard
                </a>     
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <Bs123 className="icon"/>DashBoard
                </a>     
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <Bs123 className="icon"/>DashBoard
                </a>     
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <Bs123 className="icon"/>DashBoard
                </a>     
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <Bs123 className="icon"/>DashBoard
                </a>     
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <Bs123 className="icon"/>DashBoard
                </a>     
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <Bs123 className="icon"/>DashBoard
                </a>     
            </li>
            
        </ul>
    </aside>
  )
}

export default SideBar