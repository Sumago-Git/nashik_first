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
import { DiJavascript } from 'react-icons/di';

const Homecounter = () => {

  const navigate = useNavigate();

  return (
    <>
      <h1 className='mt-lg-5 homecounterheadline '> What makes us <span style={{ color: "#F96945" }}>special?</span></h1>
      <Container fluid className='pitch mt-4 pb-5'>
        {/* <div> */}
        <Container>
          <Row className='justify-content-center ps-lg-5  '>
            <text className='ms-lg-5 ps-lg-5 p-0'>
              <ul className='listtext text-start ms-lg-5 md-ms-0 md-ps-0 '>
                <li className='pt-5'>Setting up Traffic Education Park <span style={{ fontWeight: "800" }}>(TEP)</span> and continuously conducting <span style={{ fontWeight: "800" }}> Traffic Training Sessions <br />for School & College students</span> and <span style={{ fontWeight: "800" }}>Traffic Awareness training sessions for adults.</span></li>
                <li><span style={{ fontWeight: "800" }}>Vital role</span> in forming Traffic Planning Cell at Nashik Municipal Corporation & allocation of <br />budget for the same.</li>
                <li><span style={{ fontWeight: "800" }}>Addressing the Traffic Condition & problems</span> to Ministry of Road & Transport and Highway<br /> Department for <span style={{ fontWeight: "800" }}>improving connectivity of Nashik.</span></li>
              </ul>
            </text>
          </Row>
        </Container>
        {/* </div> */}
        <Row>
          <Col sm={12} xl={5} lg={5} className='mt-lg-5 pt-lg-3 ms-xl-4'>
            <Row className='ms-lg-2'>
              <Col xs={6} md={5} className='mt-5'>
                <div className='train' style={{ height: '280px', backgroundColor: "#F96945" }}>
                  <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: '100%', color: 'white' }}>
                    <h6 className='boxheadline'>Training Imparted</h6>
                    <img src={training} className='img-fluid' style={{ width: '60%', color: "white" }} alt='Training' />
                    <h2>5,120</h2>
                  </div>
                </div>

                <div className='lives mt-3' style={{ height: "280px", backgroundColor: "white", boxShadow: '25px 38px 80px 0px #00000040' }}>
                  <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: '100%', color: 'black' }}>
                    <h5 className='boxheadline'>Adult</h5>
                    <img src={adult} className='img-fluid' style={{ height: "90px" }} alt='Adult' />
                    <h2>1,35,127</h2>
                  </div>
                </div>
              </Col>

              <Col xs={6} md={5} className='mt-5'>
                <div className='lives' style={{ height: "280px", backgroundColor: 'white', boxShadow: '19px 14px 48px 0px #00000040' }}>
                  <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: '100%', color: 'black' }}>
                    <h5 className='boxheadline'>Lives Changed</h5>
                    <img src={lives} className='img-fluid' alt='Lives Changed' />
                    <h2>2,71,062</h2>
                  </div>
                </div>

                <div className=' childner mt-3' style={{ height: '280px', backgroundColor: 'white', boxShadow: "18px -25px 50px 0px #00000040" }}>
                  <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: '100%', color: 'black' }}>
                    <h5 className='boxheadline'>Children</h5>
                    <img src={child} className='img-fluid' style={{ height: "100px" }} alt='Children' />
                    <h2>2,71,062</h2>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col sm={12} xl={6} md={12} style={{ position: "relative" }} className='mt-5' >

            <Col xl={7} xxl={10} md={10} lg={10} className='mt-4 whitebox'>
              <div>
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
              </div>

              <Row className=' ms-lg-5 mx-1 mt-lg-3 whiteboxbtn '>
                <Col xs={6} sm={4} md={3} className='mb-4 mb-md-0'>
                  <button className='license pt-1 text-center' style={{ width: "160px" }}>
                    <h6 className='fs-5'>Learning License</h6>
                  </button>
                </Col>
                <Col xs={6} sm={4} lg={3} className='mb-4 mb-md-0'>
                  <button className='license pt-1 text-center' style={{ width: "160px" }}>
                    <h6 className='fs-5'>Suspended License</h6>
                  </button>
                </Col>
                <Col xs={6} sm={4} lg={3} className='mb-4 mb-md-0'>
                  <button className='license pt-1 text-center' style={{ width: "160px" }}>
                    <h6 className='fs-5'>School bus driver</h6>
                  </button>
                </Col>
              </Row>
              <div>
                <div className="circle d-none d-md-block position-absolute top-50 start-100 translate-middle" style={{ width: "250px" }}></div>
              </div>
            </Col>
            <Col xl={7} xxl={10} md={10} lg={10} className='mt-4 whitebox '>
              <div>
                <h2 className='text-start pt-4 pb-1 ms-4 ms-md-3  whiteboxheadline '>School / College / Organization <span style={{ color: '#F96945' }}>Training</span></h2>
                <h6 className='text-start ms-4 ms-md-3 rto'>
                  <b>To increase awareness about Traffic Safety, we organize<br /> Road Safety Traffic Awareness Workshops free of cost.</b><br />
                </h6>
                <p className='text-start ms-4 ms-md-3 rto'>
                  This programme is exclusively designed for school students
                  and adults, such as college students, employees working in various
                  organizations, rickshaw drivers, bus drivers, and other adult groups.
                </p>
              </div>
              <Row className=" whiteboxbtn ms-lg-5 mt-lg-3 ">
                <Col xs={5} sm={6} md={4} lg={3} >
                  <div className='license pt-lg-1 pt-md-0 text-center' style={{ width: "170px" }}>
                    <h6 className='fs-5'>School Students</h6>
                  </div>
                </Col>
                <Col xs={10} sm={6} md={6} lg={7}>
                  <div className='license pt-lg-2 pt-md-1 text-center mt-4' style={{ width: "320px" }}>
                    <h5 className='mt-2'>Adults (College / Organization)</h5>
                  </div>
                </Col>
              </Row>
              <img src={circle2} style={{ width: "250px", }} className='circle2 d-none d-md-block position-absolute top-50 start-100 translate-middle ' />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Homecounter
