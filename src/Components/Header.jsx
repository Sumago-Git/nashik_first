import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import useLocation
import '../Components/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo1 from '../Assets/Assets/Home/logo1.png';
import traffic from '../Assets/Assets/Homecounter/traffic.png';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const handleClose = () => {
    setShowOffcanvas(false);
    window.scrollTo(0, 0);
  };

  const handleShow = () => setShowOffcanvas(true);

  const handleDropdownMouseEnter = () => setDropdownOpen(true);
  const handleDropdownMouseLeave = () => setDropdownOpen(false);

  // Function to check if a route is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Navbar expand="lg" className="p-0">
        <Container fluid className="m-lg-0">
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
                <Navbar.Brand href="/">
                  <img src={logo1} className="logo1 w-sm-75 w-md-75 w-100 p-0" alt="Logo" />
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="mx-auto mt-lg-4">
                <Nav.Link
                  to="/about"
                  as={Link}
                  onClick={handleClose}
                  className={`mx-xl-1 mx-xxl-2 text-black navMenu ${isActive('/about') ? 'active' : ''}`}
                >
                  About Us
                </Nav.Link>

                {/* Hoverable Dropdown */}
                <NavDropdown
                  title="Events"
                  id="basic-nav-dropdown"
                  className="event-dropdown mx-xl-1 mx-xxl-2"
                  show={dropdownOpen} // Control the dropdown open state
                  onMouseEnter={handleDropdownMouseEnter} // Show on hover
                  onMouseLeave={handleDropdownMouseLeave} // Hide on leave
                >
                  <NavDropdown.Item
                    to="/events"
                    as={Link}
                    onClick={handleClose}
                    className={`text-center text-black events ${isActive('/events') ? 'active' : ''}`}
                  >
                    Past Events
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    to="/upcomingevents"
                    as={Link}
                    onClick={handleClose}
                    className={`text-center text-black events ${isActive('/upcomingevents') ? 'active' : ''}`}
                  >
                    Upcoming Events
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  to="/training"
                  as={Link}
                  onClick={handleClose}
                  className={`mx-xl-1 mx-xxl-2 text-black navMenu ${isActive('/training') ? 'active' : ''}`}
                >
                  Training
                </Nav.Link>
                <Nav.Link
                  to="/awarnessvideo"
                  as={Link}
                  onClick={handleClose}
                  className={`mx-xl-1 mx-xxl-2 text-black navMenu ${isActive('/awarnessvideo') ? 'active' : ''}`}
                >
                  Videos
                </Nav.Link>
                <Nav.Link
                  to="/news"
                  as={Link}
                  onClick={handleClose}
                  className={`mx-xl-1 mx-xxl-2 text-black navMenu ${isActive('/news') ? 'active' : ''}`}
                >
                  News
                </Nav.Link>
                <Nav.Link
                  to="/annualreport"
                  as={Link}
                  onClick={handleClose}
                  className={`mx-xl-1 mx-xxl-2 text-black navMenu ${isActive('/annualreport') ? 'active' : ''}`}
                >
                  Annual Reports
                </Nav.Link>
                <Nav.Link
                  to="/annualreturn"
                  as={Link}
                  onClick={handleClose}
                  className={`mx-xl-1 mx-xxl-2 text-black navMenu ${isActive('/annualreturn') ? 'active' : ''}`}
                >
                  Annual Returns
                </Nav.Link>
                <Nav.Link
                  to="/contact"
                  as={Link}
                  onClick={handleClose}
                  className={`mx-xl-1 mx-xxl-2 text-black navMenu ${isActive('/contact') ? 'active' : ''}`}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
        <img src={traffic} className="logo2 d-none d-lg-block " alt="Logo" />
      </Navbar>

      {/* Add some styles to highlight the active link */}
      <style jsx>{`
        .active {
          color: #f57e39 !important;  /* Set the color to #f57e39 */
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Header;
