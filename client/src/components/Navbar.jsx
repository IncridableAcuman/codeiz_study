import React, { useState } from 'react';
import { EllipsisVertical, Menu, X } from 'lucide-react';
import axiosInstance from '../hooks/axiosInstance';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const navigate=useNavigate();

  const handleSubmit=async ()=>{
     try {
        await axiosInstance.post("/auth/logout");
        localStorage.removeItem("accessToken");
        toast.success("Logged out");
        navigate("/landing");
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
  }

  return (
    <div className="w-full bg-gradient-to-br from-gray-100 via-slate-200 to-gray-200 border-b sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <div className="text-2xl md:text-3xl font-extrabold">WebLogo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/" className="hover:text-gray-400 transition">Home</a>
          <a href="/courses" className="hover:text-gray-400 transition">Courses</a>
          <a href="/career" className="hover:text-gray-400 transition">Careers</a>
          <a href="/blog" className="hover:text-gray-400 transition">Blog</a>
          <a href="/about" className="hover:text-gray-400 transition">About</a>
          <a href="/enrolled" className="hover:text-gray-400 transition">Enrolled</a>
          <EllipsisVertical className="cursor-pointer text-gray-400 hover:text-black transition"
           onClick={handleSubmit}  />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <X className="w-6 h-6 cursor-pointer" onClick={toggleMobileMenu} />
          ) : (
            <Menu className="w-6 h-6 cursor-pointer" onClick={toggleMobileMenu} />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white">
          <a href="/" className="block hover:text-gray-500">Home</a>
          <a href="/courses" className="block hover:text-gray-500">Courses</a>
          <a href="/career" className="block hover:text-gray-500">Careers</a>
          <a href="/blog" className="block hover:text-gray-500">Blog</a>
          <a href="/about" className="block hover:text-gray-500">About Us</a>
          <a href="/enrolled" className="block hover:text-gray-500">Enrolled</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
