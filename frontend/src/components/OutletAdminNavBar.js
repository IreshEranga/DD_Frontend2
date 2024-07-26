
import React from 'react';
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../components/NavBar.css';
//import { CartContext } from '../context/CartContext';
//import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  //const { cartItems } = useContext(CartContext);
  //const itemCount = cartItems.length;

  const navigate = useNavigate();

  const handleLogout = () => {
        localStorage.removeItem('token');
         navigate('/login');
      };

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/outletAdmin">DD Foot Ware</Navbar.Brand>
          
          <Link to="/login" className="btn btn-light ms-2" onClick={handleLogout}>LogOut</Link>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;



