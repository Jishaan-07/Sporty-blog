import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import BlogCard from '../components/BlogCard';
import { getAllBlogAPI } from '../services/allAPI';
import { Button, Form, FormControl } from 'react-bootstrap';
Button
const AllPost = () => {

  const [searchKey,setSearchKey]=useState("")
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    getAllBlog();
  }, [searchKey]);

  const getAllBlog = async () => {
    try {
      const result = await getAllBlogAPI(searchKey);
      console.log(result);
      
      if (result.status === 200) {
        setAllBlogs(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div style={{paddingTop:'50px'}} className="container mt-5">
       <div className='d- flex justify-content-between align-items-center'>
          <h1 style={{ fontSize: '70px', fontWeight: '600' }} className="mt-5">
            <span className="text-yellow-400">ALL</span> Blogs
          </h1>
          <Form className="d-flex mt-5 me-3">
                <FormControl onChange={e=>setSearchKey(e.target.value)}
                  type="search"
                  placeholder="Search By Title..."
                  className="me-2 rounded-pill px-3"
                  style={{ minWidth: '200px', border: '1px solid #ddd' }}
                />
               
              </Form>
       </div>
        
        {/* Use flexbox to display blogs in a responsive grid */}
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
          {allBlogs.map((blog) => (
            <BlogCard key={blog.id} displayData={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllPost;
