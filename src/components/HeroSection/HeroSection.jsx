import { Link } from 'react-router-dom'
import image from '../../assets/heroImage.svg'

const HeroSection = () => {
  return (
    <>
      <section className="flex items-center px-20 w-full ">
        <div className="w-2/4 flex flex-col gap-24 ">
          <h2 className="text-[#0078D4] text-5xl font-extrabold leading-[3.5rem] ">Save and share your files and folders with Driveweave</h2>
          <p className="text-2xl  ">Store, share files and folders across all devices</p>

          <div className="flex gap-8 ">
            <Link to={"/login"}>
              <button className="p-4 font-bold text-white rounded-xl bg-[#A02022] w-40 text-xl hover:scale-105 ease-in-out duration-[.5s] ">Sign in</button>
            </Link>
            <Link to={"/signup"}>
              <button className="p-4 font-bold text-[#A02022] border-2 border-[#A02022] rounded-xl w-40 text-xl hover:scale-105 ease-in-out duration-[.5s] ">Sign up</button>
            </Link>
          </div>
        </div>

        <div className="w-2/4 ">
          <img src={image} alt="hero image" className="w-full h-full " />
        </div>
      </section>
    </>
  )
}

export default HeroSection