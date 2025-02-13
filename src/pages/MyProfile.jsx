import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import AddPost from '../components/AddPost';
import EditProfile from '../components/EditProfile';
import EditPost from '../components/EditPost';
import { deleteBlogAPI, getUserBlogAPI } from '../services/allAPI';
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
import SERVER_BASE_URL from '../services/serverUrl';
import { addBlogContext, editBlogContext } from '../Contexts/ContextShare';
import defaultUserIcon from "../assets/icon.png"; // Default icon

const MyProfile = () => {
  const { addBlogResponse, setAddBlogResponse } = useContext(addBlogContext);
  const { editBlogResponse } = useContext(editBlogContext);

  const [show, setShow] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [userBlogs, setUserBlogs] = useState([]);
  const [username, setUsername] = useState("User");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState(defaultUserIcon);

  useEffect(() => {
    getUserAllBlogs();

    if (sessionStorage.getItem("user")) {
      const userData = JSON.parse(sessionStorage.getItem("user"));
      setUsername(userData.username);
      setEmail(userData.email);
      setProfilePic(userData.profilePic ? `${SERVER_BASE_URL}/uploads/${userData.profilePic}` : defaultUserIcon);
    }
  }, [addBlogResponse, editBlogResponse]);

  const handleClose = () => {
    setSelectedBlog(null);
  };

  const handleShow = (blog) => {
    setSelectedBlog(blog);
  };

  const getUserAllBlogs = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = { "Authorization": `Bearer ${token}` };
      try {
        const result = await getUserBlogAPI(reqHeader);
        if (result.status === 200) {
          setUserBlogs(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const deleteBlog = async (id) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = { "Authorization": `Bearer ${token}` };
      try {
        const result = await deleteBlogAPI(id, reqHeader);
        if (result.status === 200) {
          getUserAllBlogs();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <Header />
      <div style={{ paddingTop: '50px' }} className="container mt-5">
        <div className='d-flex justify-content-between align-items-center'>
          <h1 style={{ fontSize: '60px' }} className='text-yellow-500 fw-bolder'>Profile</h1>
          <h1 style={{ fontSize: '60px' }} className='text-yellow-500 fw-bolder'>
            <span style={{ fontSize: '30px' }} className='text-black fw-bolder'>Welcome</span> {username}
          </h1>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center flex-wrap mt-5">
          <div>
            <img 
              style={{ borderRadius: '50%' }} 
              className='' 
              width={'200px'} 
              src={profilePic} 
              alt="Profile"
              onError={(e) => { e.target.src = defaultUserIcon; }} // Fallback image
            />
          </div>
          <div className='me-auto '>
            <h1 className='fs-3 fw-bold py-1'>{username}</h1>
            <h2 className='fs-4 py-1'>{email}</h2>
          </div>
          <div className="d-flex justify-content-evenly flex-wrap mx-3 mt-5">
            <EditProfile />
            <AddPost />
          </div>
        </div>
        <hr />
        <div className="mt-5">
          <h1 style={{ fontSize: '40px' }} className='text-gray-500 fw-bolder'>Blogs</h1>
          <div className="d-flex justify-content-center align-items-center flex-wrap mt-5 px-3">
            {userBlogs.length > 0 ? (
              userBlogs.map(blogs => (
                <Card key={blogs?._id} className='my-3 mx-3' sx={{ maxWidth: 345 }}>
                  <div className='d-flex justify-between align-items-center'>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="author">
                          <img src={profilePic} alt="Profile" />
                        </Avatar>
                      }
                      title={username}
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
                    <button onClick={() => deleteBlog(blogs?._id)} className='ms-auto'><i className="fa-solid fs-4 fa-trash"></i></button>
                  </CardActions>
                </Card>
              ))
            ) : (
              <div className="fw-bolder fs-3">You Haven't Posted Any Blog Yet... Add Blog Now!!</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
