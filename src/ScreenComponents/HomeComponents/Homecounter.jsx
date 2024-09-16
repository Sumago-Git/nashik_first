import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import circle from '../../Assets/Assets/Homecounter/circle.png'
import training from '../../Assets/Assets/Homecounter/training.png';
// import traffic from '../../Assets/Assets/Homecounter/traffic.png';
import lives from '../../Assets/Assets/Homecounter/lives.png';
import child from '../../Assets/Assets/Homecounter/child.png';
import adult from '../../Assets/Assets/Homecounter/adult.png';
import circle2 from "../../Assets/Assets/Homecounter/circle2.png"


const Homecounter = () => {
  return (
    <>
      <h1 className='mt-5 homecounterheadline '> What makes us <span style={{ color: "#F96945" }}>special?</span></h1>
      <Container fluid className='pitch mt-4 pb-5'>
        <Container>
          <Row className='justify-content-center'>
            <text>
              <ul className='listtext text-start ps-5 ms-5'>
                <li className='pt-5'>Setting up Traffic Education Park <span style={{ fontWeight: "800" }}>(TEP)</span> and continuously conducting <span style={{ fontWeight: "800" }}> Traffic Training Sessions <br />for School & College students</span>and <span style={{ fontWeight: "800" }}>Traffic Awareness training sessions for adults.</span></li>
                <li><span style={{ fontWeight: "800" }}>Vital role</span> in forming Traffic Planning Cell at Nashik Municipal Corporation & allocation of <br />budget for the same.</li>
                <li><span style={{ fontWeight: "800" }}>Addressing the Traffic Condition & problems</span> to Ministry of Road & Transport and Highway<br /> Department for <span style={{ fontWeight: "800" }}>improving connectivity of Nashik.</span></li>
              </ul>
            </text>
          </Row>
        </Container>
        <Row>
          <Col lg={4} sm={12} className='mt-5'>
            <Row>
              <Col xs={6} >
                <Col lg={12} className='train mt-5 ms-5' style={{ height: '280px', backgroundColor: "#F96945" }}>
                  <Container style={{ marginTop: "50px", color: "white" }}>
                    <h6>Training Imparted</h6>
                    <img src={training} className='h-50 w-75'/>
                    <h2>5,120</h2>
                  </Container>
                </Col>
                <Col lg={12} className='adult mt-3 ms-5' style={{ height: "210px", backgroundColor: "#FDEDD8", boxShadow: '25px 38px 80px 0px #00000040' }}>
                  <Container style={{ marginTop: "20px", color: "blac" }}>
                    <h5>Adult</h5>
                    <img src={adult} style={{ height: "90px" }} />
                    <h2>135,127</h2>
                  </Container>
                </Col>
              </Col>
              <Col xs={6} >
                <Col lg={12} className='child mt-5 ms-5' style={{ height: "280px", backgroundColor: 'white', boxShadow: '19px 14px 48px 0px #00000040' }}>
                  <Container style={{ marginTop: "50px", color: "black" }}>
                    <h5>Lives Changed</h5>
                    <img src={lives} />
                    <h2>271,062</h2>
                  </Container>
                </Col>
                <Col lg={12} className='child ms-5 mt-3' style={{ height: '200px', backgroundColor: 'white', boxShadow: " 18px -25px 50px 0px #00000040" }}>
                  <Container style={{ marginTop: "10px", color: "black" }}>
                    <h5>Children</h5>
                    <img src={child} style={{ height: "100px" }} />
                    <h2>271,062</h2>
                  </Container>
                </Col>
              </Col>
            </Row>
          </Col>

          <Col lg={6} sm={12} style={{ position: "relative" }} className='mt-5' >
            <Row>
              <Col lg={12} sm={12} className=''>
                <Col lg={12} className='mt-4 ms-5 w-100' style={{ height: "320px", backgroundColor: "white", borderRadius: '10px', boxShadow: '8px 8px 40px 0px #00000040', borderBottom: '10px solid #F96945', position: 'relative' }}>
                  <Container>
                    <h2 className='text-start pt-4  ms-4  '>RTO <span style={{ color: '#F96945' }}>Training</span></h2>
                    <h6 className='text-start ms-4 rto'><b>Road Safety & Traffic Awareness programme jointly <br />organized by RTO, Nashik and Nashik First. </b><br /></h6>
                    <p className='text-start ms-4 rto'> In this initiative, the learning license holders (youth aged 18 <br />to  25 yrs) will get permanent license only after undergoing<br />
                      Counselling & Training on Road Safety & Traffic Awareness <br />Programme for two hours.</p>
                  </Container>
                  <Row style={{ position: "absolute" }}>
                    <Col lg={3} className='ms-5'><Container className='license pt-1 ' style={{ width: "160px" }}><h6 className='fs-5'>Learning License</h6></Container></Col>
                    <Col lg={3} className='ms-3'><Container className='license pt-1' style={{ width: "160px" }} ><h6 className='fs-5'>Suspended License</h6></Container></Col>
                    <Col lg={3} className='ms-3'><Container className='license pt-1' style={{ width: "160px" }}><h6 className='fs-5'>School bus driver</h6></Container></Col>
                  </Row>
                  <Container className="circle d-none d-md-block" style={{ marginTop: "-200px", width: "250px", marginLeft: "570px" }}></Container>
                </Col>
                <Col lg={8} className='mt-4 ms-5 w-100' style={{ height: "330px", backgroundColor: "white", borderRadius: '10px', boxShadow: '8px 8px 40px 0px #00000040', borderBottom: '10px solid #F96945' }}>
                  <Container>
                    <h2 className='text-start pt-4 pb-1 ms-4 '>School / College / Organization <span style={{ color: '#F96945' }}>Training</span></h2>
                    <h6 className='text-start  ms-4 rto'><b>To increase awareness about Traffic Safety, we organizes Road <br />Safety Traffic Awareness Workshops for free of cost.</b><br /></h6>
                    <p className='text-start ms-4 rto'> This programme is exclusively designed for school students<br />
                      and Adult such as College students, Employees working in<br />
                      various organisations, Rickshaw Drivers, Bus Drivers and any<br />
                      other types of adult groups.</p>
                  </Container>
                  <Row>
                    <Col lg={3} className='ms-5 pt-2 '><Container className='license pt-1' style={{ width: "170px" }}><h6 className='fs-5 mt-2'>School Students</h6></Container></Col>
                    <Col lg={6} className='ms-2 pt-2'><Container className='license pt-2'style={{width:"320px"}}><h5 className='mt-2'>Adult(Collage / Organization)</h5></Container></Col>
                  </Row>
                
                  <img src={circle2} style={{ marginTop: "-270px", width: "250px", marginLeft: "570px" }} className='circle2 d-none d-md-block'/>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Homecounter
