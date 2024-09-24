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
        <Row className='me-0'>
          <Col lg={4} className='pb-4'>
            < text className='text ms-lg-5  ps-0 '>Our Vision</text>
          </Col>
        </Row>

        <Container fluid className='p-0 vbg '>
          <Row className='justify-content-center p-2 m-0'>
            <Col lg={6} className='mt-4'>
              <img src={icons1} className='w-100 h-75 ms-lg-4  mt-lg-5 pt-lg-4 mt-4' />
            </Col>
            <Col lg={6}>
              <p className='vtext text-start mt-lg-5 pt-lg-5 ps-lg-4 ms-lg-5 mt-3 pt-5' >Nashik city will be <span style={{ fontWeight: "800" }}>Clean, Green, Safe, <br />
                Economically</span> developed & Well planned having <br />
                world class infrastructure and well connected with <br />
                major cities of India by 2035.</p>
            </Col>
          </Row>

        </Container>
      </Container>

      <img src={divider} className='w-100'/>

      <Container fluid className='mt-lg-0 p-0 mt-3 '>
        <Container fluid className='p-0 mbg'>
          <Row className='justify-content-center p-0 m-0'>
            <Col lg={7}>
              <p className='mtext text-start mt-5 ms-lg-5 pt-2 ps-2'> <span style={{ fontWeight: "800" }}>"Nashik First"</span> is a proactive group of citizens
                dedicated<br/> to improving Nashik's quality of life. For
                years, Nashik has <br/>seen discussions on rapid
                development, but little action.<br/> Recognizing this, Nashik
                First, through the Advantage<br/> Nashik Foundation (ANF),
                has been working since 2009 to <br/>change mindsets and 
                support systematic city growth. By<br/> independently
                assessing projects and collaborating with <br/>authorities,
                ANF strives to make Nashik a city that meets<br/> the 
                aspirations of its citizens.</p>
            </Col>
            <Col lg={5} className='mt-lg-5 pt-lg-5 mt-0 '>
            <img src={m1} className='missionimg'/>
            <img src={m2} className='missionimg'/>
            <img src={m3} className='missionimg'/>
            </Col>
          </Row>
        </Container>
        <Row className='me-0'>
          <Col lg={12} className='text-end pe-5 pb-4'>
            < text className='text me-lg-5 pe-lg-5 me-3'>Our Mission</text>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Vission
