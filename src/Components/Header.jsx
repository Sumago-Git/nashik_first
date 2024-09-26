import React from 'react';
import '../Components/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo1 from '../Assets/Assets/Home/logo1.png';
import traffic from '../Assets/Assets/Homecounter/traffic.png';
import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';


const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="p-0">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo1} className='logo1' alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" className='ms-0' />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"

          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"><img src={logo1} className='logo1' alt="Logo" /></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="mx-4  links ">
                <Link to="about" className={` text-decoration-none text-black mx-2`}>About Us</Link>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic"  className={` text-decoration-none text-black mx-2 `}>
                    Events
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Link to="events" className={`text-decoration-none text-black  mx-3 p-0 m-0 `}>Past Events</Link>
                  <Link to="upcomingevents" className={`text-decoration-none text-black mx-3 `}> Upcoming Events</Link> 
                  </Dropdown.Menu>
                </Dropdown>
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
