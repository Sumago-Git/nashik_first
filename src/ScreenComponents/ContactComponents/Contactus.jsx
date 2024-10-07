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
  return (
    <>
      <img src={frame5} className='lghead d-none d-md-block' />
      <img src={img4} className='img4 d-block d-md-none' />

      <Container fluid className='p-0 position-relative contactbg d-none d-md-block '>
        <Row className='p-0 m-0 '>
          <Col lg={5} className="justify-content-center ">
            <Container fluid className="justify-content-center align-items-center vh-100 ms-5 mt-5 pt-5">
              <Row className="justify-content-center">
                {/* WhatsApp Icon and Text */}
                <Col lg={6} className="d-flex flex-column align-items-center my-3 mt-5">
                  <div className="d-flex flex-column align-items-center">
                    <img src={whatsapp} className="icons mb-2" alt="WhatsApp" />
                    <p className="icontext">
                      <a href="tel:+91 7796116555" style={{ textDecoration: 'none', color: 'inherit' }}>
                        +91 7796116555
                      </a>
                    </p>
                  </div>
                </Col>

                {/* Phone Icon and Text */}
                <Col lg={6} className="d-flex flex-column align-items-center my-3 mt-5">
                  <div className="d-flex flex-column align-items-center">
                    <img src={call} className="icons mb-2" alt="Phone" />
                    <p className="icontext">
                      <a href="tel:+91 2532315966" style={{ textDecoration: 'none', color: 'inherit' }}>
                        +91 2532315966
                      </a>
                    </p>
                  </div>
                </Col>

                {/* Email Icon and Text */}
                <Col lg={6} className="d-flex flex-column align-items-center my-3">
                  <div className="d-flex flex-column align-items-center">
                    <img src={mail} className="icons mb-2" alt="Email" />
                    <p className="icontext">
                      <a href="mailto:secretary@nashikfirst.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                        secretary@nashikfirst.com
                      </a>
                    </p>
                  </div>
                </Col>

                {/* Location Icon and Text */}
                <Col lg={6} className="d-flex flex-column align-items-center my-3">
                  <div className="d-flex flex-column align-items-center">
                    <img src={location} className="icons mb-2" alt="Location" />
                    <p className="icontext text-center">
                      <a href="https://www.google.com/maps?q=Survey+No.+590/591,+Motkari+Nagar,+Near+Nelson+Hospital,+Behind+Tupsakhare+Lawns,+Near+Mumbai+Naka,+Nashik" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Survey No. 590/591, Motkari<br />
                        Nagar, Near Nelson Hospital,<br />
                        Behind Tupsakhare Lawns,<br />
                        Near Mumbai Naka, Nashik.
                      </a>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>

          </Col>
          <Col lg={6}>
            <div className="card-body">
              <h5 className="card-title contacttext mt-3">Contact us</h5>
              <Row>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"First Name"}</p>
                  <input name='' className='contactinput p-2  m-0 mt-0 ms-lg-3 w-100' />
                </Col>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Email"}</p>
                  <input name='' className='contactinput p-2  m-0 mt-0 ms-lg-3  w-100' />
                </Col>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Contact"}</p>
                  <input name='' className='contactinput p-2  m-0 mt-0 ms-lg-3  w-100' />
                </Col>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Age"}</p>
                  <input name='' className='contactinput p-2  m-0 mt-0 ms-lg-3  w-100' />
                </Col>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Subject"}</p>
                  <input name='' className='contactinput p-2  m-0 mt-0 ms-lg-3  w-100' />
                </Col>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Profession"}</p>
                  <input name='' className='contactinput p-2  m-0 mt-0 ms-lg-3  w-100' />
                </Col>
                <Col lg={12}>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Suggestions"}</p>
                  <textarea name='' className='contactinput p-2  m-0 mt-0 ms-lg-3  w-100' />
                </Col>
                <Col lg={4}>
                  <img src={captcha} className='w-50 mt-lg-3' />
                  <input name='' placeholder='Enter Captcha' className='contactinput p-2  m-0 mt-0 ms-lg-3 mt-lg-2  w-100' />
                </Col>

                <div className='text-center'>
                  <button className='submitbutton p-lg-2 mt-2'>
                    Submit
                  </button>
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
              <h5 className="card-title contacttext">Contact us</h5>
              <Row>
                <Col>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"First Name"}</p>
                  <input name='' className='contactinput p-3  m-0 mt-0 ms-lg-3' />
                </Col>
                <Col>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Email"}</p>
                  <input name='' className='contactinput p-3  m-0 mt-0 ms-lg-3' />
                </Col>
                <Col>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Contact"}</p>
                  <input name='' className='contactinput p-3  m-0 mt-0 ms-lg-3' />
                </Col>
                <Col>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Age"}</p>
                  <input name='' className='contactinput p-3  m-0 mt-0 ms-lg-3' />
                </Col>
                <Col>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Subject"}</p>
                  <input name='' className='contactinput p-3  m-0 mt-0 ms-lg-3' />
                </Col>
                <Col>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Profession"}</p>
                  <input name='' className='contactinput p-3  m-0 mt-0 ms-lg-3' />
                </Col>
                <Col>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Suggestions"}</p>
                  <textarea name='' className='contactinput p-3  m-0 mt-0 ms-lg-3' />
                </Col>
                <Col>
                  <img src={captcha} className='w-50 mt-lg-3 mt-3' />
                  <textarea name='' placeholder='Enter Captcha' className='contactinput p-3  m-0 mt-0 ms-lg-3 mt-lg-2 mt-3' />
                </Col>
                <div className='text-center '>
                  <button className='submitbutton  mt-4 p-3'>
                    Submit
                  </button>
                </div>
                <Container fluid className="justify-content-center align-items-center vh-100 ms-5">
                  <Row className="justify-content-center">
                    {/* WhatsApp Icon and Text */}
                    <Col lg={6} className="d-flex flex-column align-items-center my-3">
                      <div className="d-flex flex-column align-items-center">
                        <img src={whatsapp} className="icons mb-2" alt="WhatsApp" />
                        <p className="icontext">
                          <a href="tel:+91 7796116555" style={{ textDecoration: 'none', color: 'inherit' }}>
                            +91 7796116555
                          </a>
                        </p>
                      </div>
                    </Col>

                    {/* Phone Icon and Text */}
                    <Col lg={6} className="d-flex flex-column align-items-center my-3">
                      <div className="d-flex flex-column align-items-center">
                        <img src={call} className="icons mb-2" alt="Phone" />
                        <p className="icontext">
                          <a href="tel:+912532315966" style={{ textDecoration: 'none', color: 'inherit' }}>
                            +91 2532315966
                          </a>
                        </p>
                      </div>
                    </Col>

                    {/* Email Icon and Text */}
                    <Col lg={6} className="d-flex flex-column align-items-center my-3">
                      <div className="d-flex flex-column align-items-center">
                        <img src={mail} className="icons mb-2" alt="Email" />
                        <p className="icontext">
                          <a href="mailto:secretary@nashikfirst.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                            secretary@nashikfirst.com
                          </a>
                        </p>
                      </div>
                    </Col>

                    {/* Location Icon and Text */}
                    <Col lg={6} className="d-flex flex-column align-items-center my-3">
                      <div className="d-flex flex-column align-items-center">
                        <img src={location} className="icons mb-2" alt="Location" />
                        <p className="icontext text-center">
                          <a href="https://www.google.com/maps?q=Survey+No.+590/591,+Motkari+Nagar,+Near+Nelson+Hospital,+Behind+Tupsakhare+Lawns,+Near+Mumbai+Naka,+Nashik" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Survey No. 590/591, Motkari<br />
                            Nagar, Near Nelson Hospital,<br />
                            Behind Tupsakhare Lawns,<br />
                            Near Mumbai Naka, Nashik.
                          </a>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>

              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Contactus;
