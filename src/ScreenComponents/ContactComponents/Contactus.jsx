import React from 'react';
import frame5 from "../../Assets/Assets/MainBanner/Frame 5.png";
import img4 from "../../Assets/Assets/MainBanner/img4.jpg";
import { Container, Row, Col } from 'react-bootstrap';
import "../../Components/Contact.css";
import whatsapp from "../../Assets/Assets/ContactPage/whatsapp.png";
import mail from "../../Assets/Assets/ContactPage/mail.png";
import location from "../../Assets/Assets/ContactPage/location.png";
import call from "../../Assets/Assets/ContactPage/call.png";

// Array of contact details
const contactDetails = [
  {
    icon: whatsapp,
    href: "https://wa.me/917796116555",
    text: "+91 7796116555",
    target: "_blank"
  },
  {
    icon: call,
    href: "tel:+912532315966",
    text: "+91 253 2315966",
    target: ""
  },
  {
    icon: mail,
    href: "mailto:secretary@nashikfirst.com",
    text: "secretary@nashikfirst.com",
    target: ""
  },
  {
    icon: location,
    href: "https://www.google.com/maps?q=Survey+No.+590/591,+Motkari+Nagar,+Near+Nelson+Hospital,+Behind+Tupsakhare+Lawns,+Near+Mumbai+Naka,+Nashik.",
    text: "Survey No. 590/591, Motkari\nNagar, Near Nelson Hospital,\nBehind Tupsakhare Lawns,\nNear Mumbai Naka, Nashik.",
    target: "_blank"
  }
];

const Contactus = () => {
  return (
    <>
      <img src={frame5} className='lghead d-none d-md-block' />
      <img src={img4} className='img4 d-block d-md-none' />

      <Container fluid className='contactbg pb-5 d-none d-md-block'>
        <Row className="align-items-center justify-content-center">
          {contactDetails.map((contact, index) => (
           <Col lg={7}>
             <Col lg={12} key={index} className="d-flex flex-column align-items-center text-center">
             <div  className="d-flex flex-column align-items-center text-center">
             <img src={contact.icon} className="icons mb-2" />
              <a href={contact.href} target={contact.target} rel="noopener noreferrer" className="icontext text-decoration-none mt-2">
                {contact.text.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </a>
             </div>
            </Col>
           
           </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Contactus;
