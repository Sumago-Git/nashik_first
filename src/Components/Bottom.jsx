import React from 'react';
import '../Components/Header.css';
import { Container, Row, Col } from 'react-bootstrap';
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
  const quickLinks = ['Home', 'About us', 'Events', 'Training', 'Traffic Awareness Video'];

  const contactDetails = [
    { icon: whatsapp, text: '+91 0000000000' },
    { icon: phone, text: '+91 253 2315966' },
    { icon: email, text: 'secretary@nashikfirst.com' },
    { icon: location, text: 'Survey No. 590/591, Motkari Nagar, Near Nelson Hospital, Behind Tupsakhare Lawns, Near Mumbai Naka, Nashik.', isAddress: true },
  ];

  const socialIcons = [facebook, insta, email2, whatsapp2];

  return (
    <>
      <section className='bg_img5'>
        <Container fluid>
          <Row className='loc'>
            <Col lg={5} className='mt-5'>
              <h2 className='text-start'>LOCATION</h2>
              {/* Map iframe for desktop */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14998.042739114164!2d73.77339834282328!3d19.987070168042514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb1abfce8b67%3A0x31f677d2506ffcb7!2sMumbai%20Naka%2C%20Renuka%20Nagar%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1724840869222!5m2!1sen!2sin"
                className='d-none d-md-block mt-4'
                style={{ width: '100%', height: '230px', borderRadius: '9px' }}
                loading="lazy"
              ></iframe>
              {/* Map iframe for mobile */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14998.042739114164!2d73.77339834282328!3d19.987070168042514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb1abfce8b67%3A0x31f677d2506ffcb7!2sMumbai%20Naka%2C%20Renuka%20Nagar%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1724840869222!5m2!1sen!2sin"
                className='d-block d-md-none mt-3'
                style={{ width: '100%', height: '250px', borderRadius: '9px' }}
                loading="lazy"
              ></iframe>
            </Col>

            <Col sm={6} lg={3} className='mt-5'>
              <h4 className='text-start'>QUICK LINKS</h4>
              {quickLinks.map((link, index) => (
                <Row key={index}>
                  <Col sm={1} xs={1} className='mt-3'>
                    <img src={Ellipse} alt="Bullet" style={{ width: '20px' }} />
                  </Col>
                  <Col sm={10} xs={10} className='mt-3'>
                    <h4 className='text-start'>{link}</h4>
                  </Col>
                </Row>
              ))}
            </Col>

            <Col sm={12} lg={4} className="mt-5">
              <h4 className='text-start'>CONTACT DETAILS</h4>
              {contactDetails.map((detail, index) => (
                <Row className={`align-items-center mt-3 ${detail.isAddress ? 'pt-2' : ''}`} key={index}>
                  <Col lg={2} xs={2}>
                    <img src={detail.icon} alt="Icon" className={`footericon ${detail.isAddress ? 'mb-5' : ''}`} />
                  </Col>
                  <Col lg={10} xs={10}>
                    {detail.isAddress ? <p className="text-start" style={{fontSize:"20px", fontWeight:"600"}}>{detail.text}</p> : <h4 className="text-start">{detail.text}</h4>}
                  </Col>
                </Row>
              ))}

              <Row className="mt-3">
                <Col lg={4} className='text-start p-0'>
                  <h4 className=' mt-4'>Follow Us On</h4>
                </Col>
                {socialIcons.map((icon, index) => (
                  <Col lg={2} xs={2} key={index} style={{width:"70px"}}>
                    <img src={icon} className='followicon' alt="Social Icon"  />
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
