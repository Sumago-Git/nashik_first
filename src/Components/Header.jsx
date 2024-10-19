import React, { useState } from 'react';
import '../Components/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo1 from '../Assets/Assets/Home/logo1.png';
import traffic from '../Assets/Assets/Homecounter/traffic.png';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClose = () => {
    setShowOffcanvas(false);
    window.scrollTo(0, 0);
  };

  const handleShow = () => setShowOffcanvas(true);

  const handleDropdownMouseEnter = () => setDropdownOpen(true);
  const handleDropdownMouseLeave = () => setDropdownOpen(false);

  return (
    <>
      <Navbar expand="lg" className="p-0">
        <Container fluid className='m-lg-0'>
          <Navbar.Brand href="/">
            <img src={logo1} className="logo1 w-sm-75 w-md-75 w-100 p-0" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" className="ms-0" onClick={handleShow} />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            show={showOffcanvas}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton className="p-0">
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img src={logo1} className="logo1 p-0" alt="Logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="mx-auto mt-lg-4 ">
                <Nav.Link to="about" as={Link} onClick={handleClose} className=" mx-xl-1 mx-xxl-2 text-black navMenu">
                  About Us
                </Nav.Link>
                
                {/* Hoverable Dropdown */}
                <NavDropdown
                  title="Events"
                  id="basic-nav-dropdown"
                  className="event-dropdown mx-xl-1 mx-xxl-2 "
                  show={dropdownOpen} // Control the dropdown open state
                  onMouseEnter={handleDropdownMouseEnter} // Show on hover
                  onMouseLeave={handleDropdownMouseLeave} // Hide on leave
                >
                  <NavDropdown.Item to="events" as={Link} onClick={handleClose} className="text-center text-black events">
                    Past Events
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    to="upcomingevents"
                    as={Link}
                    onClick={handleClose}
                    className="text-center text-black events"
                  >
                    Upcoming Events
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link to="training" as={Link} onClick={handleClose} className=" mx-xl-1 mx-xxl-2  text-black navMenu">
                  Training
                </Nav.Link>
                <Nav.Link to="awarnessvideo" as={Link} onClick={handleClose} className=" mx-xl-1 mx-xxl-2  text-black navMenu">
                 Video
                </Nav.Link>
                <Nav.Link to="news" as={Link} onClick={handleClose} className="  mx-xl-1 mx-xxl-2 text-black navMenu">
                  News
                </Nav.Link>
                <Nav.Link to="annualreport" as={Link} onClick={handleClose} className=" mx-xl-1 mx-xxl-2  text-black navMenu">
                  Annual Reports
                </Nav.Link>
                <Nav.Link to="annualreturn" as={Link} onClick={handleClose} className=" mx-xl-1 mx-xxl-2  text-black navMenu">
                  Annual Returns
                </Nav.Link>
                <Nav.Link to="contact" as={Link} onClick={handleClose} className=" mx-xl-1 mx-xxl-2 text-black navMenu">
                  Contact
                </Nav.Link>
               
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
        <img src={traffic} className="logo2 d-none d-md-block " alt="Logo" />
      </Navbar>
    </>
  );
};

export default Header;
