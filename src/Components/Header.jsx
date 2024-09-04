import React from 'react'
import '../Components/Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../Assets/Assets/Home/logo1.png';




const Header = () => {
  
  return (
    <>
      <Navbar expand="lg" className="p-0">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo1} className='logo1' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto links">
              <Nav.Link href="about" className='ms-3 menu '>About Us</Nav.Link>
              <Nav.Link href="#link" className='ms-3 menu'>Events</Nav.Link>
              <Nav.Link href="#home" className='ms-3 menu'>Training</Nav.Link>
              <Nav.Link href="#link" className='ms-3 menu'>Traffic Awarness video</Nav.Link>
              <Nav.Link href="#link" className='ms-3 menu'>Investor</Nav.Link>
              <Nav.Link href="#home" className='ms-3 menu'>Contact</Nav.Link>
             
            </Nav>
            {/* <img src={logo1} className='logo2 ' /> */}
          </Navbar.Collapse>
          
        </Container>
        <img src={logo1} className='logo2'/>
      </Navbar>

    </>
  );
}

export default Header