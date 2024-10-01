import React from 'react'
import Logo from '../assets/o-navbar.png'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router'
const Navbar = () => {
  return (
    <main className='container  font-sans-work min-w-full min-h-screen h-full   flex  gap-16 flex-col items-center   text-black  max-w-[1216px]  '>

    <nav className='w-full h-[152px]  flex items-center justify-center '>
        <div className='w-[268px] h-full'>
            <img src={Logo}   alt='RICK ET MORTY' className='w-full h-full object-cover'/>
        </div>
    </nav>
    <section className='font-sans-work min-w-full max-w-[1216px]  min-h-full grow    flex  gap-16 flex-col items-center  text-black'>
      <Outlet />
    </section>
    <Footer/>
    </main>
  )
}

export default Navbar