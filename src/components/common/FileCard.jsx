import React, { useState } from 'react'
import { FaFileAlt } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import casestudy from '../../assets/casestudy.png'
import OptionModal from './OptionModal';

const FileCard = () => {
    const [toggleOption, setToggleOptions] = useState(false)

    const toggleOptionModal = () => {
        console.log("clicked")
        const optionsModal = document.getElementById('optionModal')
    
        if (optionsModal.style.visibility === "hidden") {
            optionsModal.style.visibility = "visible"
        } else {
            optionsModal.style.visibility = "hidden"
        }

        setToggleOptions(prev => !prev)
    }


  return (
    <>
        <div className="border border-[#A02022] w-[16rem] h-60 p-4 rounded ">
            <div className="flex gap-4 text-[#4B9BFF] text-lg items-center ">
                <FaFileAlt />
                <p className="text-[#A02022] w-full font-medium ">Case study</p>
                <IoMdMore className="text-3xl cursor-pointer relative" onClick={toggleOptionModal}/>
            </div>
            <div className="flex items-center justify-center p-2 h-3/4">
                <img src={casestudy} alt="file image" className="w-full h-full" />
            </div>
            <div className="flex justify-between text-[#A02022] items-center ">
                <div className="rounded-full bg-[#4B9BFF] w-4 h-4"></div>
                <p>Opened now</p>
                <p>time</p>
            </div>
        </div>
        {toggleOption && <OptionModal />}
        
    </>
  )
}

export default FileCard