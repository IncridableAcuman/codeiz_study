import React from 'react'
import Navbar from '../../components/Navbar'
import { Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
const Course = () => {
    const navigate=useNavigate();
    const data=[
        {img:"./course_1.png",title:"AWS Certified soloution Architect",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat.",price:80},
        {img:"./course_2.png",title:"AWS Certified soloution Architect",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat.",price:80},
        {img:"./course_3.png",title:"AWS Certified soloution Architect",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat.",price:80},
        {img:"./course_3.png",title:"AWS Certified soloution Architect",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat.",price:80},
        {img:"./course_1.png",title:"AWS Certified soloution Architect",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat.",price:80},
        {img:"./course_2.png",title:"AWS Certified soloution Architect",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat.",price:80},
        {img:"./course_3.png",title:"AWS Certified soloution Architect",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat.",price:80},
        {img:"./course_3.png",title:"AWS Certified soloution Architect",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat.",price:80},
        
      ]
  return (
    <>
    <div className="bg-gradient-to-br from-gray-100 via-slate-200 to-gray-400 w-full min-h-screen">
    <Navbar/>        
    <div className="flex flex-col md:flex-row items-center justify-between paddingCnt">
        <div className="pb-5">
            <h1 className='text-2xl lg:text-3xl font-semibold pb-1.5'>Course List</h1>
            <p className='text-xs text-blue-400 font-bold cursor-pointer' onClick={()=>navigate("/")}>Home/<span className='text-sm text-gray-800'>Course List</span></p>
        </div>
        <div className="flex items-center justify-between gap-5 border w-full md:w-1/2 border-gray-400 p-1.5 rounded">
            <div className="flex items-center gap-2 w-full">
            <Search size={20} className='text-gray-400'/>
            <input type="text" placeholder='Search for courses' className='outline-none w-full lg:text-sm' />
            </div>
            <button className='bg-blue-500 text-white px-5 py-1.5 rounded cursor-pointer hover:bg-blue-600 transition duration-300'>Search</button>
        </div>
    </div>
    {/* courses */}
    <div className=" flex flex-col items-center justify-center paddingCnt">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-8 lg:pb-12">
      {
        data.map((item,index)=>(
          <div className="border border-gray-400 cursor-pointer shadow-sm  w-60 hover:shadow-md transition duration-300 rounded" key={index}>
            <img src={item.img} alt={item.title} className='w-full' />
            <div className="p-2 space-y-1.5">
            <h2 className='text-md font-bold'>{item.title}</h2>
                <p className='text-sm text-gray-500'>{item.descr.slice(0,30)}...</p>
                <div className="">
                <p>John Doe</p>
                <div className="flex items-center text-sm">
                    <p>5</p>
                    <p>⭐️⭐️⭐️⭐️⭐️</p>
                    <p>(1000)</p>
                </div>
                <p className='pt-2 font-bold'>{item.price}$</p>
                </div>                
            </div>
          </div>
        ))
      }
    </div>
    <button className='border border-gray-400 px-6 py-2.5 text-sm  text-gray-500 rounded-md cursor-pointer hover:shadow transition duration-300'>Load more</button> 
    </div>
    </div>
     {/*Footer  */}
     <Footer/>
    </>
  )
}

export default Course