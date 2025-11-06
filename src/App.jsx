import React from 'react'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import SignUps from './pages/SignUps'
import NotFound from './pages/NotFound'
import Props from './pages/Props'
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/signUps' element={<SignUps/>}/>
        <Route path='/props' element={<Props/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
