import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const MainLayout = () => {
  return (
    <div className='flex-1'>
        <Navbar/>
        <div className="flex">
            <Sidebar/>
            <div className="p-4">a</div>
        </div>
    </div>
  )
}

export default MainLayout