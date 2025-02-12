import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import training from '../../Assets/Assets/Aboutpage/training.png'
import addressing from '../../Assets/Assets/Aboutpage/addressing.png'
import don from '../../Assets/Assets/Aboutpage/don.png'
import hub from '../../Assets/Assets/Aboutpage/hub.png'
import bike from '../../Assets/Assets/Aboutpage/bike.png'
import "../../Components/About.css"

import Aos from 'aos'
import 'aos/dist/aos.css'

const Achivements = () => {

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
      <Container fluid className='achivebg mt-4 p-4'>
        <text className='achiveheadline'>
          Few Remarkable achievements
        </text>
        <Container fluid className='mt-lg-5 mt-4  pe-lg-5 '>
          <text>
            <ul className='listtext text-start pb-lg-4 ms-lg-4'>
              <li className='mb-lg-2' >Setting up Traffic Education Park <span style={{ fontWeight: "800" }}>(TEP)</span> and continuously conducting <span style={{ fontWeight: "800" }}> Traffic Training Sessions for School & College students </span>and <span style={{ fontWeight: "800" }}>adults.</span></li>
              <li className='mb-lg-2'>Contributed significantly to the establishment of the Traffic Planning Cell at Nashik Municipal Corporation and allocation of budgetary resources from the Government of Maharashtra.</li>
              <li className='mb-lg-2'><span style={{ fontWeight: "800" }}>Addressing the Traffic Condition & problems</span> to Ministry of Road & Transport and Highway Department for <span style={{ fontWeight: "800" }}>improving connectivity of Nashik.</span></li>
              <li className='mb-lg-2'>A well appreciated creative campaign like <span style={{ fontWeight: "800" }}> DON (Dost Of Nashik), Aika na Nashikkar, etc</span> to create traffic rule <span style={{ fontWeight: "800" }}>awareness among youth.</span></li>
              <li className='mb-lg-2'><span style={{ fontWeight: "800" }}>“Lord Knowledge Hub“</span>, a library consisting of books, Video/Audio CDs/DVDs related to <span style={{ fontWeight: "800" }}>Traffic Management and simulators for teaching driving techniques to citizens during training sessions.</span></li>
              <li className='mb-lg-2'>Various innovative <span style={{ fontWeight: "800" }}>Traffic Awareness Campaigns</span> conducted every year during<span style={{ fontWeight: "800" }}> Road Safety Campaign</span></li>
              <li className='mb-lg-2'>Our efforts to start the two flyovers of Thane-Bhiwandi bypass on National Highway no. 3. to improve the connectivity of <span style={{ fontWeight: "800" }}>Nashik and Mumbai</span> were successful.<span style={{ fontWeight: "800" }}> Mumbai Metropolitan Region Development Authority (MMRDA)</span> opened both the flyovers for the public which was pending since years.</li>
              <li className='mb-lg-2'><span style={{ fontWeight: "800" }}>Aika Na Nashikkar :</span> Another succesfull Road Safety<span style={{ fontWeight: "800" }}> Awareness campaign</span> which was launched in two phase.</li>
              <li className='mb-lg-2'><span style={{ fontWeight: "800" }}></span>Member of District Road Safety Committee, Nashik.</li>
              <li className='mb-lg-2'><span style={{ fontWeight: "800" }}></span>Member of Regional Transport Authority, Nashik.</li>
              <li className='mb-lg-2'><span style={{ fontWeight: "800" }}></span>Member of Traffic Planning Cell, NMC, Nashik.</li>

            </ul>
          </text>
        </Container>
      </Container>

      <Container fluid className='mt-5 me-0 p-3' >
        <Row className='ps-0 justify-content-center'>
          <Col lg={2} md={6} sm={6} data-aos="fade-down">
            <img src={training} className='listimg ms-lg-3' />
            <p className='ms-lg-4 ms-5 mt-3 ps-3 listimgtext'>Traffic Training Sessions for School & College students</p>
          </Col>
          <Col lg={2} md={6} sm={6} className='ms-0 ps-lg-5' data-aos="fade-down">
            <img src={addressing} className='listimg ms-lg-3' />
            <p className='ms-lg-2 ms-5 mt-3 listimgtext'> Addressing the Traffic Condition & problems</p>
          </Col>
          <Col lg={2} md={6} sm={6} className='me-0 ps-lg-5' data-aos="fade-down">
            <img src={don} className='listimg ms-lg-5' />
            <p className='ms-5 ps-5 pe-3 mt-3 listimgtext'> DON (Dost Of Nashik) awareness among youth.</p>
          </Col>
          <Col lg={3} md={6} sm={6} className='ms-lg-5' data-aos="fade-down">
            <img src={hub} className='listimg ms-lg-5' />
            <p className='ms-4 mt-3 listimgtext text-end'> Knowledge Hub</p>
          </Col>
          <Col lg={2} md={6} sm={6} className='ms-0' data-aos="fade-down">
            <img src={bike} className='listimg ms-lg-0' />
            <p className='ms-lg-3 ms-5 mt-3 listimgtext'>Aika Na Nashikkar</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Achivements
