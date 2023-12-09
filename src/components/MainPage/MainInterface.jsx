import React from 'react'
import Header from '../Navigation/Header'
import { Outlet } from 'react-router-dom'

const MainInterface = () => {
  return (
    <>
        <section className="px-12">
            <Header />
            <Outlet />
        </section>
    </>
  )
}

export default MainInterface