import React from 'react'
import login from '../assets/login.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form'; import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Auth = ({ insideRegister }) => {
  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh' }} className=" d-flex justify-content-center align-items-center">
        <div className="container w-75">
          <div className="card shadow p-2">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="container">
                  <h1 className='fs-2 my-3 text-center'>Welcome {insideRegister ? 'To' : 'back to'}<span style={{ fontSize: '50px' }} className='fw-bolder text-yellow-500'> Sporty Blog</span> </h1>
                  <h4 className='text-center'>Please fill the fields with your Details!!</h4>
                  <Form>


                    {insideRegister && <FloatingLabel
                      controlId="floatingInputUsername"
                      label="Username"
                      className="  my-4" >
                      <Form.Control type="text" placeholder="Jhon_7" />
                    </FloatingLabel>
                    }
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className="  my-4"
                    >
                      <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>


                    <FloatingLabel controlId="floatingPassword" label="Password">
                      <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>


                    <div className='d-flex justify-content-center'>
                      {
                        insideRegister?
                        
                        <Link to={'/login'}><Button size='lg' style={{ padding: '10px 70px' }} className='text-white   mt-5 rounded-pill fs-3' variant="warning">Sign Up</Button></Link>
                        :
                       <Link to={'/'}> <Button size='lg' style={{ padding: '10px 70px' }} className='text-white   mt-5 rounded-pill fs-3' variant="warning">Sign In</Button></Link>
                      }

                    </div>
                  </Form>
                 { 
                 insideRegister ? 
                  
                  <Link to={'/login'}>
                    <p className='text-center mt-5'>Already registered ? <span className='text-yellow-500 fw-bolder'>Sign In</span></p>

                  </Link> 
                  :
                        
                  <Link to={'/register'}>
                  <p className='text-center mt-5'>Don't have an account ? <span className='text-yellow-500 fw-bolder'>Sign up for FREE</span></p>

                </Link> 
                  }            
                  
                     </div>
              </div>
              <div className="col-lg-6">
                <img src={login} alt="" width={'100%'} className='img-fluid' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Auth