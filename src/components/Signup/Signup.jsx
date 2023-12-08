import React, { useState } from 'react'
import GoogleAndFacebook from '../common/GoogleAndFacebook'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Signup = () => {
    const [view, setView] = useState(false)

    const viewPassword = () => {
        setView(prev => !prev)

        let showPass = document.getElementById("showPass")
        if (showPass.type === "password") {
            showPass.type = "text"
        } else {
            showPass.type = "password"
        }
    }


  return (
    <>
        <section className="text-center w-2/4 m-auto px-24 ">
            <h2 className="text-2xl font-bold text-[#4C4C4C] ">Create Account</h2>

            <GoogleAndFacebook />

            <div className="flex items-center gap-2 justify-center ">
                <hr className="border-t-[#828282] border w-4 "/>
                <p className="text-[#828282] font-semibold">OR</p>
                <hr className="border-t-[#828282] border w-4 " />
            </div>

            <form className="flex flex-col gap-4 my-4">
                <input type="text"
                    placeholder="Full Name"
                    className="border-b outline-0 w-full p-2 bg-none "
                />
                <input type="email"
                    placeholder="Email"
                    className="border-b outline-0 w-full p-2 bg-none "
                />
                <div className="border-b outline-0 flex items-center p-2 ">
                    <input type="password"
                        placeholder="Password"
                        className="w-full outline-0"
                        id="showPass"
                    />
                    
                    {view ? <AiOutlineEyeInvisible onClick={viewPassword} /> : <AiOutlineEye onClick={viewPassword} />}
                </div>

                <input type="submit"
                    value="Create Account"
                    className="rounded-xl font-bold text-xl bg-[#0078D4] p-2 text-white mt-4 hover:scale-105 duration-[.4s] cursor-pointer "
                />
            </form>

            <p className="text-[#828282] text-l text-left ">Already have an account? <Link to={"/login"}><span className="text-[#28A8EA] cursor-pointer">Log in</span></Link></p>
        </section>
    </>
  )
}

export default Signup