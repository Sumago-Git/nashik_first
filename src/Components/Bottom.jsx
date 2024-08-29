import React from 'react'
import '../Components/Header.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
import phone from '../Assets/Assets/Bottom/phone.png'
import email from '../Assets/Assets/Bottom/email.png'
import location from '../Assets/Assets/Bottom/location.png'
import Ellipse from '../Assets/Assets/Bottom/Ellipse 24.png'


const Bottom = () => {
    return (
        <>
            <section className='bg_img5'>
                <Container >
                    <Row className='loc'>
                        <Col lg={6} className='mt-5 mx-0'>
                            <h2 className='text-start'>LOCATION</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14998.042739114164!2d73.77339834282328!3d19.987070168042514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb1abfce8b67%3A0x31f677d2506ffcb7!2sMumbai%20Naka%2C%20Renuka%20Nagar%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1724840869222!5m2!1sen!2sin" className='d-none d-md-block mt-4' style={{ width: '630px', height: '250px', loading: "lazy", referrerpolicy: "", borderRadius: "9px" }}></iframe>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14998.042739114164!2d73.77339834282328!3d19.987070168042514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb1abfce8b67%3A0x31f677d2506ffcb7!2sMumbai%20Naka%2C%20Renuka%20Nagar%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1724840869222!5m2!1sen!2sin" className='d-block d-md-none' style={{ width: '100%', height: '250px', loading: "lazy", referrerpolicy: "", borderRadius: "9px" }}></iframe>
                        </Col>
                        <Col lg={2} className='mt-5 ms-5'> <h2 className='text-start'>QUICK LINKS</h2>
                          <Row>
                            <Col sm={1} className='mt-4'>
                            <img src={Ellipse}/>
                            </Col>
                            <Col sm={8} className='mt-4'> <h5 className='text-start'> Home</h5></Col>
                          </Row>
                          <Row>
                            <Col sm={1} className='mt-3'>
                            <img src={Ellipse}/>
                            </Col>
                            <Col sm={10} className='mt-3'> <h5 className='text-start'> About us</h5></Col>
                          </Row>
                          <Row>
                            <Col sm={1} className='mt-3'>
                            <img src={Ellipse}/>
                            </Col>
                            <Col sm={10} className='mt-3'> <h5 className='text-start'> Events</h5></Col>
                          </Row>
                          <Row>
                            <Col sm={1} className='mt-3'>
                            <img src={Ellipse}/>
                            </Col>
                            <Col sm={10} className='mt-3'> <h5 className='text-start'> Training</h5></Col>
                          </Row>
                          <Row>
                            <Col sm={1} className='mt-3'>
                            <img src={Ellipse}/>
                            </Col>
                            <Col sm={10} className='mt-3'> <h5 className='text-start'> Traffic Awareness Video</h5></Col>
                          </Row>
                        </Col>
                        <Col lg={3} className='mt-5 ms-5'> <h2>CONTACT DETAILS</h2>
                            <Row>
                                <Col lg={2} className='mt-5'>
                                    <img src={phone} />
                                </Col>
                                <Col lg={10} className='mt-5 p-3 '>
                                    <h6 className='text-start'>+91 253 2315966</h6>
                                </Col>

                            </Row>
                            <Row>
                                <Col lg={2} className='mt-3'>
                                    <img src={email} />
                                </Col>
                                <Col lg={10} className='mt-3 p-3'>
                                    <h6 className='text-start'>&nbsp;secretary@nashikfirst.com</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={2} className='mt-3'>
                                    <img src={location} />
                                </Col>
                                <Col lg={10} className='mt-3 p-3'>
                                    <h6 className='text-start'>Survey No. 590/591, Motkari Nagar, Near Nelson Hospital, Behind Tupsakhare Lawns, Near Mumbai Naka, Nashik.</h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>


        </>
    )
}

export default Bottom
