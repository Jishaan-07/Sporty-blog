import * as React from 'react';
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
 import EditPost from './EditPost';
 import SERVER_BASE_URL from '../services/serverUrl';
import { useState } from 'react';
import icon from "../assets/icon.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 
 const BlogCard = ({displayData}) => {
         const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);


   return (
     <>
     
<Card className='my-3 mx-3' sx={{ maxWidth: 345 }}>
           <div className='d-flex justify-between align-items-center'>
                <CardHeader
                    avatar={
                        <Avatar aria-label="author">
                            <img src={user} alt="" />
                        </Avatar>
                    }
    
                    title={displayData?.userId}
                    subheader={displayData?.date}
                    
                />
            
           </div>
            <CardMedia
                component="img"
                height="194"
                image={`${SERVER_BASE_URL}/uploads/${displayData?.blogImage}`}
                alt="Blog Image"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                   {displayData?.title}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>


                 <button onClick={handleShow} className="  bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-2 ms-auto border-b-4 border-yellow-700 hover:border-yellow-800 rounded">
           View More
            </button>

      <Modal size='xl' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h1 style={{ fontSize: '70px', fontWeight: '600' }} className='mt-5'><span className='text-yellow-400'>The</span> Blog</h1>
           </Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="container mt-5">
          <h1 className='fs-3'>{displayData?.subDescription}</h1>
          <div className="row mt-5 pb-5">
            <div className="col-lg-5 d-flex justify-start align-items-center mb-3">
              <img src={icon} alt="" />
              <h2 className='px-2 fs-3 '>{displayData?.userId}</h2>

              <div className='d-flex align-items-center mx-3 gap-2' style={{ whiteSpace: 'nowrap' }}>
    <i className="fa-solid fs-4 fa-calendar-days"></i> 
    <h2 className='fs-5 m-0'>{displayData?.date}</h2>
</div>

             
            </div>
            <div className="col-lg-1"> </div>

            <div className="col-lg-3"></div>
            <div className="col-lg-3 ms-auto">
           
              
            </div>
            <hr />
          </div>

          <div className="d-flex justify-content-center align-items-center mt-5">
            <img width={'700px'} src={`${SERVER_BASE_URL}/uploads/${displayData?.blogImage}`} alt="" />
          </div>
          <h2 className='mt-5 fs-2 fw-bolder'>Description</h2> <hr />
          <p className='mt-5 text-justify'>{displayData?.description}</p>
        </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>

                  
                      </CardActions>
        </Card>
     </>
   )
 }
 
 export default BlogCard