import React from 'react'
import Logo from '../assets/o-navbar.png'
const Navbar = () => {
  return (
    <nav className='w-full h-[152px]  flex items-center justify-center '>
        <div className='w-[268px] h-[64px]'>
            <img src={Logo}   alt='RICK ET MORTY' className='w-full h-full object-cover'/>
        </div>
    </nav>
  )
}

export default Navbar