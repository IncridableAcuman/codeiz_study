import React from 'react'
import Navbar from '../../components/Navbar'
import BlogHeader from './BlogHeader'
import BlogList from './BlogList'
import RelatedBlog from './RelatedBlog'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ArticilesBlog from './ArticilesBlog'
import Footer from '../../components/Footer'
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
        {/* releated blog */}
        <div className=" bg-sky-300 w-full mt-12 paddingCnt">
            <div className="flex items-center justify-between">
              <h2 className='pb-5 pl-5 lg:pl-10 text-lg font-bold'>Related Blig</h2>
              <p className='text-sm text-gray-500 cursor-pointer hover:text-gray-700 transition duration-300'>Sell all</p>
            </div>
            {/* Related blog */}
            <div className="px-4 sm:px-6 lg:px-8">
              <RelatedBlog/>
              <div className="flex items-center justify-between">
                <div className=""></div>
                <div className="flex items-center gap-2 pr-5">
                  <ArrowLeft size={20} className='bg-slate-400 rounded cursor-pointer text-white'/>
                  <ArrowRight size={20} className='bg-slate-400 rounded cursor-pointer'/>
                </div>
              </div>
            </div>
            {/* Aritciles */}
          </div>
          <div className="paddingCnt">
              <ArticilesBlog/>
            </div>
    </div>
      {/* footer */}
      <Footer/>
    </>
  )
}

export default Blog