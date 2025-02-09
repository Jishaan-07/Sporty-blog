import React from 'react'
import Header from '../components/Header'
import icon from '../assets/830.jpg'
import AddPost from '../components/AddPost'
import EditProfile from '../components/EditProfile'
import BlogCard from '../components/BlogCard'
const MyProfile = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '50px' }} className="container mt-5">
        <h1 style={{ fontSize: '60px' }} className='text-yellow-500 fw-bolder '>Profile</h1>
        <hr />
        <div className="d-flex justify-content-between align-items-center flex-wrap mt-5">
          <div>
            <img style={{ borderRadius: '50%' }} className='' width={'200px'} src={icon} alt="" />

          </div>
          <div className='me-auto '>
            <h1 className='fs-3 fw-bold py-1'>Jishan</h1>
            <h2 className='fs-4 py-1'>mohdjishan@gmail.com</h2>
 
          </div>
          <div className="d-flex justify-content-evenly flex-wrap mx-3 mt-5">
            <EditProfile/>
            <AddPost/>

          </div>
      
        </div>
        <hr />
        <div className="mt-5">
        <h1 style={{ fontSize: '40px' }} className='text-gray-500 fw-bolder '>Blogs</h1>
        <div className="d-flex justify-content-center align-items-center flex-wrap mt-5 px-3">
          <BlogCard/>
          
        </div>
        </div>
      </div>
    </>
  )
}

export default MyProfile