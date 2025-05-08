import React from 'react'

const BlogList = () => {
  const data=[
    {img:"./a.png",title:"UX/UI"},
    {img:"./a.png",title:"React"},
    {img:"./a.png",title:"Java"},
    {img:"./a.png",title:"JavaScript"},
  ]
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
      {
        data.map((item,index)=>(
          <div className="relative pb-2" key={index}>
            <img src={item.img} alt={item.title} className=' w-full h-auto object-cover rounded-2xl' />
              <button className=' absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 p-2 rounded-full sm:p-2.5 text-sm sm:text-base text-center truncate bg-gray-300 opacity-95'>{item.title}</button>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default BlogList