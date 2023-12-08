import React from 'react'
import logo from '../../assets/driveweavelogo.svg'

const Logo = ({ h2, span }) => {
  return (
    <div className="flex items-center gap-2  ">
        <img src={logo} alt="driveweave logo" />
        <h2 className="text-3xl" style={h2}>Drive<span style={span}>weave</span></h2>
    </div>
  )
}

export default Logo