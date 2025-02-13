import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import profileUpload from '../assets/ProfileUpload.jpg'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import SERVER_BASE_URL from '../services/serverUrl';
import { editUserAPI } from '../services/allAPI';

const EditProfile = () => {

    const [existProfilePic, setExistProfilePic] = useState("")
    const [preview, setPreview] = useState("")
    const [userDetails, setUserDetails] = useState({
        username: "", email: "", password: "", profilePic: ""
    })
    console.log(userDetails);

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            const user = JSON.parse(sessionStorage.getItem("user"))
            setUserDetails({
                ...userDetails, username: user.username, email: user.email, password: user.password
            })
            setExistProfilePic(user.profilePic)
        }
    }, [])

    // another useEffect for profilePic
    useEffect(() => {
        if (userDetails.profilePic) {
            setPreview(URL.createObjectURL(userDetails.profilePic))
        }else{
            setPreview("")
        }
    }, [userDetails.profilePic])


    const [show, setShow] = useState(false);

    const handleClose1 = () => setShow(false);
    const handleShow1 = () => setShow(true);



    const handleUserEdit=async()=>{
        const {username,email,password,profilePic}=userDetails
        if(username){
            const reqBody = new FormData()
            reqBody.append("username",username)
            reqBody.append("email",email)
            reqBody.append("password",password)
            preview ? reqBody.append("profilePic",profilePic) : reqBody.append("profilePic",existProfilePic)
            const token =sessionStorage.getItem("token")
            if(token){
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                };
                try {
                    const result = await editUserAPI(reqBody,reqHeader)
                    if(result.status==200){
                        alert("User Profile Updated Successfully!!!")
                        sessionStorage.setItem("user",JSON.stringify(result.data))
                        handleClose1()
                    }
                } catch (err) {
                    console.log(err);
                    
                }
            }

        }else{
            alert("Please Fill the Form Completely!!!")
        }
    }
    return (
        <>
            <button onClick={handleShow1} className="  bg-gray-400 mx-2 hover:bg-gray-500 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-800 rounded">
                Edit Profile
            </button>
            <Modal size='lg'
                show={show}
                onHide={handleClose1}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='fs-2 fw-bolder'><span className='text-yellow-400'>Edit </span> Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex justify-content-center align-items-center'>
                        <label>
                            <input onChange={e => setUserDetails({ ...userDetails, profilePic: e.target.files[0] })} style={{ display: 'none' }} type="file" />
                            {
                                existProfilePic == "" ?
                                    <img width={'400px'} src={preview?preview:profileUpload} alt="" />
                                    :
                                    <img width={'400px'} src={preview?preview:`${SERVER_BASE_URL}/uploads/${existProfilePic}`} alt="" />
                            }
                        </label>
                    </div>
                    <div className="text-danger text-center fw-bolder">Upload only (jpeg,png,jpg) files only!!!</div>

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInputusername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })}
                                type="text"
                                placeholder="Username"
                                autoFocus
                            />
                        </Form.Group>



                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        Close
                    </Button>
                    <Button onClick={handleUserEdit} variant="warning">Update</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default EditProfile