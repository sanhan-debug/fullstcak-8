import {Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'


function Root() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Root