import React from 'react'
import Header from '../components/Header'
import BlogCard from '../components/BlogCard'

const AllPost = () => {
  return (
    <>
    <Header/>
   <div style={{paddingTop:'50px'}} className='container mt-5'>
   <h1 style={{ fontSize: '70px' ,fontWeight:'600'}} className='mt-5'><span className='text-yellow-400'>ALL</span> Blogs</h1>

     <BlogCard/>
     </div>
    </>
  )
}

export default AllPost