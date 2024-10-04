import React from 'react';
import '../Components/Foundation.css'
import group from '../Assets/Assets/Foundation/group.png';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Foundation = () => {
  return (
    <>
      <Container fluid className='body text-start mt-lg-5 pb-lg-5'>
        <Row>
          <Col lg={6} className='mt-lg-5 pt-lg-5 mt-4 m-md-0  p-0 ms-1 '>
            <text className='fheadline ms-lg-5' style={{ fontWeight: "650", color: "#c50c1c" }}>The Advantage
              Nashik Foundation.</text>
            <Col className='mt-4'>
              <p className=' mt-lg-3 mt-5 fpara1'><span style={{ color: "#c50c1c", fontWeight: "800" }}>Nashik</span> <span style={{ color: "#F96945", fontWeight: "800" }}> First</span>, an initiative of <span style={{ fontWeight: "800" }}>Advantage Nashik</span>
                 <span style={{ fontWeight: "800" }}> Foundation (ANF) </span>is a group of people working for
                <span>improving quality life of Citizens of Nashik.</span></p>
            </Col>
            <Col className=' fpara2 mt-4'>
              We are a group of people who act as a catalyst for the growth of the city 
              and in many cases, becoming the primary factor responsible for the growth.
              Through independent assessment of different projects & various activities
              happening in Nashik, we strive to act as a body of citizens which will help our
              city grow systematically by complementing the efforts of the concerned
              authorities and make the city we dream of.
              To realize this dream and to focus our efforts on the activities which are
              going to be really meaningful for the development of the city, we strives to
              be a foundation which acts through a systematic methodology to achieve
              specific goals.
            </Col>
          </Col>

          <Col lg={5} className='mt-lg-5 pt-5 p-0 justify-content-end'>

            <img src={group} className='group img-fluid ' />

          </Col>
        </Row>


      </Container>
    </>
  )
}

export default Foundation
