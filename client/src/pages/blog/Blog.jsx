import React from 'react'
import Navbar from '../../components/Navbar'
import BlogHeader from './BlogHeader'
import BlogList from './BlogList'

const Blog = () => {
  return (
    <>
    <div className="">
        <Navbar/>
        {/* blog header */}
        <div className="paddingCnt bg-sky-400 min-h-[70vh]">
            <BlogHeader/>
        </div>
        {/* blog list */}
        <div className="paddingCnt">
          <h2 className='pb-5 pl-5 lg:pl-10 text-lg font-bold'>Reading blog list</h2>
          <div className="">
            <BlogList/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Blog