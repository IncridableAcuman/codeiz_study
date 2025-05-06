import React from 'react'
import { Watch} from 'lucide-react'
const LandingContent = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center justify-between paddingCnt">
        <div className="">
            <h1 className='text-4xl font-extrabold mt-6'>
                <span className='text-pink-600'>Studying </span> 
                Online is now <br /> much easier
            </h1>
            <p className='mt-4 max-w-[500px] mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Perspiciatis quod cum dolorem reiciendis ad laudantium!</p>
             <div className="flex items-center gap-5">
                <button className='bg-slate-500 text-white px-5 py-2 rounded-full shadow-lg cursor-pointer hover:bg-slate-600 transition duration-300'>Join for free</button>
                <div className="bg-white text-gray-900 p-3 rounded-full">
                <Watch className='text-blue-400' />
                </div>
                <p className='text-gray-800'>Watch how it works</p>
             </div>
        </div>
        <div className="">b</div>
    </div>
    </>
  )
}

export default LandingContent