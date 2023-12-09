import React from 'react'
import { Link } from 'react-router-dom'
import { FiDownload } from "react-icons/fi";
import { MdOutlineDriveFileRenameOutline, MdOutlineInfo, MdOutlineDelete } from "react-icons/md";
import { IoMdCopy } from "react-icons/io";
import { PiShareFatBold } from "react-icons/pi";

const OptionModal = () => {
  return (
    <>
        <div className="p-4 absolute bg-white rounded w-80 h-80 " id="optionModal">
            <ul className="flex flex-col gap-2">
                <Link>
                    <li className="flex items-center hover:scale-105 duration-[.5s] cursor-pointer gap-2 text-2xl text-[#0078D4] ">
                        <FiDownload />
                        <p>Download</p>
                    </li>
                </Link>
                <Link>
                    <li className="flex items-center hover:scale-105 duration-[.5s] cursor-pointer gap-2 text-2xl text-[#0078D4] ">
                        <MdOutlineDriveFileRenameOutline />
                        <p>Rename</p>
                    </li>
                </Link>
                <Link>
                    <li className="flex items-center hover:scale-105 duration-[.5s] cursor-pointer gap-2 text-2xl text-[#0078D4] ">
                        <IoMdCopy />
                        <p>Copy</p>
                    </li>
                </Link>
                <Link>
                    <li className="flex items-center hover:scale-105 duration-[.5s] cursor-pointer gap-2 text-2xl text-[#0078D4] ">
                        <PiShareFatBold />
                        <p>share</p>
                    </li>
                </Link>
                <Link>
                    <li className="flex items-center hover:scale-105 duration-[.5s] cursor-pointer gap-2 text-2xl text-[#0078D4] ">
                        <MdOutlineInfo />
                        <p>File Information</p>
                    </li>
                </Link>
                <Link>
                    <li className="flex items-center hover:scale-105 duration-[.5s] cursor-pointer gap-2 text-2xl text-[#0078D4] ">
                        <MdOutlineDelete />
                        <p>Delete</p>
                    </li>
                </Link>
            </ul>
        </div>
    </>
  )
}

export default OptionModal