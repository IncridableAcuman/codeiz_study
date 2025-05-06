import {  CalendarDays, File, UsersRound } from 'lucide-react'
import React from 'react'

const LandingSoftware = () => {
  const data=[
    {title:"Online Billing,Invoicing & Contracts",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit",icon:<File size={35}/>},
      {title:"Easy Scheduling & Attendance Tracking",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit",icon:<CalendarDays size={35}/>},

        {title:"Customer Tracking",
          description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit",icon:<UsersRound size={35}/>},
  ]
  return (
    <>
    <div className="">
      <div className="text-center">
        <h1 className='text-3xl font-semibold mb-3'>All-In-One <span className='tracking-tight bg-clip-text text-transparent
         bg-gradient-to-br from-stone-400 to-slate-500'>Cloud Software</span></h1>
      <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <p className='text-gray-500'>Lorem ipsum dolor sit amet.</p>
      </div> 
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-8 py-6 text-center">
        {data.map((item,index)=>(
          <div className="bg-white shadow-lg p-5 w-full max-w-80 mx-auto flex flex-col items-center justify-center" key={index}>
            <h1 className=" mb-4 bg-blue-600 text-white p-2 rounded-full shadow-lg ">{item.icon}</h1>
            <h2 className='text-xl pb-6'>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default LandingSoftware