import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import V from '../Assets/Assets/Vission/V.png'
import M from '../Assets/Assets/Vission/M.jpg'
import '../Components/Vision.css';

const Vission = () => {
  return (
    <>
      <Container fluid className='mt-5 p-0'>
        <Row>
          <Col lg={4}>
            < text className='text ms-5 ps-5'>Our Vision</text>
          </Col>
        </Row>

        <Container fluid className='p-0 '>
          <img src={V} className='v mt-4' />
          <Container fluid>
            <p className='vtext text-start'>Nashik city will be <span style={{fontWeight:"800"}}>Clean, Green, Safe, <br />
            Economically</span> developed & Well planned <br />
              having world class infrastructure and well<br />
              connected with major cities of India by 2035.</p>
          </Container>
        </Container>
      </Container>

      <Container fluid className='mt-5 p-0'>
        <Row>
          <Col lg={12} className='text-end pe-5'>
            < text className='text me-5 pe-5'>Our Mission</text>
          </Col>
        </Row>

        <Container fluid className='p-0 '>
          <img src={M} className='m mt-4' />
          <Container fluid>
            <p className='mtext text-start'> <span style={{fontWeight:"800"}}>"Nashik First"</span> is a proactive group of citizens<br />
              dedicated to improving Nashik's quality of life. For<br />
              years, Nashik has seen discussions on rapid <br />
              development, but little action. Recognizing this, Nashik<br />
              First, through the Advantage Nashik Foundation (ANF), <br />
              has been working since 2009 to change mindsets and <br />
              support systematic city growth. By independently<br />
              assessing projects and collaborating with authorities,<br />
              ANF strives to make Nashik a city that meets the <br />
              aspirations of its citizens.</p>
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default Vission
