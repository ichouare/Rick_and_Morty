import React from 'react'
import Logo from '../assets/o-navbar.png'
const Footer = () => {
  return (
    <nav className='w-full h-[176px]  flex items-center justify-center  bg-[#F6F6F7]'>
        <div className=' h-full'>
            <img src={Logo}   alt='RICK ET MORTY' className='w-full h-full object-cover'/>
        </div>
    </nav>
  )
}

export default Footer