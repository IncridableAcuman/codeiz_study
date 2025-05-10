import { Search } from 'lucide-react'
import React from 'react'

const HomeHead = () => {
    const data=[
        {img:"./microsoft_logo.svg"},
        {img:"./walmart_logo.svg"},
        {img:"./accenture_logo.svg"},
        {img:"./adobe_logo.svg"},
        {img:"./paypal_logo.svg"},
    ]
  return (
    <>
    <div className=" flex flex-col items-center justify-center text-center p-3">
        <div className="space-y-1.5 text-4xl pb-3 font-extrabold">
        <h2>Empower your future with the</h2>
        <h2>courses designed to <span className='text-blue-500'>fit your choice.</span></h2>            
        </div>
        <div className="text-sm text-gray-600">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ad soluta deleniti!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>          
        </div>
        <form className='pt-5 lg:pt-12 w-full'>
            <div className="flex items-center justify-between p-2  w-full border border-gray-400 rounded-md">
                <div className="flex items-center gap-3 w-full">
                <Search className='text-gray-400'/>
                <input type="text" placeholder='Search for courses' className='outline-none w-full' />                    
                </div>
                <button className='bg-blue-500 text-white px-5 py-2.5'>Search</button>
            </div>
        </form>
        {/* logo */}
        <p className='pt-8 lg:pt-20'>Trusted by learner from</p>
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-5 pt-5 w-full">
            {
                data.map((item,index)=>(
                    <div className="" key={index}>
                        <img src={item.img} alt="brans" />
                    </div>
                ))
            }
        </div>  
        </div>
        
    </div>
    </>
  )
}

export default HomeHead