import React from 'react'

const LandingHeader = () => {
  return (
    <>
    <div className="flex items-center justify-between px-8 py-6">
        <div className="text-3xl font-extrabold">WebLogo</div>
        <div className="flex items-center gap-5">
            <a href="#" className='hover:text-gray-400 transition duration-300'>Home</a>
            <a href="#" className='hover:text-gray-400 transition duration-300'>Courses</a>
            <a href="#" className='hover:text-gray-400 transition duration-300'>Careers</a>
            <a href="#" className='hover:text-gray-400 transition duration-300'>Blog</a>
            <a href="#" className='hover:text-gray-400 transition duration-300'>About Us</a>
        </div>
        <div className="flex items-center gap-5">
            <button className='bg-white text-gray-900 px-5.5 py-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-100'>Login</button>
            <button className='bg-slate-500 px-5.5 py-2 rounded-full text-white cursor-pointer shadow-lg hover:text-white hover:bg-slate-600 transition duration-300'>Sign Up</button>
        </div>
    </div>
    </>
  )
}

export default LandingHeader