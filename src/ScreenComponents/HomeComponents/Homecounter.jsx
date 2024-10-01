import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import circle from '../../Assets/Assets/Homecounter/circle.png'
import training from '../../Assets/Assets/Homecounter/training.png';
// import traffic from '../../Assets/Assets/Homecounter/traffic.png';
import lives from '../../Assets/Assets/Homecounter/lives.png';
import child from '../../Assets/Assets/Homecounter/child.png';
import adult from '../../Assets/Assets/Homecounter/adult.png';
import circle2 from "../../Assets/Assets/Homecounter/circle2.png"
import "../../Components/Header.css";
import { useNavigate } from "react-router-dom";

const Homecounter = () => {

  const navigate = useNavigate();

  return (
    <>
      <h1 className='mt-lg-5 homecounterheadline '> What makes us <span style={{ color: "#F96945" }}>special?</span></h1>
      <Container fluid className='pitch mt-4 pb-5'>
        <Container>
          <Row className='justify-content-center'>
            <text>
              <ul className='listtext text-start lg-ps-5 lg-ms-5 md-ms-0 md-ps-0'>
                <li className='pt-5'>Setting up Traffic Education Park <span style={{ fontWeight: "800" }}>(TEP)</span> and continuously conducting <span style={{ fontWeight: "800" }}> Traffic Training Sessions <br />for School & College students</span> and <span style={{ fontWeight: "800" }}>Traffic Awareness training sessions for adults.</span></li>
                <li><span style={{ fontWeight: "800" }}>Vital role</span> in forming Traffic Planning Cell at Nashik Municipal Corporation & allocation of <br />budget for the same.</li>
                <li><span style={{ fontWeight: "800" }}>Addressing the Traffic Condition & problems</span> to Ministry of Road & Transport and Highway<br /> Department for <span style={{ fontWeight: "800" }}>improving connectivity of Nashik.</span></li>
              </ul>
            </text>
          </Row>
        </Container>
        <Row>
          <Col lg={4} sm={12} className='mt-lg-5 pt-lg-3'>
            <Row>
              <Col xs={6} md={6} className='mt-5'>
                <Col className='train' style={{ height: '280px', backgroundColor: "#F96945"}}>
                  <Container className='d-flex flex-column align-items-center justify-content-center' style={{ height: '100%', color: 'white' }}>
                    <h6 className='boxheadline'>Training Imparted</h6>
                    <img src={training} className='img-fluid' style={{ width: '60%' , color:"white"}} alt='Training' />
                    <h2>5,120</h2>
                  </Container>
                </Col>

                <Col className='lives mt-3' style={{ height: "280px", backgroundColor: "white", boxShadow: '25px 38px 80px 0px #00000040' }}>
                  <Container className='d-flex flex-column align-items-center justify-content-center' style={{ height: '100%', color: 'black' }}>
                    <h5 className='boxheadline'>Adult</h5>
                    <img src={adult} className='img-fluid' style={{ height: "90px" }} alt='Adult' />
                    <h2>1,35,127</h2>
                  </Container>
                </Col>
              </Col>

              <Col xs={6} md={6} className='mt-5'>
                <Col className='lives' style={{ height: "280px", backgroundColor: 'white', boxShadow: '19px 14px 48px 0px #00000040' }}>
                  <Container className='d-flex flex-column align-items-center justify-content-center' style={{ height: '100%', color: 'black' }}>
                    <h5 className='boxheadline'>Lives Changed</h5>
                    <img src={lives} className='img-fluid' alt='Lives Changed' />
                    <h2>2,71,062</h2>
                  </Container>
                </Col>

                <Col className=' childner mt-3' style={{ height: '280px', backgroundColor: 'white', boxShadow: "18px -25px 50px 0px #00000040"}}>
                  <Container className='d-flex flex-column align-items-center justify-content-center' style={{ height: '100%', color: 'black' }}>
                    <h5 className='boxheadline'>Children</h5>
                    <img src={child} className='img-fluid' style={{ height: "100px" }} alt='Children' />
                    <h2>2,71,062</h2>
                  </Container>
                </Col>
              </Col>
            </Row>
          </Col>

          <Col lg={6} sm={12} style={{ position: "relative" }} className='mt-5' >
            <Row>
              <Col lg={12} sm={12} className=''>
                <Col lg={12} className='mt-4 ms-lg-5 w-100 whitebox'>
                  <Container>
                    <h2 className='text-start pt-4 ms-4 ms-md-3 ms-lg-4 whiteboxheadline'>RTO <span style={{ color: '#F96945' }}>Training</span></h2>
                    <h4 className='text-start ms-4 ms-md-3 ms-lg-4 rto'>
                      <b>Road Safety & Traffic Awareness programme jointly<br />organized by RTO, Nashik and Nashik First.</b><br />
                    </h4>
                    <p className='text-start ms-4 ms-md-3 ms-lg-4 rto'>
                      In this initiative, the learning license holders (youth aged 18<br />
                      to 25 yrs) will get permanent license only after undergoing<br />
                      Counselling & Training on Road Safety & Traffic Awareness<br />
                      Programme for two hours.
                    </p>
                  </Container>

                  <Row className='justify-content-center mt-lg-3  m-0'>
                    <Col xs={6} sm={4} lg={3} className='mb-3 mb-md-0'>
                      <button className='license pt-1 text-center' style={{ width: "160px" }}>
                        <h6 className='fs-5'>Learning License</h6>
                      </button>
                    </Col>
                    <Col xs={6} sm={4} lg={3} className='mb-3 mb-md-0'>
                      <button className='license pt-1 text-center' style={{ width: "160px" }}>
                        <h6 className='fs-5'>Suspended License</h6>
                      </button>
                    </Col>
                    <Col xs={6} sm={4} lg={3} className='mb-3 mb-md-0'>
                      <button className='license pt-1 text-center' style={{ width: "160px" }}>
                        <h6 className='fs-5'>School bus driver</h6>
                      </button>
                    </Col>
                  </Row>
                  <Container>
                    <div className="circle d-none d-md-block position-absolute top-50 start-100 translate-middle" style={{  width: "250px" }}></div>
                  </Container>
                </Col>
                <Col lg={8} className='mt-4 ms-lg-5 w-100 whitebox'>
                  <Container>
                    <h2 className='text-start pt-4 pb-1 ms-4 ms-md-3 whiteboxheadline '>School / College / Organization <span style={{ color: '#F96945' }}>Training</span></h2>
                    <h6 className='text-start ms-4 ms-md-3 rto'>
                      <b>To increase awareness about Traffic Safety, we organize<br /> Road Safety Traffic Awareness Workshops free of cost.</b><br />
                    </h6>
                    <p className='text-start ms-4 ms-md-3 rto'>
                      This programme is exclusively designed for school students<br />
                       and adults, such as college students, employees working in<br /> various
                      organizations, rickshaw drivers, bus drivers, and other<br/> adult groups.
                    </p>
                  </Container>
                  <Row className="justify-content-center mt-lg-3 ">
                    <Col xs={5} sm={6} md={4} lg={3} >
                      <Container className='license pt-lg-1 pt-md-0 text-center' style={{ width: "170px" }}>
                        <h6 className='fs-5 mt-2'>School Students</h6>
                      </Container>
                    </Col>
                    <Col xs={10} sm={6} md={6} lg={7}>
                      <Container className='license pt-lg-2 pt-md-1 text-center' style={{ width: "320px" }}>
                        <h5 className='mt-2'>Adults (College / Organization)</h5>
                      </Container>
                    </Col>
                  </Row>
                  <img src={circle2} style={{ width: "250px",  }} className='circle2 d-none d-md-block position-absolute top-50 start-100 translate-middle ' />
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
