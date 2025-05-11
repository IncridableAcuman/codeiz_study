import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/auth/login/Login'
import ForgotPassword from './pages/auth/forgotPassword/ForgotPassword'
import ResetPassword from './pages/auth/resetPassword/ResetPassword'
import Landing from './pages/landing/Landing'
import Blog from './pages/blog/Blog'
import Course from './pages/courses/Course'
import Career from './pages/career/Career'
import About from './pages/about/About'
import MainLayout from './layouts/MainLayout'
import Dashboard from './components/Dashboard'
import AddCourse from './pages/courses/AddCourse'
import MyCourse from './pages/courses/MyCourse'
import StudentEnrolled from './pages/courses/StudentEnrolled'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/landing' element={<Landing/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/reset-password' element={<ResetPassword/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/courses' element={<Course/>} />
        <Route path='/career' element={<Career/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/enrolled' element={<MainLayout/>}>
          <Route path='/enrolled/dashboard' element={<Dashboard/>} />
          <Route path='/enrolled/add' element={<AddCourse/>} />
          <Route path='/enrolled/my-course' element={<MyCourse/>} /> 
          <Route path='/enrolled/student' element={<StudentEnrolled/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App