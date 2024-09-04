import React from 'react';
import '../Components/Foundation.css'
import group from '../Assets/Assets/Foundation/group.png';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import one from '../../../Assets/Assets/Foundation/one.png'

const Foundation = () => {
  return (
    <>
      <Container fluid className='body text-start mt-5 pb-5'>
        <Row>
          <Col lg={7}  className='mt-5 pt-5'>
            <text className='text ms-5'>The Advantage</text>
            <text style={{  fontWeight: "800" }} className='text'><span style={{ color: "#F96945" }}> Nashik</span> Foundation</text>
            <Col>
              <p className='ms-5 mt-3 text1'> <span style={{fontWeight:"400"}}>Nashik First, an initiative of </span> Advantage Nashik <br/> 
              Foundation (ANF) <span style={{fontWeight:"400"}}>is a group of people working for</span><br/>
              improving quality life of Citizens of Nashik.</p>
            </Col>
            <Col className='ms-5 text2'>
              We are a group of people who act as a catalyst for the growth of the city <br />
              and in many cases, becoming the primary factor responsible for the growth.<br />
              Through independent assessment of different projects & various activities<br />
              happening in Nashik, we strive to act as a body of citizens which will help our<br />
              city grow systematically by complementing the efforts of the concerned<br />
              authorities and make the city we dream of.<br />
              To realize this dream and to focus our efforts on the activities which are<br />
              going to be really meaningful for the development of the city, we strives to<br />
              be a foundation which acts through a systematic methodology to achieve<br />
              specific goals.
            </Col>
          </Col>

          <Col lg={5} className='mt-4 pt-5'>
            <Container className='mt-2'>
              <img src={group} className='gruop mt-5 ' />
            </Container>
          </Col>
        </Row>


      </Container>
    </>
  )
}

export default Foundation
