import {  EllipsisVertical } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="w-full bg-white text-gray-800 top-0 sticky z-50">
      <div className=" hidden md:flex items-center justify-between px-8 py-6 md:px-10">
      <div className="text-3xl font-extrabold">WebLogo</div>
      <div className="hidden md:flex items-center gap-6">
            <a href="#" className='hover:text-gray-400 transition duration-300'>Home</a>
            <a href="#" className='hover:text-gray-400 transition duration-300'>Courses</a>
            <a href="#" className='hover:text-gray-400 transition duration-300'>Careers</a>
            <a href="#" className='hover:text-gray-400 transition duration-300'>Blog</a>
            <a href="#" className='hover:text-gray-400 transition duration-300'>About Us</a>
            {/* profile */}
      <div className="flex items-center gap-2">
        <img src="./d.png" alt="profile" className='w-12 h-12 rounded-full' />
        <EllipsisVertical className='cursor-pointer text-gray-400 hover:text-gray-950 transition duration-300'/>
      </div>
      {/* profile end */}
      </div>
      </div>
    </div>
    </>
  )
}

export default Navbar