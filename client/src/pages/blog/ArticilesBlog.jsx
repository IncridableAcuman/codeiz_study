import React from 'react'

const ArticilesBlog = () => {
  const data=[
    {img:"./course_1.png",title:"AWS Certified soloution Architect",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat.",price:80},
    {img:"./course_2.png",title:"AWS Certified soloution Architect",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat.",price:80},
    {img:"./course_3.png",title:"AWS Certified soloution Architect",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat.",price:80},
    {img:"./course_3.png",title:"AWS Certified soloution Architect",descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat.",price:80},
  ]
  return (
    <>
    <div className="flex items-center justify-between pb-5 lg:pb-12">
      <h2 className='text-lg font-semibold'>Marketing Articiles</h2>
      <p className='text-gray-600 text-sm cursor-pointer'>See all</p>
    </div>
    {/*  */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pb-8 lg:pb-12">
      {
        data.map((item,index)=>(
          <div className="shadow-lg rounded-2xl" key={index}>
            <img src={item.img} alt={item.title} className='rounded-xl' />
            <h2 className='p-2 text-lg font-bold'>{item.title}</h2>
            <p className='p-2 text-sm text-gray-500'>{item.descr}</p>
            <div className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center gap-2">
                <img src="./d.png" alt="dddd" className='w-10 h-10 rounded-full' />
                <p>Lina</p>
              </div>
              <div className="flex items-center gap-2">
                <p>100$</p>
                <p>{item.price}$</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default ArticilesBlog