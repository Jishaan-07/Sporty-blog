import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Dropdown } from 'react-bootstrap';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate()
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLogin(true)
    }else{
      setIsLogin(false)
    }
  },[])

  const handleLogout=()=>{
    sessionStorage.clear()
    navigate("/")
  }

  return (
    <>
      <Navbar style={{ width: '100%', position: 'fixed', top: 0, left: 0, zIndex: 1000 }} expand="lg" className="bg-yellow-500 shadow py-2 rounded" variant="dark">
        <Container fluid>
          <Navbar.Brand className="fs-3 fw-bold px-5 text-light" as={Link} to="/">
            Sporty Blog <i className="fa-solid fa-volleyball"></i>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll" className="justify-content-between align-items-center">
            <Nav className="mx-auto fs-3 gap-3">
              <Nav.Link as={Link} to="/" className="text-light fw-semibold">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/all-post" className="text-light fw-semibold">
                All Posts
              </Nav.Link>
            </Nav>

          

            {isLogin ? (
              <Dropdown className='px-5'>
                <Dropdown.Toggle className=' bg-gray-700 border shadow' id="dropdown-basic">
                  Profile
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Link to={'/my-profile/:id'}>
                    <Dropdown.Item className='' as="span">My Profile</Dropdown.Item>
                  </Link>

                  <Dropdown.Item as="span" onClick={handleLogout}  >Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (



             <Link to={'/register'}>
                <button   className="  bg-yellow-800 hover:bg-yellow-900 text-white font-bold py-1 px-2 ms-auto border-b-4 border-yellow-700 hover:border-yellow-800 rounded">
                  Create Account
                </button>
             </Link>
            )
            }






          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
