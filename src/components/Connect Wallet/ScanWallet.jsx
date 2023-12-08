import React from 'react'
import qrcode from '../../assets/qr-code.svg'

const ScanWallet = () => {
  return (
    <>
        <section className="w-2/4 mx-auto my-12 text-center flex flex-col gap-8">
            <h2 className="text-[#0078D4] text-4xl font-bold ">Connect wallet</h2>
            <div className="w-3/5 h-3/5 m-auto">
                <img src={qrcode} alt="QR code" className="w-full h-full"/>
            </div>

            <p>Scan the QR code by any mobile device wallet</p>
        </section>
    </>
  )
}

export default ScanWallet