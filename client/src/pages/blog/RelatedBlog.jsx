import { Eye } from 'lucide-react'
import React from 'react'

const RelatedBlog = () => {
  const data=[
    {img:"./d.png",
      title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet, ad laborum natus unde quos est minus et quisquam dolore sequi in quae quibusdam, ullam possimus dolor delectus nisi veniam.",
      moving:250000,user:"Lina"},
      {img:"./d.png",
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet, ad laborum natus unde quos est minus et quisquam dolore sequi in quae quibusdam, ullam possimus dolor delectus nisi veniam.",
        moving:250000,user:"Lina"},
  ]
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center justify-between p-4 gap-4 sm:gap-6 lg:gap-8">
      {
        data.map((item,index)=>(
          <div className="bg-white rounded-lg shadow-lg p-4" key={index}>
            <img src={item.img} alt={item.title} className='w-full rounded-lg' />
            <h2 className='pt-3 font-semibold'>{item.title}</h2>
            <div className="flex items-center gap-3 pt-3">
              <img src={item.img} alt={item.title} className='w-10 h-10 rounded-full' />
              <p className=''>{item.user}</p>
            </div>
            <p className='text-sm pt-3'>{item.description}</p>
            <div className="flex items-center justify-between pt-3">
              <p className='underline'>read more</p>
              <div className="flex items-center gap-3">
                <Eye size={18} className='text-gray-600'/>
              <p>{item.moving}</p>                
              </div>

            </div>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default RelatedBlog