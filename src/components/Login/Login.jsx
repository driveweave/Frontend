import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GoogleAndFacebook from '../common/GoogleAndFacebook'
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
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
        <section className="text-center px-24 w-2/4 m-auto ">
            <h2 className="text-2xl font-bold text-[#4C4C4C] ">Welcome</h2>

            <form className="my-16 flex flex-col gap-4" >
                <div className="flex p-2 items-center gap-2 border rounded-lg ">
                    <AiOutlineMail />
                    <input type="email"
                        placeholder="Email"
                        className="w-full outline-0"
                    />
                </div>

                <div className="flex p-2 items-center gap-2 border rounded-lg ">
                    <AiOutlineLock />
                    <input type="password"
                        placeholder="Password"
                        className="w-full outline-0"
                        id="showPass"
                    />
                    {view ? <AiOutlineEyeInvisible onClick={viewPassword} /> : <AiOutlineEye onClick={viewPassword} />}
                </div>

                <Link to={"#"}><p className="float-right text-[#A02022] text-l ">Forgot password?</p></Link>

                <input type="submit" 
                    value="Log in" 
                    className="w-full bg-[#0078D4] rounded-lg p-2 text-white font-bold mt-8 cursor-pointer hover:scale-105 duration-[.4s] "
                />
            </form>

            <p className="font-semibold text-[#828282] ">OR</p>

            <GoogleAndFacebook />

            <p className="text-[#828282] text-l ">Have no account yet? <Link to={"/signup"}><span className="text-[#28A8EA] cursor-pointer">Register</span></Link></p>
        </section>
    </>
  )
}

export default Login