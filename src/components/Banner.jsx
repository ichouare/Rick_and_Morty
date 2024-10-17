import React from 'react'

import BannerImg from '../assets/Image.png';
const Banner = () => {
  return (
    <section className='w-full h-auto md:min-h-[706px] flex flex-col items-center    overflow-hidden '>
    
        <div className='relative w-full  max-w-[1216px]  h-full '>
          <img src={BannerImg} alt='Rick and Morty' className='md:h-[600px] w-full object-contain'  />
          <h1 className='text-2xl md:text-[36px] leading-10 w-full  md:w-[520px]  text-wrap md:min-h-[200px] bg-white rounded-[12px] text-center px-4 md:px-[40px] md:absolute  md:-bottom-[80px] md:left-[10px] '>
          "Get Schwifty with the Multiverse Madness of Rick and Morty!" 🚀🧪
          </h1>
        </div>
     
    </section>
  )
}

export default Banner