import React from 'react'
import Navbar from '../../components/Navbar'
import HomeHead from './HomeHead'
import HomeCourseInfo from './HomeCourseInfo'
import Footer from '../../components/Footer'
import Testimonials from './Testimonials'
const Home = () => {
  return (
    <>
    <div className=" bg-gradient-to-br from-gray-100 via-slate-200 to-gray-400 w-full min-h-screen">
      <Navbar/>
      {/* header content */}
      <div className="flex flex-col items-center justify-center px-5 pt-5 lg:pt-12">
        <HomeHead/>
        {/* courses */}
        <div className="pt-8 lg:pt-20">
          <HomeCourseInfo/>
        </div>
      </div>
      {/* testimonials */}
      <div className="flex flex-col items-center justify-center p-3">
        <Testimonials/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home