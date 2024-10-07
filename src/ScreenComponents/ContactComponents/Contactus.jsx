import React from 'react';
import frame5 from "../../Assets/Assets/MainBanner/Frame 5.png";
import img4 from "../../Assets/Assets/MainBanner/img4.jpg";
import { Container, Row, Col } from 'react-bootstrap';
import "../../Components/Contact.css";
import whatsapp from "../../Assets/Assets/ContactPage/whatsapp.png";
import mail from "../../Assets/Assets/ContactPage/mail.png";
import location from "../../Assets/Assets/ContactPage/location.png";
import call from "../../Assets/Assets/ContactPage/call.png";
import captcha from "../../Assets/Assets/ContactPage/captcha.png";

const Contactus = () => {
  // Array for contact icons, text, and links
  const contactInfo = [
    {
      icon: whatsapp,
      text: "+91 7796116555",
      link: "tel:+917796116555", // Phone number click
    },
    {
      icon: mail,
      text: "secretary@nashikfirst.com",
      link: "mailto:secretary@nashikfirst.com", // Email click
    },
    {
      icon: call,
      text: "+91 2532315966",
      link: "tel:+912532315966", // Phone number click
    },
    {
      icon: location,
      text: "Survey No. 590/591, Motkari Nagar, Near Nelson Hospital, Behind Tupsakhare Lawns, Near Mumbai Naka, Nashik.",
      link: "https://maps.google.com/?q=Survey+No.+590/591,+Motkari+Nagar,+Near+Nelson+Hospital,+Nashik", // Location click
    },
  ];

  // Array for form fields
  const formFields = [
    { label: "First Name", type: "text" },
    { label: "Email", type: "email" },
    { label: "Contact", type: "text" },
    { label: "Age", type: "number" },
    { label: "Subject", type: "text" },
    { label: "Profession", type: "text" },
    { label: "Suggestions", type: "textarea" },
  ];

  return (
    <>
      <img src={frame5} className='lghead d-none d-md-block' />
      <img src={img4} className='img4 d-block d-md-none' />

      {/* DESKTOP VIEW */}
      <Container fluid className='p-0 position-relative contactbg d-none d-md-block'>
        <Row className='p-0 m-0'>
          <Col lg={5} className="d-flex justify-content-center">
            <Row>
              {contactInfo.map((contact, index) => (
                <Col xs={6} key={index} className="d-flex flex-column justify-content-center align-items-center my-3">
                  <div className="d-flex flex-column align-items-center my-2">
                    <a href={contact.link} target="_blank" rel="noopener noreferrer">
                      <img src={contact.icon} className="icons mb-2" alt="contact-icon" />
                      <p className="icontext text-center">{contact.text}</p>
                    </a>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col lg={6}>
            {/* Contact Form */}
            <div className="card-body">
              <h5 className='contacttext mt-3'>Contact us</h5>
              <Row>
                {formFields.map((field, index) => (
                  <Col lg={6} key={index}>
                    <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{field.label}</p>
                    {field.type === "textarea" ? (
                      <textarea className='contactinput p-2 m-0 mt-0 ms-lg-3 w-100' />
                    ) : (
                      <input type={field.type} className='contactinput p-2 m-0 mt-0 ms-lg-3 w-100' />
                    )}
                  </Col>
                ))}
                <Col lg={6}>
                  <img src={captcha} className='w-50 mt-lg-3' />
                  <textarea placeholder='Enter Captcha' className='contactinput p-2 m-0 mt-0 ms-lg-3 mt-lg-2 w-100' />
                </Col>
                <div className='text-center'>
                  <button className='submitbutton p-lg-3 mt-2'>Submit</button>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      {/* MOBILE VIEW */}
      <Container className='contactbg2 d-block d-md-none'>
        <Row>
          <div className="card">
            <div className="card-body">
              <h5 className='contacttext'>Contact us</h5>
              <Row>
                {formFields.map((field, index) => (
                  <Col key={index}>
                    <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{field.label}</p>
                    {field.type === "textarea" ? (
                      <textarea className='contactinput p-3 m-0 mt-0 ms-lg-3' />
                    ) : (
                      <input type={field.type} className='contactinput p-3 m-0 mt-0 ms-lg-3' />
                    )}
                  </Col>
                ))}

                <Col>
                  <img src={captcha} className='w-50 mt-lg-3 mt-3' />
                  <textarea placeholder='Enter Captcha' className='contactinput p-3 m-0 mt-0 ms-lg-3 mt-lg-2 mt-3' />
                </Col>

                <Container fluid className="justify-content-center align-items-center vh-100 ms-5">
                  <Row className="justify-content-center ms-2">
                    {contactInfo.map((contact, index) => (
                      <Col key={index} xs={7} sm={7} className="d-flex flex-column align-items-center my-3">
                        <a href={contact.link} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                          <div className="d-flex flex-column align-items-center my-2">
                            <img src={contact.icon} className="icons mb-2" alt="contact-icon" />
                            <p className="icontext text-center" style={{textDecoration:"none"}}>{contact.text}</p>
                          </div>
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Container>

                <div className='text-center'>
                  <button className='submitbutton mt-4 p-3'>Submit</button>
                </div>
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Contactus;
