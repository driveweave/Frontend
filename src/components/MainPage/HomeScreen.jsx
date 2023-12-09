import React from 'react'
import { IoArrowUp, IoAddOutline } from "react-icons/io5";
import FileCard from '../common/FileCard';

function HomeScreen() {
  return (
    <>
        <section className="px-12 flex flex-col gap-4">
            <h2 className="text-[#0078D4] text-3xl font-extrabold">Home</h2>
            <div className="flex gap-8 items-center ">
                <button className="p-4 bg-[#0078D4] text-white flex items-center font-bold text-xl rounded-2xl w-40 justify-center gap-2 hover:scale-105 duration-[.3s] ">
                    <IoArrowUp />
                    <p>Upload</p>
                </button>
                <button className="p-4 bg-[#0078D4] text-white flex items-center font-bold text-xl rounded-2xl w-40 justify-center gap-2 hover:scale-105 duration-[.3s] ">
                    <IoAddOutline />
                    <p>Create</p>
                </button>
            </div>
            <section className="min-h-80 grid grid-cols-4 m-auto gap-8">
                <FileCard /> <FileCard /> <FileCard /> <FileCard /> 
                <FileCard /> <FileCard /> <FileCard /> <FileCard />
            </section>
            <button className="p-4 my-4 bg-[#0078D4] text-white text-xl rounded-2xl w-40 font-bold m-auto hover:scale-105 duration-[.3s]">Show More</button>
        </section>
    </>
  )
}

export default HomeScreen