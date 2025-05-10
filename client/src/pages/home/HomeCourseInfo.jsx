import React from 'react'

const HomeCourseInfo = () => {
    const data=[
        {img:"./course_1.png",title:"AWS Certified soloution Architect",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat.",price:80},
        {img:"./course_2.png",title:"AWS Certified soloution Architect",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat.",price:80},
        {img:"./course_3.png",title:"AWS Certified soloution Architect",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat.",price:80},
        {img:"./course_3.png",title:"AWS Certified soloution Architect",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat.",price:80},
      ]
  return (
    <>
    <div className="flex flex-col items-center justify-center">
 <div className="pt-5 lg:pt-20 text-center pb-5 lg:pb-20">
        <h1 className='text-2xl font-bold'>Learn from the best</h1>
        <p className='text-sm text-gray-600 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vero!</p>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    {/* course card */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 pb-8 lg:pb-12">
      {
        data.map((item,index)=>(
          <div className="border border-gray-400 cursor-pointer shadow-sm  w-60 hover:shadow-md transition duration-300" key={index}>
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
    </div>
   
    </>
  )
}

export default HomeCourseInfo