import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../components/NavBar.css';


function NavBar() {

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">DD Foot Ware</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className='navbarlist listitem'>Home</Nav.Link>
            <Nav.Link href="/products" className='listitem'>Products</Nav.Link>
          </Nav>

          <Link to="/login" className="btn btn-dark ms-2">Login</Link>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;
