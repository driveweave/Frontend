import React, { useContext, useState, useEffect } from 'react'
import GoogleAndFacebook from '../common/GoogleAndFacebook'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../hooks/context'
import axios from 'axios'

const Signup = () => {
    const [view, setView] = useState(false)

    const {
        email,
        password,
        fullname,
        setEmail,
        setPassword,
        setFullname,
        getEmailValue,
        getPasswordValue,
        getFullNameValue,
        showError,
        setShowError
    } = useContext(AuthContext)

    const viewPassword = () => {
        setView(prev => !prev)

        let showPass = document.getElementById("showPass")
        if (showPass.type === "password") {
            showPass.type = "text"
        } else {
            showPass.type = "password"
        }
    }

    const apiUrl = import.meta.env.VITE_BASE_URL

    const navigate = useNavigate()

    useEffect(() => {
        if (showError === true) {
            setTimeout(() => {
                setShowError(false);
                console.log("timeout executed")
            }, 2000);
        }
    
        
        return;
    }, [showError]); 

    const handleSigninSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await axios.post(`${apiUrl}/users`,{
                email: email,
                password: password,
                full_name: fullname

            })
            
            if (data.success === true) {
                console.log("login successful")

                navigate(`/main/home`);
                setEmail("");
                setPassword("");
                setFullname("")
            }
        } catch (error) {
            console.error("Error: Invalid credentials");
            setShowError(true);
        }
    }


  return (
    <>
        <section className="text-center w-2/4 m-auto px-24 ">
            <h2 className="text-2xl font-bold text-[#4C4C4C] ">Create Account</h2>

            {showError && <h2 className="text-red-700 text-xl">Invalid credentials, try again!</h2>}

            <GoogleAndFacebook />

            <div className="flex items-center gap-2 justify-center ">
                <hr className="border-t-[#828282] border w-4 "/>
                <p className="text-[#828282] font-semibold">OR</p>
                <hr className="border-t-[#828282] border w-4 " />
            </div>

            <form className="flex flex-col gap-4 my-4" onSubmit={handleSigninSubmit}>
                <input type="text"
                    placeholder="Full Name"
                    className="border-b outline-0 w-full p-2 bg-none "
                    value={fullname}
                    onChange={getFullNameValue}
                />
                <input type="email"
                    placeholder="Email"
                    className="border-b outline-0 w-full p-2 bg-none "
                    value={email}
                    onChange={getEmailValue}
                />
                <div className="border-b outline-0 flex items-center p-2 ">
                    <input type="password"
                        placeholder="Password"
                        className="w-full outline-0"
                        id="showPass"
                        value={password}
                        onChange={getPasswordValue}
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