import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SERVER_BASE_URL from '../services/serverUrl';
import { editBlogAPI } from '../services/allAPI';
import { editBlogContext } from '../Contexts/ContextShare'; 

const EditPost = ({ blogs }) => {
    const { setEditBlogResponse } = useContext(editBlogContext);  
    const [show, setShow] = useState(false);  
    const [preview, setPreview] = useState("");
    const [fileStatus, setFileStatus] = useState(false);
    const [blogDetails, setBlogDetails] = useState({
        id: blogs?._id,
        title: blogs?.title,
        subDescription: blogs?.subDescription,
        description: blogs?.description,
        date: blogs?.date,
        blogImage: "",
    });

    useEffect(() => {
        if (blogDetails.blogImage && 
            (blogDetails.blogImage.type === "image/png" || blogDetails.blogImage.type === "image/jpg" || blogDetails.blogImage.type === "image/jpeg")) {
            setFileStatus(true);
            setPreview(URL.createObjectURL(blogDetails.blogImage));
        } else {
            setFileStatus(false);
            setBlogDetails({ ...blogDetails, blogImage: "" });
        }
    }, [blogDetails.blogImage]);

    const handleClose = () => {
        setShow(false);
        setBlogDetails({
            id: blogs?._id,
            title: blogs?.title,
            subDescription: blogs?.subDescription,
            description: blogs?.description,
            date: blogs?.date,
            blogImage: "",
        });
    };

    const handleShow = () => {
        setShow(true);
        setBlogDetails({
            id: blogs?._id,
            title: blogs?.title,
            subDescription: blogs?.subDescription,
            description: blogs?.description,
            date: blogs?.date,
            blogImage: "",
        });
    };

    const handleEditBlog = async () => {
        const { id, title, subDescription, description, date, blogImage } = blogDetails;
        if (title && subDescription && description && date) {
            const reqBody = new FormData();
            reqBody.append("title", title);
            reqBody.append("subDescription", subDescription);
            reqBody.append("description", description);
            reqBody.append("date", date);
            preview ? reqBody.append("blogImage", blogImage) : reqBody.append("blogImage", blogs?.blogImage);

            const token = sessionStorage.getItem("token");
            if (token) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                };

                try {
                    const result = await editBlogAPI(id, reqBody, reqHeader);
                    if (result.status === 200) {
                        alert("Blog Edited Successfully!");
                        setEditBlogResponse(result.data);  
                        handleClose();
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        } else {
            alert("Please Fill The Form!");
        }
    };

    return (
        <>
            <button onClick={handleShow} className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-2 border-b-4 border-yellow-700 hover:border-yellow-800 rounded">
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <Modal size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center align-items-center">
                        <label>
                            <input onChange={e => setBlogDetails({ ...blogDetails, blogImage: e.target.files[0] })} style={{ display: 'none' }} type="file" />
                            <img width="400px" src={preview ? preview : `${SERVER_BASE_URL}/uploads/${blogs?.blogImage}`} alt="" />
                        </label>
                    </div>
                    {!fileStatus && <div className="text-danger text-center fw-bolder">Upload only (jpeg, png, jpg) files only!</div>}
                    
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input value={blogDetails.title} onChange={e => setBlogDetails({ ...blogDetails, title: e.target.value })} type="text" className="form-control" placeholder="Title" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Sub Description</label>
                        <input value={blogDetails.subDescription} onChange={e => setBlogDetails({ ...blogDetails, subDescription: e.target.value })} type="text" className="form-control" placeholder="2-3 lines of description" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea value={blogDetails.description} onChange={e => setBlogDetails({ ...blogDetails, description: e.target.value })} className="form-control" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        <input value={blogDetails.date} onChange={e => setBlogDetails({ ...blogDetails, date: e.target.value })} type="date" className="form-control" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button onClick={handleEditBlog} variant="warning">Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditPost;
