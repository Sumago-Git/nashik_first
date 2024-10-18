import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import training from '../../Assets/Assets/Aboutpage/training.png'
import addressing from '../../Assets/Assets/Aboutpage/addressing.png'
import don from '../../Assets/Assets/Aboutpage/don.png'
import hub from '../../Assets/Assets/Aboutpage/hub.png'
import bike from '../../Assets/Assets/Aboutpage/bike.png'
import "../../Components/About.css"

const Achivements = () => {
  return (
    <>
      <Container fluid className='achivebg mt-4 p-4'>
        <text className='achiveheadline'>
          Few Remarkable achievements
        </text>
        <Container fluid className='mt-lg-5 mt-4  pe-lg-5 '>
          <text>
            <ul className='listtext text-start pb-lg-4 ms-lg-4'>
              <li className='mb-lg-2' >Setting up Traffic Education Park <span style={{ fontWeight: "800" }}>(TEP)</span> and continuously conducting <span style={{ fontWeight: "800" }}> Traffic Training Sessions for School & College students</span>and <span style={{ fontWeight: "800" }}>Traffic Awareness training sessions for adults.</span></li>
              <li className='mb-lg-2'><span style={{ fontWeight: "800" }}>Vital role</span> in forming Traffic Planning Cell at Nashik Municipal Corporation & allocation of budget for the same.</li>
              <li className='mb-lg-2'><span style={{ fontWeight: "800" }}>Addressing the Traffic Condition & problems</span> to Ministry of Road & Transport and Highway Department for <span style={{ fontWeight: "800" }}>improving connectivity of Nashik.</span></li>
              <li className='mb-lg-2'>A well appreciated creative campaign <span style={{ fontWeight: "800" }}>DON (Dost Of Nashik)</span> to create traffic rule <span style={{ fontWeight: "800" }}>awareness among youth.</span></li>
              <li className='mb-lg-2'>Starting up <span style={{ fontWeight: "800" }}>“Knowledge Hub“</span>, a library consisting of books, Video/Audio CDs/DVDs related to <span style={{ fontWeight: "800" }}>Traffic Management and simulators for teaching driving techniques to citizens during training sessions.</span></li>
              <li className='mb-lg-2'>Various innovative <span style={{ fontWeight: "800" }}>Traffic Awareness Campaigns</span> conducted every year during<span style={{ fontWeight: "800" }}> Road Safety Week.</span></li>
              <li className='mb-lg-2'>Our efforts to start the two flyovers of Thane-Bhiwandi bypass on National Highway no. 3. to improve the connectivity of <span style={{ fontWeight: "800" }}>Nashik and Mumbai</span> were successful.<span style={{ fontWeight: "800" }}> Mumbai Metropolitan Region Development Authority (MMRDA)</span> opened both the flyovers for the public which was pending since years.</li>
              <li className='mb-lg-2'><span style={{ fontWeight: "800" }}>Aika Na Nashikkar :</span> Another succesfull road safety<span style={{ fontWeight: "800" }}> awareness campaign</span> which was launched in two parts.</li>
            </ul>
          </text>
        </Container>
      </Container>

      <Container fluid className='mt-5 me-0 p-3' >
        <Row className='ps-0'>
          <Col lg={2}>
            <img src={training} className='listimg ms-lg-3' />
            <p className='ms-lg-4 ms-5 mt-3 ps-3 listimgtext'>Traffic Training Sessions for School & College students</p>
          </Col>
          <Col lg={2} className='ms-0 ps-lg-5'>
            <img src={addressing} className='listimg ms-lg-3' />
            <p className='ms-lg-2 ms-5 mt-3 listimgtext'> Addressing the Traffic Condition & problems</p>
          </Col>
          <Col lg={2} className='me-0 ps-lg-5'>
            <img src={don} className='listimg ms-lg-5' />
            <p className='ms-5 ps-5 pe-3 mt-3 listimgtext'> DON (Dost Of Nashik) awareness among youth.</p>
          </Col>
          <Col lg={3} className='ms-lg-5'>
            <img src={hub} className='listimg ms-lg-5' />
            <p className='ms-4 mt-3 listimgtext text-end'> Knowledge Hub</p>
          </Col>
          <Col lg={2} className='ms-0'>
            <img src={bike} className='listimg ms-lg-0' />
            <p className='ms-lg-3 ms-5 mt-3 listimgtext'>Aika Na Nashikkar</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Achivements
