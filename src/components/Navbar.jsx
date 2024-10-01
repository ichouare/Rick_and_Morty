import React from 'react'
import Logo from '../assets/o-navbar.png'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router'
const Navbar = () => {
  return (
    <main className=' font-sans-work min-w-full min-h-screen h-auto bg-white flex  gap-16 flex-col items-center  text-black  px-8'>

    <nav className='w-full h-[152px]  flex items-center justify-center '>
        <div className='w-[268px] h-[64px]'>
            <img src={Logo}   alt='RICK ET MORTY' className='w-full h-full object-cover'/>
        </div>
    </nav>
    <section className=''>
      <Outlet />
    </section>
    <Footer/>
    </main>
  )
}

export default Navbar