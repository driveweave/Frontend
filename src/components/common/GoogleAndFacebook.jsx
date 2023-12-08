import React from 'react'
import google from '../../assets/google.svg'
import facebook from '../../assets/facebook.svg'

const GoogleAndFacebook = () => {
  return (
    <div className="flex items-center gap-8 w-full my-8">
        <button className="flex items-center text-l gap-2 border p-2 rounded-xl w-2/4 hover:scale-105 duration-[.3s] ">
            <img src={google} alt="google logo" />
            <p>Sign in with Google</p>
        </button>
        <button className="flex items-center textxl gap-2 border p-2 rounded-xl w-2/4 hover:scale-105 duration-[.3s] ">
            <img src={facebook} alt="facebook logo" />
            <p>Sign in with Facebook</p>
        </button>
    </div>
  )
}

export default GoogleAndFacebook