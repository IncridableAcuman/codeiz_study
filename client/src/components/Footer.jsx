import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="space-y-5">
 <div className="bg-gray-900 text-white">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-5 lg:gap-10 pt-3">
          <h2 className='text-2xl font-bold uppercase'>WebLogo</h2>
          <h2 className='text-md uppercase'>virtual class <br /> room for Zoom</h2>
        </div>
        <div className="pt-8">
          <h1 className='text-md font-bold pb-5 text-center'>Subscribe to getter our Newletter</h1>
          <form>
            <div className="flex flex-col sm:flex-row items-center gap-5  w-full">
              <input type="email" className=' border-2 border-gray-200 outline-none px-8  py-2 rounded-full' placeholder='Enter your Email' />
              <button className='bg-stone-400 px-5 cursor-pointer shadow-lg py-2 rounded-full'>Subscribe</button>
            </div>
          </form>
        </div>
        {/*  */}
        <div className="py-8 flex items-center gap-5">
          <p>Careers</p>
          <p>|</p>
          <p>Privicy Policy</p>
          <p>|</p>
          Terms & Conditions
        </div>
        <p className='pb-3'>2025 Class technologies Inc.</p>
      </div>
    </div>      
    </div>
   
    </>
  )
}

export default Footer