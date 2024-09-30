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
            <img src={logo1} className='logo1 w-md-100' alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" className='ms-0' />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"

          >
            <Offcanvas.Header closeButton className='p-0'>
              <Offcanvas.Title id="offcanvasNavbarLabel"><img src={logo1} className='logo1vp-0' alt="Logo" /></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="mx-auto  links ">
                <Link to="about" className={` text-decoration-none text-black mx-3`}>About Us</Link>
                <Dropdown >
                  <Dropdown.Toggle variant=""   className={` text-decoration-none text-black mx-3 eventdrop `}>
                    Events
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Link to="events" className={`text-decoration-none text-black  `}>Past Events</Link>
                  <Link to="upcomingevents" className={`text-decoration-none text-black `}> Upcoming Events</Link> 
                  </Dropdown.Menu>
                </Dropdown>
                {/* <Link to="events" className={`text-decoration-none text-black mx-4`} >Events</Link> */}
                <Link to="training" className={`text-decoration-none text-black mx-3`} >Training</Link>
                <Link to="awarnessvideo" className={`text-decoration-none text-black mx-3`} >Traffic Awarness Video</Link>
                <Link to="investor" className={`text-decoration-none text-black mx-3`}>Annual Reports</Link>
                <Link to="annualreturns" className={`text-decoration-none text-black mx-3`}>Annual Returns</Link>
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
