import React, { useState } from 'react'
import {Menu,X} from 'lucide-react'
import { useNavigate } from 'react-router-dom';
const LandingHeader = () => {
  const [isOpen,setIsOpen]=useState(false);
  const navigate=useNavigate();

  const toggleMenu=()=>setIsOpen(!isOpen);
  return (
    <>
    <div className="w-full bg-white text-gray-800 sticky top-0 z-50">
      <div className="flex items-center justify-between px-8 py-6 md:px-10">
        <div className="text-3xl font-extrabold">WebLogo</div>
        <div className=" hidden md:flex items-center gap-6">
            <a href="#" className='hover:text-gray-400 transition duration-300'>Careers</a>
            <a href="#" className='hover:text-gray-400 transition duration-300'>Blog</a>
            <a href="#" className='hover:text-gray-400 transition duration-300'>About Us</a>
        </div>
        <div className=" hidden md:flex items-center gap-4">
            <button className='bg-white text-gray-900 px-5.5 py-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-100' onClick={()=>navigate("/login")}>Login</button>
            <button className='bg-slate-500 px-5.5 py-2 rounded-full text-white cursor-pointer shadow-lg hover:text-white hover:bg-slate-600 transition duration-300' onClick={()=>navigate("/login")}>Sign Up</button>
        </div>
        {/* mobile btn */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24}/>:<Menu size={24}/>}
          </button>
        </div>
        {/* mobile nav */}
    </div>
    {isOpen && (
        <div className="md:hidden flex flex-col items-start px-6 pb-4 gap-3 bg-white text-gray-800 shadow-md">
          <a href="#" className="w-full py-2 border-b hover:text-slate-500">Home</a>
          <a href="#" className="w-full py-2 border-b hover:text-slate-500">Courses</a>
          <a href="#" className="w-full py-2 border-b hover:text-slate-500">Careers</a>
          <a href="#" className="w-full py-2 border-b hover:text-slate-500">Blog</a>
          <a href="#" className="w-full py-2 border-b hover:text-slate-500">About Us</a>
          <div className="w-full flex flex-col gap-2 mt-4">
            <button className="bg-white text-gray-900 px-4 py-2 rounded-full shadow hover:bg-gray-100">Login</button>
            <button className="bg-slate-500 px-4 py-2 rounded-full text-white hover:bg-slate-600 transition duration-300">Sign Up</button>
          </div>
        </div>
      )}
    </div>
    
    </>
  )
}

export default LandingHeader