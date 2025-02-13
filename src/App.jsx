import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyProfile from './pages/MyProfile'
import AllPost from './pages/AllPost'
 import ViewPost from './pages/ViewPost'
import Auth from './pages/Auth'
import Footer from './components/Footer'
import Pnf from './pages/Pnf'
 
function App() {
 
  return (
    <>
      <Routes>

        <Route path='/' element={<Home/>} /> 
        <Route path='/login' element={<Auth/>} /> 
        <Route path='/register' element={<Auth insideRegister={true}/>} /> 
        <Route path='/my-profile/:id' element={<MyProfile/>} /> 
        <Route path='/all-post' element={<AllPost/>} /> 
         <Route path='/view-post/:id' element={<ViewPost/>} /> 
         <Route path='*' element={<Pnf/>} /> 

      </Routes>
      <Footer/>
    </>
  )
}

export default App
