import React from 'react';
import '../Components/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo1 from '../Assets/Assets/Home/logo1.png';
import traffic from '../Assets/Assets/Homecounter/traffic.png';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="p-0">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo1} className='logo1' alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Navbar</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="mx-auto links">
                <Link to="about" className={` text-decoration-none text-black mx-3`}>About Us</Link>
                <Link to="events" className={`text-decoration-none text-black mx-3`}>Events</Link>
                <Link to="training" className={`text-decoration-none text-black mx-3`} >Training</Link>
                <Link to="awarnessvideo" className={`text-decoration-none text-black mx-3`} >Traffic Awarness Video</Link>
                <Link to="investor" className={`text-decoration-none text-black mx-3`}>Investor</Link>
                <Link to="contact" className={`text-decoration-none text-black mx-3`} >Contact</Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
        <img src={traffic} className='logo2 d-none d-md-block justify-content-start' alt="Logo" />
      </Navbar>
    </>
  );
};

export default Header;
