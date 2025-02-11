import React, { useState } from 'react'
import loginImg from '../assets/login.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../services/allAPI';
import { Spinner } from 'react-bootstrap';

const Auth = ({ insideRegister }) => {
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()
    const [userInput,setUserInput]=useState({
      username:"",email:"",password:""
    })
console.log(userInput);

const register = async (e) => {
  e.preventDefault();
  if (userInput.username  && userInput.email && userInput.password) {
    // api call
    try {
      const result = await registerAPI(userInput);
      if (result.status === 200) {
        alert(`Welcome ${result.data?.username}, Please Login to Start Blog!!!`);
        navigate("/login");
        setUserInput({ username: "" , email: "", password: "" });
      } else {
        if (result.response.status === 406) {
          alert(result.response.data);
          setUserInput({ username: "" , email: "", password: "" });
        }
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    alert("Please fill the form completely!!!");
  }
};

const login = async (e) => {
  e.preventDefault();
  if ( userInput.email && userInput.password) {
    // api call
    try {
      const result = await loginAPI(userInput);
      if (result.status === 200) {
        sessionStorage.setItem("user",JSON.stringify(result.data.user))
        sessionStorage.setItem("token",result.data.token)
        setIsLogin(true)
      setTimeout(() => {
        navigate("/");
        setUserInput({ username: "" , email: "", password: "" });
        setIsLogin(false)
      }, 2000);
      
      } else {
        if (result.response.status === 404) {
          alert(result.response.data);
          setUserInput({ username: "" , email: "", password: "" });
        }
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    alert("Please fill the form completely!!!");
  }
};


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


                    {insideRegister && 
                    <FloatingLabel
                      controlId="floatingInputUsername"
                      label="Username"
                      className="  my-4" >
                      <Form.Control  value={userInput.username} onChange={e => setUserInput({ ...userInput, username: e.target.value })}  type="text" placeholder="Jhon_7" />
                    </FloatingLabel>
                    }
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email address"
                      className="  my-4"
                    >
                      <Form.Control value={userInput.email} onChange={e => setUserInput({ ...userInput, email: e.target.value })} type="email" placeholder="name@example.com" />
                    </FloatingLabel>


                    <FloatingLabel controlId="floatingPassword" label="Password">
                      <Form.Control  value={userInput.password} onChange={e => setUserInput({ ...userInput, password: e.target.value })} type="password" placeholder="Password" />
                    </FloatingLabel>


                    <div className='d-flex justify-content-center'>
                      {
                        insideRegister?
                        
                        <Button onClick={register} size='lg' style={{ padding: '10px 70px' }} className='text-white   mt-5 rounded-pill fs-3' variant="warning">Sign Up</Button> 
                        :
                         <Button onClick={login} size='lg' style={{ padding: '10px 70px' }} className='text-white   mt-5 rounded-pill fs-3' variant="warning">Sign In 
                       {isLogin && <Spinner className='mx-2' animation="grow" variant="light" />}
                         </Button> 
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
                <img src={loginImg} alt="" width={'100%'} className='img-fluid' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Auth