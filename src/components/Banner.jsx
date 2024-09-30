import React from 'react'

import BannerImg from '../assets/image.png'
const Banner = () => {
  return (
    <section className='min-h-[706px] flex flex-col items-center  '>
    
        <div className='relative   '>
          <img src={BannerImg} alt='Rick and Morty' className='min-h-[600px] object-fill'  />
          <h1 className='text-[36px] leading-10 w-[520px] min-h-[200px] bg-white rounded-[12px] flex items-center justify-center px-[40px] absolute  -bottom-[80px] left-[10px] '>
          "Get Schwifty with the Multiverse Madness of Rick and Morty!" 🚀🧪
          </h1>
        </div>
     
    </section>
  )
}

export default Banner