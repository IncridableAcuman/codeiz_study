import React from 'react'
import { UploadCloud } from 'lucide-react'
const AddCourse = () => {
  return (
    <>
    <div className="w-full max-w-md px-4 sm:px-6 lg:px-8">
      <form className='space-y-4'>
        <div className="flex flex-col">
        <label className='pb-2'>Course Title</label>
        <input type="text" placeholder='Type here' className='border-2 border-gray-300 p-2.5 outline-none' />
        </div>
        {/* 2 */}
        <div className="flex flex-col">
        <label className='pb-2'>Course Headings</label>
        <input type="text" placeholder='Type here' className='border-2 border-gray-300 p-2.5 outline-none' />
        </div>
        {/* 3 */}
        <div className="flex flex-col">
        <label className='pb-2'>Course Title</label>
        <textarea placeholder='Type here' className='border-2 border-gray-300 p-2.5 outline-none'></textarea>
        </div>
        {/* 4 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex flex-col">
        <label className='pb-2'>Course Headings</label>
        <input type="number" placeholder='0' className=' w-full border-2 border-gray-300 p-2.5 outline-none max-w-25' />
        </div>
          <div className="flex items-center gap-3">
            <label>Course Thubnail</label>
            <div className="bg-blue-700 text-white p-1.5 rounded shadow">
            <UploadCloud size={20} className=''/>
              <input type="file" placeholder='thubnail' className='w-full max-w-25 cursor-pointer' />              
            </div>
          </div>
        </div>
        <button className='bg-blue-500 text-white px-5 py-2 pt-3 text-center rounded shadow-md cursor-pointer hover:bg-blue-700 transition duration-300'>Add Course</button>
      </form>
    </div>
    </>
  )
}

export default AddCourse