import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/auth/login/Login'
import ForgotPassword from './pages/auth/forgotPassword/ForgotPassword'
import ResetPassword from './pages/auth/resetPassword/ResetPassword'
import Landing from './pages/landing/Landing'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/reset-password' element={<ResetPassword/>} />
        <Route path='/landing' element={<Landing/>} />
      </Routes>
    </>
  )
}

export default App