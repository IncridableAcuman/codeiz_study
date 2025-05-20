import React, { useEffect } from 'react'
import LandingHeader from './LandingHeader'
import LandingContent from './LandingContent'
import LandingSuccess from './LandingSuccess'
import LandingSoftware from './LandingSoftware'
import LandingInfo from './LandingInfo'
import LandingFuture from './LandingFuture'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
const Landing = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("accessToken")){
      navigate("/");
    }
  },[navigate]);
  return (
    <>
  <div className="w-full h-[100vh] bg-imageLading text-white">
    <LandingHeader/>
    {/*  */}
      <div className="mt-20">
          <LandingContent/>
      </div> 
      {/*  */}  
    </div>
    {/* success */}
        <div className="pb-12">
          <LandingSuccess/>    
        </div> 
        {/* software */}
        <div className="pt-12">
          <LandingSoftware/>
        </div>
        <div className="pt-12">
          <LandingInfo/>
        </div>
        {/* features */}
        <div className="pt-15">
          <div className="pb-5 text-center">
            <h1 className='text-3xl font-bold text-gray-800 pb-2'>Our <span className='text-stone-300'>Features</span></h1>
            <p className='text-sm text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus repellat maiores voluptatibus?</p>
          </div>
          <LandingFuture/>
        </div>
        <Footer/>
    </>
  )
}

export default Landing