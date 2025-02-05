import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import upload from '../assets/upload.jpg'
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-router-dom';

const AddPost = () => {
     const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
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

                    <div className='d-flex justify-content-center align-items-center'>
                        <label>
                            <input style={{ display: 'none' }} type="file" />
                            <img width={'400px'} src={upload} alt="" />
                        </label>
                    </div>
                    <div className="text-danger text-center fw-bolder">Upload only (jpeg,png,jpg) files only!!!</div>

                    
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Title</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Sub Description</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="2-3 lines of description" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                     
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Date</label>
                            <input type="date" className="form-control" id="exampleFormControlInput1" />
                        </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning">Save</Button>
                </Modal.Footer>
            </Modal>

        </>
  )
}

export default AddPost