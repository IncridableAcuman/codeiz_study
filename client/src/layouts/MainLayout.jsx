import React from 'react'
 import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <>
    <Navbar/>
<div className="flex h-screen">
      <Sidebar/>
    <div className="flex flex-col flex-1">
        <div className="p-4 overflow-auto flex-1">
            <Outlet/>
        </div>
    </div>
    </div>    
    </>
    
  )
}

export default MainLayout