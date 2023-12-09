import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import metamask from '../../assets/MetaMask .png'
import coinbase from '../../assets/Coinbase.png'
import trustwallet from '../../assets/TrustWallet.png'
import walletConnect from '../../assets/WalletConnect Labs.png'
import { Link } from 'react-router-dom';

const ChooseWallet = () => {
  return (
    <>
        <section className="w-2/4 mx-auto my-12 text-center" >
            <h2 className="text-3xl font-extrabold my-4" >Select a wallet</h2>

            <div className="w-[90%] m-auto text-lg flex flex-col gap-4 my-8">
                <Link to={"/connectwallet/scancode"}>
                    <button className="p-4 flex items-center gap-4 rounded-3xl border-2 w-full hover:scale-105 duration-[.4s] ">
                        <img src={metamask} alt="metamask logo" className="w-10 h-10" />
                        <p className="font-bold w-full text-left">Metamask</p>
                        <IoIosArrowRoundForward />
                    </button>
                </Link>
                
                <Link to={"/connectwallet/scancode"}>
                    <button className="p-4 flex items-center gap-4 rounded-3xl border-2 w-full hover:scale-105 duration-[.4s] ">
                        <img src={coinbase} alt="coinbase logo" className="w-10 h-10" />
                        <p className="font-bold w-full text-left">Coinbase</p>
                        <IoIosArrowRoundForward />
                    </button>
                </Link>

                <Link to={"/connectwallet/scancode"}>
                    <button className="p-4 flex items-center gap-4 rounded-3xl border-2 w-full hover:scale-105 duration-[.4s]">
                        <img src={trustwallet} alt="trustwallet logo" className="w-10 h-10" />
                        <p className="font-bold w-full text-left">Trustwallet</p>
                        <IoIosArrowRoundForward />
                    </button>
                </Link>

                <Link to={"/connectwallet/scancode"}>
                    <button className="p-4 flex items-center gap-4 rounded-3xl border-2 w-full hover:scale-105 duration-[.4s]">
                        <img src={walletConnect} alt="walletConnect logo" className="w-10 h-10" />
                        <p className="font-bold w-full text-left">WalletConnect</p>
                        <IoIosArrowRoundForward />
                    </button>
                </Link>
            </div>

            <p className="text-[#4C4C4C] mt-4 text-left">We do not own your private keys and cannot access your funds without your approval</p>
        </section>
    </>
  )
}

export default ChooseWallet