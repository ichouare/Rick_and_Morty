import React from 'react'
import Logo from '../assets/o-navbar.png'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router'
const Navbar = () => {
  return (
    <main className='container lg:max-w-[1920px] font-sans-work min-w-full min-h-screen h-full  bg-white flex  gap-16 flex-col items-center  text-black  '>

    <nav className='w-full h-[152px]  flex items-center justify-center '>
        <div className='w-[268px] h-full'>
            <img src={Logo}   alt='RICK ET MORTY' className='w-full h-full object-cover'/>
        </div>
    </nav>
    <section className='font-sans-work min-w-full max-w-[] min-h-full grow  bg-white flex  gap-16 flex-col items-center  text-black'>
      <Outlet />
    </section>
    <Footer/>
    </main>
  )
}

export default Navbar