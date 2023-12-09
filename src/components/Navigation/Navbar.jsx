import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'

const Navbar = ({ h2, span }) => {
  return (
    <nav className="flex justify-between items-center py-4 px-16 ">
        <Logo h2={{color: "#0078D4"}} span={{color: "#A02022"}} />
        <Link to={"/connectwallet"}>
          <button className="bg-[#A02022] text-white p-4 rounded-xl font-bold hover:scale-105 duration-[.5s] ">Connect wallet</button>
        </Link>
    </nav>

  )
}

export default Navbar