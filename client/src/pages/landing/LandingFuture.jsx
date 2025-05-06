import { AppWindow, FileBadge, Users2Icon } from 'lucide-react'
import React from 'react'

const LandingFuture = () => {
  const data=[
    {icon:<AppWindow/>,title:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus repellat maiores voluptatibus?"},
    {icon:<FileBadge/>,title:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus repellat maiores voluptatibus?"},
    {icon:<Users2Icon/>,title:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus repellat maiores voluptatibus?"},
  ]
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center justify-between paddingCnt gap-5">
      <img src="./feature.png" alt="feature" className='w-[50%]' />
      <div className="w-full max-w-md">
        <h1 className='text-gray-800 text-3xl font-bold pb-5'>A <span className='text-stone-300'>user interface </span>designed <br /> for the classroom</h1>
        <div className="space-y-5">
          {
            data.map((item,index)=>(
              <div className="flex items-center gap-5" key={index}>
                <p className='bg-white shadow-lg p-2 rounded-full text-amber-300 hover:text-amber-500'>{item.icon}</p>
                <p className='text-sm text-gray-600 text-shadow-lg'>{item.title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default LandingFuture