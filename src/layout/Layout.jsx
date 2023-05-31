import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../generales/Navbar'
import Footer from '../generales/Footer'
const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout