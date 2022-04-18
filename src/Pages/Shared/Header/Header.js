import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/images (2).jpg'

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut =()=>{
    signOut(auth);
  }
    return (
        <div>
          {/* navbar create */}
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/"><img src={logo} height="50" alt="" />
  <h4>Ananaya's Tour Site</h4></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
       <Nav.Link as={Link}to="/">Home</Nav.Link>
      <Nav.Link as={Link}to="/services">Services</Nav.Link>
      <Nav.Link as={Link}to="/blog">Blog</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link}to="about">About</Nav.Link>
      { 
      user ?
      <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
      :
      <Nav.Link as={Link} to="login">
        Login
      </Nav.Link>
}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
         
    );
};

export default Header;