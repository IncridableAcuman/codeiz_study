import React from 'react'
import {Home,PlusSquare,File,UserPlus} from 'lucide-react'
const Sidebar = () => {
    const data=[
        {icon:<Home size={20}/>,title:"Dashboard",path:"/enrolled/dashboard"},
        {icon:<PlusSquare size={20}/>,title:"Add Course",path:"/enrolled/add"},
        {icon:<File size={20}/>,title:"My Course",path:"/enrolled/my-course"},
        {icon:<UserPlus size={20}/>,title:"Student Enrolled",path:"/enrolled/student"},
    ]
  return (
    <>
    <div className="w-64 h-screen bg-gradient-to-br from-gray-100 via-slate-200 to-gray-200 border-r">
        <div className="pt-5">
            {
                data.map((item,index)=>(
                    <a href={item.path} key={index} className='flex items-center gap-2 px-5 py-3 hover:bg-gray-300 transition duration-300 rounded hover:text-white'>
                        {item.icon}
                        {item.title}
                    </a>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Sidebar