import { ArrowRight } from 'lucide-react'
import React from 'react'

const Testimonials = () => {
    const data=[
        {img:"./profile_img_1.png",name:"Donald Jackman",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",job:"SWE 1 @ Amazon"},
        {img:"./profile_img_2.png",name:"Richard Nelson ",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",job:"SWE 2 @ Samsung"},
        {img:"./profile_img_3.png",name:"James Washington",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",job:"SWE 3 @ Google"}
    ]
  return (
    <>
    <div className="text-center">
        <h1 className='text-3xl font-bold pb-5'>Testimonials</h1>
        <p className='text-sm text-gray-500 pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quas numquam officia consequuntur veritatis minima. Porro, facere ipsam? Laudantium, odio esse!</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-5 pb-10">
        {
            data.map((item,index)=>(
                <div className="bg-gray-200 border border-gray-300 p-3 shadow hover:shadow-md transition duration-300" key={index}>
                    <div className="flex items-center gap-3 px-5 py-2 bg-gray-300">
                    <img src={item.img} alt={item.name} className='w-16 h-16' />
                    <div className="">
                        <h2 className=''>{item.name}</h2>
                        <p className='text-xs'>{item.job}</p>
                    </div>
                    </div>
                    {/* text */}
                   <div className="space-y-1 pt-2">
                   <p>⭐️⭐️⭐️⭐️⭐️</p>
                    <p>
                    I've been using imagify for nearly two <br /> years, primarily for Instagram, and it <br /> has been incredibly user-friendly, <br /> making my work much easier
                    </p>
                    <p className='text-sm underline cursor-pointer text-gray-400 hover:text-sky-700 transition duration-300'>Read more</p>
                   </div>
                </div>
            ))
        }
    </div>
    <div className="flex flex-col items-center justify-center text-center pb-8 lg:pb-15">
      <h1 className='text-3xl font-bold pt-5 pb-2'>Learn anything,anytime,anywhere</h1>
      <p className='text-sm text-gray-500 pb-5'>Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam <br /> aliqua proident excepteur commodo do ea.</p>
      <div className="flex items-center gap-4">
        <button className='bg-blue-500 text-white px-5 py-2.5 rounded-md shadow-md cursor-pointer hover:bg-blue-700 transition duration-300'>Get started</button>
        <div className="flex items-center gap-1.5 text-gray-500 cursor-pointer hover:text-gray-700 transition duration-300">
            <p>Learn more</p>
            <ArrowRight size={20}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Testimonials