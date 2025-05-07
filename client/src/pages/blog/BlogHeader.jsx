import React from 'react'

const BlogHeader = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center justify-between px-8 py-6 md:px-10">
      <div className="space-y-4">
        <p className='text-xl font-semibold'>By Themandbrains in <span className='text-stone-400'>inspiration</span></p>
        <div className="text-3xl font-extrabold">
        <h3>Why Swift UI Should Be on</h3>
        <h3>the Radar of Every Mobile</h3>
        <h3>Developer</h3>          
        </div>
        <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
         Excepturi cum dicta fuga soluta? Error veritatis alias ea laborum <br />
         quibusdam inventore eius nihil, a pariatur ullam deserunt sunt quos <br />
         laudantium eaque culpa nemo fugit deleniti dolorum!</p>
         <button className='text-white bg-slate-400 px-5 py-2 rounded-lg shadow-lg cursor-pointer hover:bg-slate-500 transition duration-300'>Start learning now</button>
      </div>
      <div className="py-8">
        <img src="./b.png" alt="img blog" className='rounded-lg' />
      </div>
    </div>
    </>
  )
}

export default BlogHeader