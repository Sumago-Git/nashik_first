import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import road2 from '../Assets/Assets/Vission/road2.png'
import '../Components/Vision.css';
import v1 from "../Assets/Assets/Vission/v1.png"
import v2 from "../Assets/Assets/Vission/v2.png"
import v3 from "../Assets/Assets/Vission/v3.png"
import v4 from "../Assets/Assets/Vission/v4.png"
import m1 from "../Assets/Assets/Vission/m1.png"
import m2 from "../Assets/Assets/Vission/m2.png";
import m3 from "../Assets/Assets/Vission/m3.png";
import divider from "../Assets/Assets/Vission/divider.png"

const Vission = () => {


  return (
    <>
      <Container fluid className='mt-md-5 mt-5 p-0'>
        {/* <Row className='me-0'>
          <Col md={4} className='pb-4'>
            < text className='text ms-md-5  ps-0 '>Our Vision</text>
          </Col>
        </Row> */}

        <Container fluid className=' vbg '>
          <Row className='justify-content-center '>
            <Col md={4} lg={6} className='mt-md-5 mt-xl-5 mt-5' >
              < text className='text  text-white  ' >Our Vision </text>
            </Col>
            <Col md={8} lg={6} className='mt-md-3 mt-xl-4 d-none d-md-block  position-relative '>
              <div className='d-flex '>
                <div className='d-flex flex-column align-items-center  mx-xl-3'>
                  <img src={v1} className='missionimg ' />
                  <p className='imgtext'>Clean</p>
                </div>
                <div className='d-flex flex-column align-items-center  mx-xl-3'>
                  <img src={v2} className='missionimg' />
                  <p className='imgtext'>Green</p>
                </div>
                <div className='d-flex flex-column align-items-center  mx-xl-3'>
                  <img src={v3} className='missionimg' />
                  <p className='imgtext'>Safe</p>
                </div>
                <div className='d-flex flex-column align-items-center  mx-xl-2'>
                  <img src={v4} className='missionimg' />
                  <p className='imgtext'>Econoically Developed</p>
                </div>
              </div>
            </Col>
            {/* <Col className='d-flex  justify-content-center '>
              <p className='vtext text-middle  position-absolute bottom-0 pb-4 pb-lg-5 pb-xl-3 p-2 mt-sm-2 mt-3' >Nashik city will be <span style={{ fontWeight: "800" }}>Clean, Green, Safe,
                Economically developed</span> & Well planned having
                world class infrastructure and well connected with
                major cities of India by 2035.</p>
            </Col> */}
            <Col className='d-flex justify-content-center mt-5'>
              <p className='text-white vtext pb-4 pb-lg-5 pb-xl-3 p-2 mt-sm-2 mt-5'>Nashik city will be <span style={{ fontWeight: "800" }}>Clean, Green, Safe,
                Economically developed</span> & Well planned having
                world class infrastructure and well connected with
                major cities of India by 2035.</p>
            </Col>
            

          </Row>

        </Container>
      </Container>

      <div> <img src={divider} className='img-fluid p-0 w-100' /></div>

      <Container fluid className=' p-0'>
        <Container fluid className=' mbg'>
          <Row className='justify-content-center  '>
            <Col md={7} lg={6} className=' mt-md-2 mt-xl-3 d-none d-md-block  '>
              <div className='d-flex  justify-content-center'>
                <div className='d-flex flex-column align-items-center mx-md-3 mx-xl-3'>
                  <img src={m1} className='missionimg  ' />
                  <p className='imgtext'>Quality of life</p>
                </div>
                <div className='d-flex flex-column align-items-center mx-md-3 mx-xl-3'>
                  <img src={m2} className='missionimg ' />
                  <p className='imgtext'>Rapid Development</p>
                </div>
                <div className='d-flex flex-column align-items-center mx-md-3 mx-xl-3'>
                  <img src={m3} className='missionimg ' />
                  <p className='imgtext'>Systematic growth</p>
                </div>
              </div>
            </Col>

            <Col md={5} lg={6} className='mt-md-5 mt-xl-5 mt-5  ' >
              < text className='text  text-white'>Our Mission</text>
            </Col>
            {/* <Col className='d-flex  justify-content-center'>
              <p className='mtext text-middle position-absolute bottom-0 pb-5 pb-md-5 pb-xl-5 p-2'> <span style={{ fontWeight: "800", color: "#F96945" }}>"Nashik First" </span>
                is an active group of citizens working for improving the quality of the city and citizens of Nashik.</p>
            </Col> */}
            <Col className='d-flex  justify-content-center mt-5'>
              <p className='text-white vtext pb-4 pb-lg-5 pb-xl-3 p-2 mt-sm-2 mt-5'><span style={{ fontWeight: "800", color: "#F96945" }}>"Nashik First" </span>
                is an active group of citizens working for improving the quality of the city and citizens of Nashik.</p>
            </Col>
          </Row>
        </Container>

      </Container >
    </>
  )
}

export default Vission
