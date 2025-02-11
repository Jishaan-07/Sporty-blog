import React, { useState, useEffect, useContext } from 'react'
import Button from 'react-bootstrap/Button';
 import Modal from 'react-bootstrap/Modal';
import SERVER_BASE_URL from '../services/serverUrl';
import { editBlogAPI } from '../services/allAPI';
 

const EditPost = ({ blogs }) => {


    //  blog key in props will hold blog data to be displahyed in the componnet
     const [preview, setPreview] = useState("")

    const [fileStatus, setFileStatus] = useState(false)
    const [show, setShow] = useState(false);

    const [blogDetails, setBlogDetails] = useState({
        id: blogs?._id, title: blogs?.title, subDescription: blogs?.subDescription, description: blogs?.description, date: blogs?.date, blogImage: ""
    })

    // blogImage is used to hold user uploadded file instead of existing file
    console.log(blogDetails);


    useEffect(() => {
        if (blogDetails.blogImage.type == "image/png" || blogDetails.blogImage.type == "image/jpg" || blogDetails.blogImage.type == "image/jpeg") {
            setFileStatus(true)
            setPreview(URL.createObjectURL(blogDetails.blogImage)
            )
        } else {
            setFileStatus(false)
            setBlogDetails({ ...blogDetails, blogImage: "" })
        }
    }, [blogDetails.blogImage])




    const handleClose = () => {
        setShow(false)
        setBlogDetails({
             id: blogs?.id, title: blogs?.title, subDescription: blogs?.subDescription, description: blogs?.description, date: blogs?.date, blogImage: ""
        })
    };
    const handleShow = () => {
        if (!blogs?.id) {
            console.error("Error: Blog ID is missing!");
            return;
        }
        setShow(true);
        setBlogDetails({
            id: blogs.id,  // Ensure `id` is set
            title: blogs.title,
            subDescription: blogs.subDescription,
            description: blogs.description,
            date: blogs.date,
            blogImage: ""
        });
    };
    


    const handleEditBlog=async()=>{
        const {id,title , subDescription , description ,date ,blogImage }=blogDetails
        if(title && subDescription && description && date && blogImage){
            const reqBody = new FormData()

            reqBody.append("title",title)
            reqBody.append("subDescription",subDescription)
            reqBody.append("description",description)
            reqBody.append("date",date)
            // image will have value when  user reupload pic
            preview? reqBody.append("blogImage",blogImage):reqBody.append("blogImage",blogs?.blogImage)

            
            const token = sessionStorage.getItem("token")
            if(token){
            const reqHeader = {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`  
            };
                //make api call
            try {
                const result = await editBlogAPI(id,reqBody,reqHeader)
                if(result.status==200){
                    alert("Blog Editted Successfully!!")
                    handleClose()
                    // share result with my profile with context
                 }
            } catch (err) {
                console.log(err);
                
            }

        }
    }else{
            alert("Please FillThe Form !!!")
        }

    }


    return (
        <>
            <button onClick={handleShow} className="  bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-2 border-b-4 border-yellow-700 hover:border-yellow-800 rounded">
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <Modal size='lg'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='d-flex justify-content-center align-items-center'>
                        <label>
                            <input onChange={e => setBlogDetails({ ...blogDetails, blogImage: e.target.files[0] })} style={{ display: 'none' }} type="file" />
                            <img width={'400px'} src={preview ? preview : `${SERVER_BASE_URL}/uploads/${blogs?.blogImage}`} alt="" />
                        </label>
                    </div>
                    {!fileStatus && <div className="text-danger text-center fw-bolder">Upload only (jpeg,png,jpg) files only!!!</div>}


                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Title</label>
                        <input value={blogDetails.title} onChange={e => setBlogDetails({ ...blogDetails, title: e.target.value })} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Sub Description</label>
                        <input value={blogDetails.subDescription} onChange={e => setBlogDetails({ ...blogDetails, subDescription: e.target.value })} type="text" className="form-control" id="exampleFormControlInput1" placeholder="2-3 lines of description" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea value={blogDetails.description} onChange={e => setBlogDetails({ ...blogDetails, description: e.target.value })} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Date</label>
                        <input value={blogDetails.date} onChange={e => setBlogDetails({ ...blogDetails, date: e.target.value })} type="date" className="form-control" id="exampleFormControlInput1" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleEditBlog} variant="warning">Update</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default EditPost