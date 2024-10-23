import React from 'react';
import '../Components/Foundation.css'
import group from '../Assets/Assets/Foundation/group.png';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Foundation = () => {
  return (
    <>
      <Container fluid className='body text-start py-5  '>
        <Row className='d-flex align-items-center'>
          <Col md={7} className=''>
            <text className='Fheadline ms-lg-5 ' style={{ fontWeight: "650", color: "#c50c1c", lineHeight: "2.5" }}>The Advantage
              Nashik Foundation.</text>
            <p className='fpara1 pt-3 pt-md-0'><span style={{ color: "#c50c1c", fontWeight: "800" }}>Nashik</span> <span style={{ color: "#F96945", fontWeight: "800" }}> First</span>, an initiative of <span style={{ fontWeight: "800" }}>Advantage Nashik</span>
              <span style={{ fontWeight: "800" }}> Foundation (ANF) </span>is a group of people working for
              <span>improving quality of life of Citizens of Nashik.</span></p>
            <div className=' fpara2 '>
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
            </div>
          </Col>

          <Col md={5} sm={12} className='p-0 justify-content-end'>

            <img src={group} className='group img-fluid flex-end mx-xxl-auto p-3 p-md-0' />

          </Col>
        </Row>


      </Container>
    </>
  )
}

export default Foundation
