import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import icons1 from '../Assets/Assets/Vission/icons1.png'
// import road2 from '../Assets/Assets/Vission/road2.png'
import '../Components/Vision.css';
import m1 from "../Assets/Assets/Vission/m1.png"
import m2 from "../Assets/Assets/Vission/m2.png";
import m3 from "../Assets/Assets/Vission/m3.png";
import divider from "../Assets/Assets/Vission/divider.png"

const Vission = () => {
  return (
    <>
      <Container fluid className='mt-lg-5 mt-5 p-0'>
        {/* <Row className='me-0'>
          <Col lg={4} className='pb-4'>
            < text className='text ms-lg-5  ps-0 '>Our Vision</text>
          </Col>
        </Row> */}

        <Container fluid className='p-0 vbg '>
          <Row className='justify-content-center p-2 m-0'>
            <Col lg={6} className='mt-lg-5 pt-lg-4 mt-5'>
              < text className='text ms-lg-5  text-white  ps-0 '>Our Vision</text>
            </Col>
            <Col lg={6} className='mt-5'>
              <img src={icons1} className='w-100 h-75 ms-lg-3  d-none d-md-block' />
            </Col>
            <Col >
              <p className='vtext text-middle pt-lg-2 mt-lg-3 mt-5' >Nashik city will be <span style={{ fontWeight: "800" }}>Clean, Green, Safe,
                Economically developed</span> & Well planned having
                world class infrastructure and well connected with
                major cities of India by 2035.</p>
            </Col>
          </Row>

        </Container>
      </Container>

      <img src={divider} className='w-100' />

      <Container fluid className='mt-lg-0 p-0 mt-3  '>
        <Container fluid className='p-0 mbg'>
          <Row className='justify-content-center p-2 m-0'>
            <Col lg={6} className='mt-lg-1 pt-lg-4 d-none d-md-block '>
              <img src={m1} className='missionimg mx-4' />
              <img src={m2} className='missionimg mx-4' />
              <img src={m3} className='missionimg mx-4' />
            </Col>

            <Col lg={6} className='mt-lg-5 mt-5'>
              < text className='text me-lg-5 pe-lg-5 me-3  text-white'>Our Mission</text>
            </Col>
            <Col className='m-lg-0 mt-5 '>
              <p className='mtext text-middle  mt-lg-5 pt-lg-5 mt-5'> <span style={{ fontWeight: "800", color: "#F96945" }}>"Nashik First"</span>
                “Nashik First“ is an active group of citizens working for improving the quality of the city and citizens of Nashik.</p>
            </Col>
          </Row>
        </Container>

      </Container>
    </>
  )
}

export default Vission
