import React, { useState } from 'react'
import {Lock, Mail, User} from 'lucide-react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [isLogin,setIsLogin]=useState(true);
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  return (
    <>
    <div className="bg-image w-full min-h-screen  flex flex-col items-center justify-center">
      <div className="bg-white w-full max-w-md rounded shadow-lg p-6">
        <div className="">
          <h1 className='text-3xl font-bold text-center mb-3'>{isLogin ? "Sign In" : "Sign Up"}</h1>
          <form className='space-y-4'>
            {/* username */}
            {!isLogin && (
              <div className="flex items-center gap-2 p-2.5 border-2 border-gray-300">
            <User className='text-gray-400'/>
             <input type="texr" placeholder='Username' 
             className='outline-none w-full'
              value={username} onChange={(e)=>setUsername(e.target.value)} />              
            </div>
            )}   
            {/* email */}
            <div className="flex items-center gap-2 p-2.5 border-2 border-gray-300">
            <Mail className='text-gray-400'/>
             <input type="email" placeholder='Email' className='outline-none w-full' 
             value={email} onChange={(e)=>setEmail(e.target.value)}/>              
            </div>
            {/* password */}
            <div className="flex items-center gap-2 p-2.5 border-2 border-gray-300">
            <Lock className='text-gray-400' />
             <input type="password" placeholder='Password' className='outline-none w-full' 
             value={password} onChange={(e)=>setPassword(e.target.value)} />              
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <button className='w-full mb-3 mx-auto bg-gray-800 text-white p-2.5 cursor-pointer 
            shadow-md rounded hover:bg-gray-950 transition duration-300'>Sign In</button>
          </form>
          <p className='mt-3 text-center underline cursor-pointer hover:text-gray-500' onClick={()=>navigate("/forgot-password")}>Forgot your Password?</p>
          <div className="flex items-center gap-2 w-full mt-3">
            <p className='border border-gray-400 w-1/2'></p>
            <p className=''>or</p>
            <p className='border border-gray-400 w-1/2'></p>
          </div>
          <div className="mt-3 space-y-2.5">
            <button className=' w-full mx-auto flex items-center justify-center gap-3 shadow-sm border border-gray-300 bg-gray-100 p-2 text-center rounded
            cursor-pointer hover:bg-gray-200 transition duration-300'>
              <img src="https://www.google.com/favicon.ico" alt="google icon" />
              Sign In with Google</button>
              <button className=' w-full mx-auto flex items-center justify-center shadow-sm gap-3 border border-gray-300 bg-gray-100 p-2 text-center rounded
            cursor-pointer hover:bg-gray-200 transition duration-300'>
              <img src="https://www.github.com/favicon.ico" alt="github icon"  />
              Sign In with Github</button>
          </div>
          {isLogin ? (
                    <p className='text-center text-sm mt-3'>Don't have an account? 
                    <span className='cursor-pointer font-semibold text-gray-600 hover:underline' onClick={()=>setIsLogin(false)}>Sign Up</span></p>
          )        : (
                    <p className='text-center text-sm mt-3'>Already have an account? 
                    <span className='cursor-pointer font-semibold text-gray-600 hover:underline' onClick={()=>setIsLogin(true)}>Sign In</span></p>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default Login