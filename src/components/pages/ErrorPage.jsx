import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='w-full h-screen  grid place-content-center place-items-center'>
        <p className='text-[300px] font-Jim text-[#017034]'>404</p>
        <p className='text-xl  max-w-[400px] font-Jim text-[#017034]' >We're sorry, but the page you are looking for doesn't exist or an error occurred. Please check the URL or go back to the homepage.</p>
        <Link to="/" className='w-[120px] -skew-x-12 bg-slate-500 text-center text-white rounded-lg p-2 my-4 '>Go to Home</Link>
    </section>
  )
}

export default ErrorPage