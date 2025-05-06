import React from 'react'

const LandingSuccess = () => {
  const data=[
    {numberData:"15K+",title:"Students"},
    {numberData:"75%",title:"Total success"},
    {numberData:35,title:"Main questions"},
    {numberData:26,title:"Chief experts"},
    {numberData:16,title:"Years of experience"},
  ]
  return (
    <>
    <div className="text-center mt-8">
      <h1 className='text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r
       from-stone-500 to-slate-700 mb-3'>Our Success</h1>
      <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, alias.</p>
      <p className='text-sm mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, similique.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {
        data.map((item,index)=>(
          <div className="" key={index}>
            <h2 className='text-6xl font-extrabold mb-2 tracking-tight bg-clip-text text-transparent
             bg-gradient-to-br from-blue-300 to-indigo-400'>{item.numberData}</h2>
            <h3 className='text-2xl font-normal tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-pink-400 to-indigo-900'>{item.title}</h3>
          </div>
        ))
      }
      </div>
      
    </div>
    </>
  )
}

export default LandingSuccess