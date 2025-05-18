import { Lock, Send } from 'lucide-react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../../../hooks/axiosInstance';

const ResetPassword = () => {
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const navigate=useNavigate();
  const handleSubmit= async (e)=>{
    e.preventDefault();
    try {
      await axiosInstance.put("/auth/reset-password",{password,confirmPassword});
      toast.success("Password reseted successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  }
  return (
    <>
    <div className="bg-image w-full min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white w-full max-w-md rounded shadow-lg p-6">
      <h1 className='text-3xl font-bold text-center mb-5'>Reset Password</h1>
        <p className="text-sm text-center text-gray-400 mb-2">Yangi parol kiriting va takrorlang.</p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex items-center gap-2 border-2 border-gray-300 p-2.5">
          <Lock className="text-gray-400  "/>
          <input type="password" placeholder="Password" className="outline-none w-full" 
          value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        {/* confirm password */}
        <div className="flex items-center gap-2 border-2 border-gray-300 p-2.5">
          <Lock className="text-gray-400  "/>
          <input type="password" placeholder="Confirm Password" className="outline-none w-full" 
          value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
        </div>
        <button className="w-full flex items-center justify-center gap-3 bg-gray-800 text-white p-2 rounded cursor-pointer shadow-lg hover:bg-gray-950 transition duration-300">
          <Send className="" size={20} />
          <p>Reset Password</p>
        </button>
      </form>
      </div>
    </div>
    </>
  )
}

export default ResetPassword