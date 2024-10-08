import React from 'react'
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
            <Col lg={6} className='mt-3 '>
             <div className='d-flex'>
             <div className='d-flex flex-column align-items-center'>
              <img src={v1} className='missionimg mx-4 '/>
              <p className='imgtext'>Clean</p>
              </div>
              <div className='d-flex flex-column align-items-center'>
              <img src={v2} className='missionimg mx-4' />
              <p className='imgtext'>Green</p>
              </div>
              <div className='d-flex flex-column align-items-center'>
              <img src={v3} className='missionimg mx-4' />
              <p className='imgtext'>Safe</p>
              </div>
              <div className='d-flex flex-column align-items-center'>
              <img src={v4} className='missionimg mx-4' />
              <p className='imgtext'>Econoically</p>
              </div>
             </div>
            </Col>
            <Col >
              <p className='vtext text-middle pt-lg-2 mt-lg-5 mt-5' >Nashik city will be <span style={{ fontWeight: "800" }}>Clean, Green, Safe,
                Economically developed</span> & Well planned having
                world class infrastructure and well connected with
                major cities of India by 2035.</p>
            </Col>
          </Row>

        </Container>
      </Container>

      <img src={divider} className='w-100' />

      <Container fluid className='p-0  '>
        <Container fluid className='p-0 mbg'>
          <Row className='justify-content-center p-2 m-0 '>
            <Col lg={6} className=' pt-lg-3 d-none d-md-block  '>
           <div className='d-flex ms-lg-5'>
           <div className='d-flex flex-column align-items-center mx-2'>
              <img src={m1} className='missionimg mx-4 '/>
              <p className='imgtext'>Quality of life</p>
              </div>
              <div className='d-flex flex-column align-items-center'>
              <img src={m2} className='missionimg mx-4' />
              <p className='imgtext'>Rapid Development</p>
              </div>
              <div className='d-flex flex-column align-items-center mx-4'>
              <img src={m3} className='missionimg mx-4' />
              <p className='imgtext'>Systematic growth</p>
              </div>
           </div>
            </Col>

            <Col lg={6} className='mt-lg-5 mt-5'>
              < text className='text me-lg-5 pe-lg-5 me-3  text-white'>Our Mission</text>
            </Col>
            <Col className='m-lg-0 mt-5 '>
              <p className='mtext text-middle   pt-lg-5 mt-3'> <span style={{ fontWeight: "800", color: "#F96945" }}>"Nashik First" </span>
                is an active group of citizens working for improving the quality of the city and citizens of Nashik.</p>
            </Col>
          </Row>
        </Container>

      </Container>
    </>
  )
}

export default Vission
