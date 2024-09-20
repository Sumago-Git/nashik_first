import React from 'react'
import lghead from "../../Assets/Assets/MainBanner/lghead.png"
import img4 from "../../Assets/Assets/MainBanner/img4.jpg"
import { Container, Row, Col } from 'react-bootstrap'
import "../../Components/Contact.css"
import whatsapp from "../../Assets/Assets/ContactPage/whatsapp.png"
import mail from "../../Assets/Assets/ContactPage/mail.png"
import location from "../../Assets/Assets/ContactPage/location.png"
import call from "../../Assets/Assets/ContactPage/call.png"

const Contactus = () => {
    return (
        <>
            <img src={lghead} className='lghead d-none d-md-block' />
            <img src={img4} className='img4 d-block d-md-none' />
            <Container fluid className=' contactbg pb-5 '>
                <Row>
                    <Col lg={5}></Col>
                    <Col lg={7} className='mt-5'>
                        <h1 className='text-start mt-4 contactheadline'>Contact us</h1>
                        <p className='ms-0 text-start contacttext'>If you’d like to talk to us about NashikFirst or need help please contact us today! We’ll get you on the<br />
                            right track, with creativity that gets results!</p>
                    </Col>
                    <Col lg={4}></Col>
                    <Col lg={1} className=' pb-lg-5 mb-lg-5'>
                        <img src={whatsapp} className='icons ms-lg-5 ' />
                        <text className='ms-lg-2 ps-lg-5 icontext'>+91000000000</text>
                    </Col>
                    <Col lg={1} className='ms-lg-5 ps-lg-4'>
                        <img src={call} className='icons ms-lg-5' />
                        <text className='ms-lg-4 ps-lg-5 icontext'>+91 253 2315966</text>
                    </Col>
                    <Col lg={1} className='ms-lg-5 ps-lg-5'>
                        <img src={mail} className='icons ms-lg-5' />
                        <text className='ms-lg-2 ps-lg-5 icontext'>secretary@nashikfirst.com</text>
                    </Col>
                    <Col lg={1} className='ms-lg-5 ps-lg-5 '>
                        <img src={location} className='icons ms-lg-5 ps-lg-4' />
                        <text className='ms-lg-5 ps-lg-5 icontext text-start'>Survey No. 590/591, Motkari<br/> Nagar, Near Nelson Hospital, <br/>Behind Tupsakhare Lawns, <br/>Near Mumbai Naka, Nashik.</text>
                    </Col>
                </Row>
            </Container>
            

        </>
    )
}

export default Contactus
