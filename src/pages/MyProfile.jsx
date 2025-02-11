import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import icon10 from '../assets/830.jpg'
import AddPost from '../components/AddPost'
import EditProfile from '../components/EditProfile'
import EditPost from '../components/EditPost'

import BlogCard from '../components/BlogCard'
import { getUserBlogAPI } from '../services/allAPI'


import icon from "../assets/icon.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import user from '../assets/icon.png'
import SERVER_BASE_URL from '../services/serverUrl';
import { addBlogContext } from '../Contexts/ContextShare'




const MyProfile = () => {

  // blog key in props will hold blog data 
   const { addBlogResponse, setAddBlogResponse } = useContext(addBlogContext)
  const [show, setShow] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const [userBlogs, setUserBlogs] = useState([])
  console.log(userBlogs);

  const [username, setusername] = useState("")
  
  useEffect(() => {
    getUserAllBlogs()
    if (sessionStorage.getItem("user")) {
      setusername(JSON.parse(sessionStorage.getItem("user")).username.split(" ")[0]
      )
    }
  }, [addBlogResponse])


  const handleClose = () => {
    setSelectedBlog(null); // Clear the state when modal closes
  };  const handleShow = (blog) => {
    setSelectedBlog(blog); // Store the clicked blog in state
  };
    const getUserAllBlogs = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getUserBlogAPI(reqHeader)
        console.log(result);
        if (result.status == 200) {
          setUserBlogs(result.data)
        }

      } catch (err) {
        console.log(err);

      }
    }
  }
  return (
    <>
      <Header />
      <div style={{ paddingTop: '50px' }} className="container mt-5">
        <div className='d-flex justify-content-between align-items-center'>
          <h1 style={{ fontSize: '60px' }} className='text-yellow-500 fw-bolder '>Profile</h1>
          <h1 style={{ fontSize: '60px' }} className='text-yellow-500 fw-bolder '><span style={{ fontSize: '30px' }} className='text-black fw-bolder'>welcome</span> {username}</h1>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center flex-wrap mt-5">
          <div>
            <img style={{ borderRadius: '50%' }} className='' width={'200px'} src={icon10} alt="" />

          </div>
          <div className='me-auto '>
            <h1 className='fs-3 fw-bold py-1'>Jishan</h1>
            <h2 className='fs-4 py-1'>mohdjishan@gmail.com</h2>

          </div>
          <div className="d-flex justify-content-evenly flex-wrap mx-3 mt-5">
            <EditProfile />
            <AddPost />

          </div>

        </div>
        <hr />
        <div className="mt-5">
          <h1 style={{ fontSize: '40px' }} className='text-gray-500 fw-bolder '>Blogs</h1>
          <div className="d-flex justify-content-center align-items-center flex-wrap mt-5 px-3">



            {userBlogs.length > 0 ?
              userBlogs?.map(blogs => (
                <Card key={blogs?._id} className='my-3 mx-3' sx={{ maxWidth: 345 }}>
                  <div className='d-flex justify-between align-items-center'>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="author">
                          <img src={user} alt="" />
                        </Avatar>
                      }

                      title={blogs?.userId}
                      subheader={blogs?.date}

                    />
                    <EditPost blogs={blogs} />
                  </div>
                  <CardMedia
                    component="img"
                    height="194"
                    image={`${SERVER_BASE_URL}/uploads/${blogs?.blogImage}`}
                    alt="Blog Image"
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {blogs?.title}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>


                    <button onClick={() => handleShow(blogs)} className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-2 ms-auto border-b-4 border-yellow-700 hover:border-yellow-800 rounded">
  View More
</button>

<Modal size='xl' show={!!selectedBlog} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>
      <h1 style={{ fontSize: '70px', fontWeight: '600' }} className='mt-5'>
        <span className='text-yellow-400'>The</span> Blog
      </h1>
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className="container mt-5">
      <h1 className='fs-3'>{selectedBlog?.subDescription}</h1>
      <div className="row mt-5 pb-5">
        <div className="col-lg-5 d-flex justify-start align-items-center mb-3">
          <img src={icon} alt="" />
          <h2 className='px-2 fs-3 '>{selectedBlog?.userId}</h2>
          <div className='d-flex align-items-center mx-3 gap-2' style={{ whiteSpace: 'nowrap' }}>
            <i className="fa-solid fs-4 fa-calendar-days"></i>
            <h2 className='fs-5 m-0'>{selectedBlog?.date}</h2>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <img width={'700px'} src={`${SERVER_BASE_URL}/uploads/${selectedBlog?.blogImage}`} alt="" />
      </div>
      <h2 className='mt-5 fs-2 fw-bolder'>Description</h2> <hr />
      <p className='mt-5 text-justify'>{selectedBlog?.description}</p>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Close</Button>
  </Modal.Footer>
</Modal>

                    <button className='  ms-auto'><i class="fa-solid fs-4 fa-trash"></i></button>
                  </CardActions>
                </Card>
              ))

              :
              <div className="fw-bolder fs-3">You Haven't Posted Any Blog Yet...Add Blog Now!!</div>
            }




          </div>
        </div>
      </div>
    </>
  )
}

export default MyProfile