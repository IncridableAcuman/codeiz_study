import {useEffect, useState} from 'react'
import {Mail,Send} from 'lucide-react'
import { toast } from 'react-toastify';
import axiosInstance from '../../../hooks/axiosInstance';
import { useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
  const [email,setEmail]=useState("");
  const navigate=useNavigate();
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      await axiosInstance.post("/auth/forgot-password",{email});
      toast.success("Link sent to your email");
    } catch (error) {
      console.log(error?.message);
      toast.error(error?.response?.data?.message);
    }
  }
  useEffect(()=>{
    if(localStorage.getItem("accessToken")){
      navigate("/");
    }
  },[navigate]);
  return (
    <>
    <div className="bg-image w-full min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white w-full max-w-md rounded shadow-lg p-6">
      <h1 className='text-3xl font-bold text-center mb-5'>Forgot Password</h1>
        <p className="text-sm text-center text-gray-400 mb-2">Emailingizni kiriting va pochtagizga havola boradi.</p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex items-center gap-2 border-2 border-gray-300 p-2.5">
          <Mail className="text-gray-400  "/>
          <input type="email" placeholder="Email" className="outline-none w-full" 
          value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <button className="w-full flex items-center justify-center gap-3 bg-gray-800 text-white p-2 rounded cursor-pointer shadow-lg hover:bg-gray-950 transition duration-300">
          <Send className="" size={20} />
          <p>Forgot Password</p>
        </button>
      </form>
      </div>
    </div>
    </>
  )
}

export default ForgotPassword