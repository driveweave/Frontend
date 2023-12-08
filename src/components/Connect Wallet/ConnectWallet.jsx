import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../Logo/Logo'

const ConnectWallet = () => {
  return (
    <section className="px-16 py-4">
        <Logo h2={{color: "#0078D4"}} span={{color: "#A02022"}} />
        <Outlet />
    </section>
  )
}

export default ConnectWallet