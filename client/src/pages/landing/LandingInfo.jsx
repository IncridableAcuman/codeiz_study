import React from 'react'

const LandingInfo = () => {
  const data=[
    {image:"./c.png",btn:"Start class a today",title:"for instructors"},
    {image:"./c.png",btn:"Enter access code",title:"for students"}
  ]
  return (
    <>
    <div className="">
      <div className="text-center pt-3">
        <h1 className='pb-5 text-3xl font-bold'>What is 
          <span className='tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-stone-400 to-slate-600'>   CODEIZ?</span></h1>
        <p className='text-sm text-gray-700 pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nobis qui quidem!
         <br /> Illum voluptatibus nam laborum officia expedita? Quisquam, adipisci. 
      <br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
      </div> 
      {/*  */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-10 pb-5">
      {
        data.map((item,index)=>(
          <div className="pb-3 relative" key={index}>
            <img src={`${item.image}`} alt={item} className='rounded-xl shadow-lg w-full h-auto' />
            <div className="absolute top-10 right-16 text-center text-white">
              <h3 className='pb-5 uppercase font-bold'>{item.title}</h3>
              <button className='border-2 px-5 py-2 rounded-full cursor-pointer'>{item.btn}</button>
            </div>
          </div>
        ))
      }
      </div> 
      {/*  */}
      <div className="flex flex-col lg:flex-row items-center justify-between paddingCnt">
        <div className="">
          <h2 className='text-xl font-bold pb-1'>Everything you can do in a phyical</h2>
          <h2 className='text-xl font-bold pb-3'>classroom,<span className='text-slate-400'>you can do with CODEIZ</span></h2>
          <p className='max-w-[500px] text-sm text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Inventore qui quia vel itaque a saepe quisquam, ipsam,
             commodi minima, nostrum nihil eos repellat praesentium voluptatem.</p>
        </div>
        <div className="">
          <iframe 
          width={400}
          height={315}
          src="https://www.youtube.com/embed/hRUJ41rdp4M"
           frameborder="0"
           allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
           allowFullScreen
           className='rounded-xl border-2 border-indigo-700'
           ></iframe>
        </div>
      </div>
    </div>
    </>
  )
}

export default LandingInfo