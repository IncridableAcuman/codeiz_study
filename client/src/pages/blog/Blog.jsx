import React from 'react'
import Navbar from '../../components/Navbar'
import BlogHeader from './BlogHeader'

const Blog = () => {
  return (
    <>
    <div className="">
        <Navbar/>
        <div className="paddingCnt bg-sky-400 min-h-[70vh]">
            <BlogHeader/>
        </div>
    </div>
    </>
  )
}

export default Blog