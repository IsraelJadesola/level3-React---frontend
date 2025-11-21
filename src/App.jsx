import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import ProductUpload from './pages/ProductUpload'
import NotFound from './pages/NotFound'
import Props from './pages/Props'
import Formik from './pages/Formik'


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/props' element={<Props/>}/>
        <Route path='/productupload' element={<ProductUpload/>}/>
        <Route path= '/about' element={<Navigate to='/signup'/>}/>
        <Route  path = '/formik' element = {<Formik/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
