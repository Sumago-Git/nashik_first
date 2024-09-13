import React from 'react';
import '../Components/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo1 from '../Assets/Assets/Home/logo1.png';
import traffic from '../Assets/Assets/Homecounter/traffic.png';


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
                <Nav.Link href="about" className='ms-3 menu'>About Us</Nav.Link>
                <Nav.Link href="events" className='ms-3 menu'>Events</Nav.Link>
                <Nav.Link href="training" className='ms-3 menu'>Training</Nav.Link>
                <Nav.Link href="awarnessvideo" className='ms-3 menu'>Traffic Awarness Video</Nav.Link>
                <Nav.Link href="investor" className='ms-3 menu'>Investor</Nav.Link>
                <Nav.Link href="contact" className='ms-3 menu'>Contact</Nav.Link>
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
