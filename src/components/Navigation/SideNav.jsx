import React from 'react'
import Logo from '../Logo/Logo'
import { IoPowerOutline, IoTrashOutline, IoPeopleOutline } from "react-icons/io5";
import { CiCloudOn, CiSettings, CiClock2, CiHome } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <>
        <nav className="text-white bg-[#A02022] fixed w-1/4 left-[-25%] top-0 h-full z-50 ease-in-out duration-[1s] " id="sideNav">
            <div className="p-4">
                <Logo />
            </div>

            <ul className="flex flex-col gap-2 my-4 p-4">
                <NavLink to={"/main/home"} className="active:bg-[#B6B6B6] active:rounded-3xl">
                    <li className="flex items-center gap-2 p-2  ">
                        <CiHome className="text-xl font-extrabold " />
                        <p>Home</p>
                    </li>
                </NavLink>
                <NavLink to={"/main/recent"}>
                    <li className="flex items-center gap-2 p-2 active:bg-[#B6B6B6] active:rounded-3xl ">
                        <CiClock2 className="text-xl font-extrabold " />
                        <p>Recent</p>
                    </li>
                </NavLink>
                <NavLink to={"/main/shared"}>
                    <li className="flex items-center gap-2 p-2 active:bg-[#B6B6B6] active:rounded-3xl ">
                        <IoPeopleOutline className="text-xl font-extrabold " />
                        <p>Shared with me</p>
                    </li>
                </NavLink>
                <NavLink to={"/main/trash"}>
                    <li className="flex items-center gap-2 p-2 active:bg-[#B6B6B6] active:rounded-3xl ">
                        <IoTrashOutline className="text-xl font-extrabold " />
                        <p>Trash</p>
                    </li>
                </NavLink>
                <NavLink to={"/main/settings"}>
                    <li className="flex items-center gap-2 p-2 active:bg-[#B6B6B6] active:rounded-3xl ">
                        <CiSettings className="text-xl font-extrabold " />
                        <p>Settings</p>
                    </li>
                </NavLink>
            </ul>

            <div className="fixed border-t-2 bottom-0 w-[inherit] p-4 ">
                <div>
                    <div className="flex items-center gap-2 p-2">
                        <CiCloudOn className="text-xl font-extrabold " />
                        <p>Storage</p>
                    </div>
                    <div className="flex flex-col p-2">
                        <input type="range" min="2" max="100" step="1" value="2" className="rounded-lg overflow-hidden appearance-none bg-white h-1 w-[80%]"/>
                        <label>1.7gb / 256gb</label>
                    </div>
                </div>
                <div className="flex items-center gap-2 p-2">
                    <IoPowerOutline className="text-xl font-extrabold " />
                    <p>Logout</p>
                </div>
            </div>
        </nav>
    </>
  )
}

export default SideNav