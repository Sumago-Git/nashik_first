import React from 'react';
import frame5 from "../../Assets/Assets/MainBanner/Frame 5.png";
import img4 from "../../Assets/Assets/MainBanner/img4.jpg";
import { Container, Row, Col } from 'react-bootstrap';
import "../../Components/Contact.css";
import whatsapp from "../../Assets/Assets/ContactPage/whatsapp.png";
import mail from "../../Assets/Assets/ContactPage/mail.png";
import location from "../../Assets/Assets/ContactPage/location.png";
import call from "../../Assets/Assets/ContactPage/call.png";

const Contactus = () => {
  return (
    <>
      <img src={frame5} className='lghead d-none d-md-block' />
      <img src={img4} className='img4 d-block d-md-none' />
      
      <Container fluid className='contactbg pb-5 d-none d-md-block'>
        <Row>
          <Col lg={5}></Col>
          <Col lg={7} className='mt-5'>
            <h1 className='text-start mt-4 contactheadline'>Contact us</h1>
            <p className='ms-0 text-start contacttext'>
              If you’d like to talk to us about NashikFirst or need help please contact us today! 
              We’ll get you on the right track, with creativity that gets results!
            </p>
          </Col>

          <Col lg={4}></Col>

          {/* WhatsApp */}
          <Col lg={1} className='pb-lg-5 mb-lg-5'>
            <img src={whatsapp} className='icons ms-lg-5' />
            <a href="https://wa.me/917796116555" target="_blank" rel="noopener noreferrer" className='ms-lg-2 ps-lg-5 icontext text-decoration-none'>
              +91 7796116555
            </a>
          </Col>

          {/* Phone */}
          <Col lg={1} className='ms-lg-5 ps-lg-4'>
            <img src={call} className='icons ms-lg-5' />
            <a href="tel:+912532315966" className='ms-lg-4 ps-lg-5 icontext text-decoration-none'>
              +91 253 2315966
            </a>
          </Col>

          {/* Email */}
          <Col lg={1} className='ms-lg-5 ps-lg-5'>
            <img src={mail} className='icons ms-lg-5' />
            <a href="mailto:secretary@nashikfirst.com" className='ms-lg-2 ps-lg-5 icontext text-decoration-none'>
              secretary@nashikfirst.com
            </a>
          </Col>

          {/* Location */}
          <Col lg={1} className='ms-lg-5 ps-lg-5'>
            <img src={location} className='icons ms-lg-5 ps-lg-4' />
            <a href="https://www.google.com/maps?q=Survey+No.+590/591,+Motkari+Nagar,+Near+Nelson+Hospital,+Behind+Tupsakhare+Lawns,+Near+Mumbai+Naka,+Nashik." 
               target="_blank" 
               rel="noopener noreferrer" 
               className='ms-lg-5 ps-lg-5 icontext text-start text-decoration-none'>
              Survey No. 590/591, Motkari<br />Nagar, Near Nelson Hospital,<br />Behind Tupsakhare Lawns,<br />Near Mumbai Naka, Nashik.
            </a>
          </Col>
        </Row>
      </Container>

      {/* Mobile View */}
      <Container fluid className='contactbg2 pb-5 d-block d-md-none'>
        <Row>
          <Col lg={5}></Col>
          <Col lg={7} className='mt-5'>
            <h1 className='text-start mt-4 contactheadline'>Contact us</h1>
            <p className='ms-0 text-start contacttext'>
              If you’d like to talk to us about NashikFirst or need help please contact us today! 
              We’ll get you on the right track, with creativity that gets results!
            </p>
          </Col>

          <Col lg={4}></Col>

          {/* WhatsApp */}
          <Col lg={1} className='pb-lg-5 mb-lg-5'>
            <img src={whatsapp} className='icons ms-lg-5' />
            <a href="https://wa.me/917796116555" target="_blank" rel="noopener noreferrer" className='ms-lg-2 ps-lg-5 icontext text-decoration-none'>
              +91 7796116555
            </a>
          </Col>

          {/* Phone */}
          <Col lg={1} className='ms-lg-5 ps-lg-4'>
            <img src={call} className='icons ms-lg-5' />
            <a href="tel:+912532315966" className='ms-lg-4 ps-lg-5 icontext text-decoration-none'>
              +91 253 2315966
            </a>
          </Col>

          {/* Email */}
          <Col lg={1} className='ms-lg-5 ps-lg-5'>
            <img src={mail} className='icons ms-lg-5' />
            <a href="mailto:secretary@nashikfirst.com" className='ms-lg-2 ps-lg-5 icontext text-decoration-none'>
              secretary@nashikfirst.com
            </a>
          </Col>

          {/* Location */}
          <Col lg={1} className='ms-lg-5 ps-lg-5'>
            <img src={location} className='icons ms-lg-5 ps-lg-4' />
            <a href="https://www.google.com/maps?q=Survey+No.+590/591,+Motkari+Nagar,+Near+Nelson+Hospital,+Behind+Tupsakhare+Lawns,+Near+Mumbai+Naka,+Nashik." 
               target="_blank" 
               rel="noopener noreferrer" 
               className='ms-lg-5 ps-lg-5 icontext text-start text-decoration-none text-black'>
              Survey No. 590/591, Motkari<br />Nagar, Near Nelson Hospital,<br />Behind Tupsakhare Lawns,<br />Near Mumbai Naka, Nashik.
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contactus;
