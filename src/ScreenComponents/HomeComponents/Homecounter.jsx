import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import circle1 from "../../Assets/Assets/Homecounter/circle1.png"
import training from '../../Assets/Assets/Homecounter/training.png';
// import traffic from '../../Assets/Assets/Homecounter/traffic.png';
import trining_imparted from "../../Assets/Assets/Homecounter/training.png"
import lives from "../../Assets/Assets/Homecounter/lives.png"
import adult from "../../Assets/Assets/Homecounter/adult.png"
import child from "../../Assets/Assets/Homecounter/child.png"
import "../../Components/Header.css";
import { useNavigate } from "react-router-dom";
import { DiJavascript } from 'react-icons/di';
import counterimg1 from "../../Assets/Assets/Homecounter/counterimg1.png"
import counterimg2 from "../../Assets/Assets/Homecounter/counterimg2.png"


const Homecounter = () => {

  const navigate = useNavigate();

  return (
    <>
      <h1 className='mt-lg-5 homecounterheadline '> What makes us <span style={{ color: "#F96945" }}>special?</span></h1>
      <Container fluid className='pitch mt-4 pb-5'>
        <Container>
          <Row className=' '>
            <Col md={5} lg={6} sm={12}>
              <Row className='justify-content-end mt-3'>
                <Col sm={5} md={5} className='h-50'>
                  <Card className=' py-4 shadow-lg  mt-3 border-0 h-75 w-75 ms-lg-5' style={{ borderTopLeftRadius: "6rem", borderBottomRightRadius: "6rem", background: "#F96945" }}>
                    <h5 style={{ fontWeight: "700" }} className='text-white'>Training<br /> Sessions</h5>
                    <img src={trining_imparted} className="w-50 mx-auto" alt="" />
                    <h3 className='text-white '>5,120</h3>
                  </Card>
                </Col>
                <Col sm={5} md={5} className='h-50'>
                  <Card className='py-4 shadow-lg  mt-3 border-0 h-75 w-75' style={{ borderTopRightRadius: "6rem", borderBottomLeftRadius: "6rem" }}>
                    <h5 style={{ fontWeight: "700" }} >Lives<br /> Changed</h5>
                    <img src={lives} className="w-50 mx-auto" alt="" />
                    <h3 className=' pb-2'>2,71,062</h3>
                  </Card>
                </Col>
                <Col sm={5} md={5} className='h-50'>
                  <Card className='py-4 shadow-lg  mt-3 border-0 h-75 w-75 ms-lg-5' style={{ borderTopRightRadius: "6rem", borderBottomLeftRadius: "6rem" }}>
                    <h5 style={{ fontWeight: "700" }} >Adult</h5>
                    <img src={adult} className="w-50 mx-auto" alt="" />
                    <h3>1,35,127</h3>
                  </Card>
                </Col>
                <Col sm={5} md={5} className='h-50'>
                  <Card className='py-4 shadow-lg  mt-3 border-0 h-75 w-75' style={{ borderTopLeftRadius: "6rem", borderBottomRightRadius: "6rem" }}>
                    <h5 style={{ fontWeight: "700" }}>Children</h5>
                    <img src={child} className="w-50 mx-auto" alt="" />
                    <h3>1,35,935</h3>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg={5} className='mt-lg-5'>
              <text className='mt-lg-5 p-0'>
                <ul className='homecounterlist text-start  md-ms-0 md-ps-0 mt-lg-4 '>
                  <li>Setting up Traffic Education Park <span style={{ fontWeight: "800" }}>(TEP)</span> and continuously conducting <span style={{ fontWeight: "800" }}> Traffic Training Sessions for School & College students</span> and <span style={{ fontWeight: "800" }}>Traffic Awareness training sessions for adults.</span></li>
                  <li><span style={{ fontWeight: "800" }}>Vital role</span> in forming Traffic Planning Cell at Nashik Municipal Corporation & allocation of budget for the same.</li>
                  <li><span style={{ fontWeight: "800" }}>Addressing the Traffic Condition & problems</span> to Ministry of Road & Transport and Highway Department for <span style={{ fontWeight: "800" }}>improving connectivity of Nashik.</span></li>
                </ul>
              </text>
            </Col>
          </Row>
        </Container>

        {/* white card */}

        <Container fluid>
          <Row className='mt-lg-5'>
            <Col md={6} lg={6} sm={12} className='p-0 d-flex flex-row-reverse'>
              <Card className='py-4 px-4 shadow-lg text-start border-top-0 border-end-0 border-start-0 shadow-lg position-relative w-75 ' style={{ borderBottom: "10px rgb(255, 99, 71) solid" }}>
                <img src={counterimg1} />
                <h4 style={{ fontWeight: 500 }}>RTO <span style={{ color: "#F96945" }}>Training</span></h4>
                <h6 className='me-lg-5 pe-lg-3' style={{ fontWeight: 700, fontFamily: "poppins", lineHeight: "20px" }}>Road Safety & Traffic Awareness programme jointly organized by RTO, Nashik and Nashik First.</h6>
                <p className='' style={{ fontWeight: 600, fontSize: "1.02rem", fontFamily: "poppins", }}>In this initiative, the learning license holders (youth aged 18 to 25 yrs) will get permanent license only after undergoing Counselling & Training on Road Safety & Traffic Awareness Programme for two hours.</p>
                <Row className='d-flex justify-content-start  '>
                  <Col md={4}>
                    <Button onClick={() => navigate("/training")} className=' border-0 rounded-4' style={{ backgroundColor: "#f96945", fontSize: "1.2rem", fontWeight: 600,lineHeight:"1.2"  }}>
                      Learning License
                    </Button>
                  </Col>
                  <Col md={4} >
                    <Button onClick={() => navigate("/training")} className=' border-0 rounded-4 ' style={{ backgroundColor: "#f96945", fontSize: "1.2rem", fontWeight: 600,lineHeight:"1.2"  }}>
                      Suspended License
                    </Button>
                  </Col>
                  <Col md={4} >
                    <Button onClick={() => navigate("/training")} className=' border-0 rounded-4 ' style={{ backgroundColor: "#f96945", fontSize: "1.2rem", fontWeight: 600,lineHeight:"1.2"  }}>
                      School bus driver
                    </Button>
                  </Col>
                </Row>

              </Card>

            </Col>
            <Col md={6} lg={6} sm={12} className='p-0'>
              <Card className='py-4 px-4 shadow-lg text-start border-top-0 border-end-0 border-start-0 shadow-lg position-relative w-75 ms-lg-4 ' style={{ borderBottom: "10px rgb(255, 99, 71) solid" }}>
                <img src={counterimg2} />
                <h4 style={{ fontWeight: 500 }}>School / College / Organization <span style={{ color: "#F96945" }}>Trainings</span></h4>
                <h6 className='' style={{ fontWeight: 700, fontFamily: "poppins", lineHeight: "20px" }}>To increase awareness about Traffic Safety, we organizes Road Safety Traffic Awareness Workshops for free of cost.</h6>
                <p className='' style={{ fontWeight: 600, fontSize: "1.02rem", fontFamily: "poppins", }}>This programme is exclusively designed for school students and Adult such as College students, Employees working in various organisations, Rickshaw Drivers, Bus Drivers and any other types of adult groups.</p>
                <Row className='d-flex justify-content-start  '>
                  <Col md={4}>
                    <Button onClick={() => navigate("/training")} className='px-lg-5 border-0 rounded-4' style={{ backgroundColor: "#f96945", fontSize: "1.2rem", fontWeight: 600, lineHeight:"1.2" }}>
                      School Student
                    </Button>
                  </Col>
                  <Col md={6} >
                    <Button onClick={() => navigate("/training")} className='px-lg-5 border-0 rounded-4 ' style={{ backgroundColor: "#f96945", fontSize: "1.2rem", fontWeight: 600, lineHeight:"1.2" }}>
                      Adult (College / Organisation)
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

        </Container>
      </Container>
    </>
  )
}

export default Homecounter
