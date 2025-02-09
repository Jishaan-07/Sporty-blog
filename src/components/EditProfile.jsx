import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import profileUpload from '../assets/ProfileUpload.jpg'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const EditProfile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button onClick={handleShow} className="  bg-gray-400 mx-2 hover:bg-gray-500 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-800 rounded">
                Edit Profile
            </button>
            <Modal size='lg'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fs-2 fw-bolder'><span className='text-yellow-400'>Edit </span> Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                      <div className='d-flex justify-content-center align-items-center'>
                                            <label>
                                                <input style={{ display: 'none' }} type="file" />
                                                <img width={'400px'} src={profileUpload} alt="" />
                                            </label>
                                        </div>
                                        <div className="text-danger text-center fw-bolder">Upload only (jpeg,png,jpg) files only!!!</div>
                    
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInputusername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                autoFocus
                            />
                        </Form.Group>



                        <Form.Group className="mb-3" controlId="exampleForm.ControlInputemail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInputpassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                               
                                autoFocus
                            />
                        </Form.Group>

                    </Form>

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

export default EditProfile