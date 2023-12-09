import React from 'react'
import Logo from '../Logo/Logo'
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import SideNav from './SideNav';

const Header = () => {
  const toggleSideNav = () => {
    const sideBar = document.getElementById('sideNav')

    if (sideBar.style.left === "-25%") {
        sideBar.style.left = "0%"
    } else {
        sideBar.style.left = "-25%"
    }
  }

  return (
    <>
        <header className="flex justify-between p-8 items-center ">
            <Logo h2={{color: "#0078D4"}} span={{color: "#A02022"}}  />
            <div className="flex items-center border-2 rounded-2xl w-3/5 border-[#0078D4] p-2 text-xl gap-2 ">
                <IoIosSearch />
                <input type="search" placeholder="Search" className="w-full outline-0" />   
            </div>

            <div className="flex items-center text-[#A02022] text-2xl gap-4 ">
                <IoMdNotificationsOutline className="cursor-pointer "/>
                <FaRegCircleUser onClick={toggleSideNav} className="cursor-pointer "/>
                {/* <p>{}</p> */}
            </div>

            
        </header>

        <SideNav />
    </>
  )
}

export default Header