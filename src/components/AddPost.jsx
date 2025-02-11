import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import upload from '../assets/upload.jpg'
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-router-dom';
import { addBlogAPI } from '../services/allAPI';
import { addBlogContext } from '../Contexts/ContextShare';

const AddPost = () => {
    const {addBlogResponse,setAddBlogResponse} = useContext(addBlogContext)
    const [preview,setPreview]=useState("")
    const [fileStatus,setFileStatus]=useState(false)
    const[blogDetails,setBlogDetails]=useState({
        title:"",subDescription:"",description:"",date:"",blogImage:""
    })
    console.log(blogDetails);
    
     const [show, setShow] = useState(false);
     
        useEffect(()=>{
            if(blogDetails.blogImage.type=="image/png" || blogDetails.blogImage.type=="image/jpg" || blogDetails.blogImage.type=="image/jpeg"  ){
                setFileStatus(true)
                setPreview( URL.createObjectURL(blogDetails.blogImage)
            )
            }else{
                    setFileStatus(false)
                    setBlogDetails({...blogDetails,blogImage:""})
            }
        },[blogDetails.blogImage])


        const handleClose = () => setShow(false);
        const handleShow = () => {
            setShow(true)
            setPreview("")
            setFileStatus(false)
            setBlogDetails({ title:"",subDescription:"",description:"",date:"",blogImage:""})
        };

        const handleAddBlog=async()=>{
            const {title , subDescription , description ,date ,blogImage }=blogDetails
            if(title && subDescription && description &&date &&blogImage){
                // api for add blog
                const reqBody = new FormData()
                reqBody.append("title",title)
                reqBody.append("subDescription",subDescription)
                reqBody.append("description",description)
                reqBody.append("date",date)
                reqBody.append("blogImage",blogImage)

                const token = sessionStorage.getItem("token")
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`  
                };
                // make api call
                try {
                    const result = await addBlogAPI(reqBody,reqHeader)
                    console.log(result);
                    if(result.status==200){
                        alert(` Blog Uploaded Successfully`)
                        handleClose()
                        // share result to view using context
                        setAddBlogResponse(result)
                    }else{
                        if(result.response.status==406){
                            alert(result.response.data)
                        }
                    }
                    
                } catch (err) {
                    console.log(err);
                    
                }

            }else{
                alert("Please fill the details for the blog!!!")
            }
        }


  return (
    <>
            <button onClick={handleShow} className="  bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-800 rounded">
                Add Blog
            </button>
            <Modal size='lg'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fs-2 fw-bolder'><span className='text-yellow-400'>Add</span> Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div  className='d-flex justify-content-center align-items-center'>
                        <label>
                            <input onChange={e=>setBlogDetails({...blogDetails,blogImage:e.target.files[0]})} style={{ display: 'none' }} type="file" />
                            <img width={'400px'} src={preview?preview:upload} alt="" />
                        </label>
                    </div>
                   {!fileStatus && <div className="text-danger text-center fw-bolder">Upload only (jpeg,png,jpg) files only!!!</div>}

                    
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Title</label>
                            <input value={blogDetails.title} onChange={e=>setBlogDetails({...blogDetails,title:e.target.value})} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Sub Description</label>
                            <input value={blogDetails.subDescription } onChange={e=>setBlogDetails({...blogDetails,subDescription:e.target.value})}  type="text" className="form-control" id="exampleFormControlInput1" placeholder="2-3 lines of description" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea  value={blogDetails.description} onChange={e=>setBlogDetails({...blogDetails,description:e.target.value})} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                     
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Date</label>
                            <input  value={blogDetails.date} onChange={e=>setBlogDetails({...blogDetails,date:e.target.value})} type="date" className="form-control" id="exampleFormControlInput1" />
                        </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleAddBlog} variant="warning">Save</Button>
                </Modal.Footer>
            </Modal>

        </>
  )
}

export default AddPost