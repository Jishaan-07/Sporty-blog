import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Dropdown } from 'react-bootstrap';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);


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

             <Form className="d-flex me-3">
              <FormControl
                type="search"
                placeholder="Search..."
                className="me-2 rounded-pill px-3"
                style={{ minWidth: '200px', border: '1px solid #ddd' }}
              />
              <Button variant="outline-light" className="rounded-pill px-3">
                Search
              </Button>
            </Form>

  
              <Dropdown className='px-5'>
                <Dropdown.Toggle className=' bg-gray-700 border shadow' id="dropdown-basic">
                  Profile
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Link to={'/my-profile/:id'}>
                    <Dropdown.Item className='' as="span">My Profile</Dropdown.Item>
                  </Link>

                  <Dropdown.Item as="span"  >Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
        


    


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
