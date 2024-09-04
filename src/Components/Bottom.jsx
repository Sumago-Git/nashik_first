import React from 'react';
import '../Components/Header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import phone from '../Assets/Assets/Bottom/phone.png';
import email from '../Assets/Assets/Bottom/email.png';
import location from '../Assets/Assets/Bottom/location.png';
import Ellipse from '../Assets/Assets/Bottom/Ellipse 24.png';
import whatsapp from '../Assets/Assets/Bottom/whatsapp.png';
import facebook from '../Assets/Assets/Bottom/facebook.png';
import insta from '../Assets/Assets/Bottom/insta.png';
import email2 from '../Assets/Assets/Bottom/email2.png';
import whatsapp2 from '../Assets/Assets/Bottom/whatsapp2.png';

const Bottom = () => {
  // Array for Quick Links
  const quickLinks = ['Home', 'About us', 'Events', 'Training', 'Traffic Awareness Video'];

  // Array for Contact Details
  const contactDetails = [
    { icon: whatsapp, text: '+91 0000000000' },
    { icon: phone, text: '+91 253 2315966' },
    { icon: email, text: 'secretary@nashikfirst.com' },
    { icon: location, text: 'Survey No. 590/591, Motkari Nagar, Near Nelson Hospital, Behind Tupsakhare Lawns, Near Mumbai Naka, Nashik.', isAddress: true },
  ];

  // Array for Social Media Icons
  const socialIcons = [facebook, insta, email2, whatsapp2];

  return (
    <>
      <section className='bg_img5'>
        <Container fluid>
          <Row className='loc'>
            {/* Location Section */}
            <Col lg={5} className='mt-5 ms-5'>
              <h2 className='text-start'>LOCATION</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14998.042739114164!2d73.77339834282328!3d19.987070168042514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb1abfce8b67%3A0x31f677d2506ffcb7!2sMumbai%20Naka%2C%20Renuka%20Nagar%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1724840869222!5m2!1sen!2sin"
                className='d-none d-md-block mt-4'
                style={{ width: '450px', height: '230px', loading: "lazy", referrerpolicy: "", borderRadius: "9px" }}
              ></iframe>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14998.042739114164!2d73.77339834282328!3d19.987070168042514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb1abfce8b67%3A0x31f677d2506ffcb7!2sMumbai%20Naka%2C%20Renuka%20Nagar%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1724840869222!5m2!1sen!2sin"
                className='d-block d-md-none'
                style={{ width: '100%', height: '250px', loading: "lazy", referrerpolicy: "", borderRadius: "9px" }}
              ></iframe>
            </Col>

            {/* Quick Links Section */}
            <Col sm={2} className='mt-5 ms-1'>
              <h4 className='text-start'>QUICK LINKS</h4>
              {quickLinks.map((link, index) => (
                <Row key={index}>
                  <Col sm={1} className='mt-3'>
                    <img src={Ellipse} alt="Bullet" />
                  </Col>
                  <Col sm={10} className='mt-3'>
                    <h6 className='text-start'>{link}</h6>
                  </Col>
                </Row>
              ))}
            </Col>

            {/* Contact Details Section */}
            <Col lg={3} className="mt-5 ms-4 text-start">
              <h4>CONTACT DETAILS</h4>
              {contactDetails.map((detail, index) => (
                <Row className={`align-items-center mt-3 ${detail.isAddress ? 'pt-2 ' : ''}`} key={index}>
                  <Col lg={2}>
                    <img src={detail.icon} alt="Icon" className={`footericon ${detail.isAddress ? 'mb-5  ' : ''}`} />
                  </Col>
                  <Col lg={detail.isAddress ? 8 : 10} className={detail.isAddress ? '' : 'p-0 mt-2'}>
                    {detail.isAddress ? <p className="text-start">{detail.text}</p> : <h6 className="text-start">{detail.text}</h6>}
                  </Col>
                </Row>
              ))}

              {/* Social Media Icons */}
              <Row className="mt-1">
                <Col lg={4}>
                  <p className='text-start'>FollowUs On</p>
                </Col>
                {socialIcons.map((icon, index) => (
                  <Col lg={2} key={index}>
                    <img src={icon} className='footericon' alt="Social Icon" />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Bottom;
