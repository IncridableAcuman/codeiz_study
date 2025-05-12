import React, { useState } from 'react';
import { Home, PlusSquare, File, UserPlus, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const data = [
    { icon: <Home size={20} />, title: 'Dashboard', path: '/enrolled/dashboard' },
    { icon: <PlusSquare size={20} />, title: 'Add Course', path: '/enrolled/add' },
    { icon: <File size={20} />, title: 'My Course', path: '/enrolled/my-course' },
    { icon: <UserPlus size={20} />, title: 'Student Enrolled', path: '/enrolled/student' },
  ];

  return (
    <>
      {/* Toggle Button for mobile */}
      <button
        className="md:hidden p-3 fixed top-4 left-4 z-50 bg-white shadow rounded-md"
        onClick={() => setOpen(!open)}
      >
        <Menu />
      </button>

      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-50    border-r z-40 transform ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300`}>
        <div className="pt-6">
          {data.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="flex items-center gap-3 px-6 py-3 hover:bg-gray-300 transition duration-300 rounded hover:text-white"
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
