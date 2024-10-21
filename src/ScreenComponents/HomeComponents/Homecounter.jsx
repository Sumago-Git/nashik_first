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
import homecounterimg2a from "../../Assets/Assets/Homecounter/homecounter2a.png"


const Homecounter = () => {

  const navigate = useNavigate();

  return (
    <>
      <h1 className='mt-lg-5 homecounterheadline '> What makes us <span style={{ color: "#F96945" }}>special?</span></h1>
      <Container fluid className='pitch mt-4 pb-5'>
        <Container>
          <Row>
            <Col md={5} lg={6} sm={12}>
              <Row className="justify-content-center mt-3">
                {/* First Card */}
                <Col xs={6} sm={5} md={5} className="h-50">
                  <Card className="py-4 shadow-lg mt-3 border-0 h-75 w-100" style={{ borderTopLeftRadius: "6rem", borderBottomRightRadius: "6rem", background: "#F96945" }}>
                    <h5 style={{ fontWeight: "700" }} className="text-white">
                      Training<br /> Sessions
                    </h5>
                    <img src={trining_imparted} className="w-50 mx-auto" alt="" />
                    <h3 className="text-white">5,120</h3>
                  </Card>
                </Col>

                {/* Second Card */}
                <Col xs={6} sm={5} md={5} className="h-50">
                  <Card className="py-4 shadow-lg mt-3 border-0 h-75 w-100" style={{ borderTopRightRadius: "6rem", borderBottomLeftRadius: "6rem" }}>
                    <h5 style={{ fontWeight: "700" }}>Lives<br /> Changed</h5>
                    <img src={lives} className="w-50 mx-auto" alt="" />
                    <h3 className="">2,71,062</h3>
                  </Card>
                </Col>

                {/* Third Card */}
                <Col xs={6} sm={5} md={5} className="h-50">
                  <Card className="py-4 shadow-lg mt-3 border-0 h-75 w-100" style={{ borderTopRightRadius: "6rem", borderBottomLeftRadius: "6rem" }}>
                    <h5 style={{ fontWeight: "700" }}>Adult</h5>
                    <img src={adult} className="w-50 mx-auto" alt="" />
                    <h3>1,35,127</h3>
                  </Card>
                </Col>

                {/* Fourth Card */}
                <Col xs={6} sm={5} md={5} className="h-50">
                  <Card className="py-4 shadow-lg mt-3 border-0 h-75 w-100" style={{ borderTopLeftRadius: "6rem", borderBottomRightRadius: "6rem" }}>
                    <h5 style={{ fontWeight: "700" }}>Children</h5>
                    <img src={child} className="w-50 mx-auto" alt="" />
                    <h3>1,35,935</h3>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col lg={5} className="mt-lg-5 mt-5">
              <ul className="homecounterlist text-start md-ms-0 md-ps-0 mt-lg-4">
                <li className='mb-lg-3'>
                  Setting up Traffic Education Park <span style={{ fontWeight: "800" }}>(TEP)</span> and continuously conducting <span style={{ fontWeight: "800" }}>Traffic Training Sessions for School & College students</span> and <span style={{ fontWeight: "800" }}>Traffic Awareness training sessions for adults.</span>
                </li>
                <li className='mb-lg-3'>
                  <span style={{ fontWeight: "800" }}>Vital role</span> in forming Traffic Planning Cell at Nashik Municipal Corporation & allocation of budget for the same.
                </li>
                <li className='mb-lg-3'>
                  <span style={{ fontWeight: "800" }}>Addressing the Traffic Condition & problems</span> to Ministry of Road & Transport and Highway Department for <span style={{ fontWeight: "800" }}>improving connectivity of Nashik.</span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>


        {/* white card */}
        <section className='mt-5'>

          <Container fluid>
            <Row className='justify-content-center'>
              <Col md={5} lg={5} sm={11}>
                <Card className='p-4 text-start border-0 shadow mb-3 mb-lg-0'>
                  <img src={counterimg1} alt="counterimg1" />
                  <h3 className='countHeading my-3'> <strong> RTO Training </strong></h3>
                  <p className='textCard'><strong>Road Safety & Traffic Awareness programme jointly organized by RTO, Nashik and <span style={{ color: "#c50c1c" }}>Nashik</span><span style={{ color: "#ff6600" }}> First.</span></strong></p>
                  <p className='textCard' style={{ textAlign: "left" }}>In this initiative, the learning license holders (<em>youth aged 18 to 25 yrs</em>) will get permanent license only after undergoing Counselling &amp; Training on <strong>Road Safety &amp; Traffic Awareness Programme</strong> for two hours.</p>
                  <Card.Footer style={{ maxHeight: "105px" }} className="p-0 bg-transparent py-3 text-center d-none d-md-block">

                    <Button onClick={() => {
                      navigate("/training")
                      window.scroll(0, 0)
                    }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-lg-1 rounded-5 border-0 py-2 py-xxl-3 '> Learning License </Button>

                    <Button onClick={() => {
                      navigate("/training")
                      window.scroll(0, 0)
                    }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-lg-1 rounded-5 border-0 py-2 py-xxl-3 '> Suspended License </Button>

                    <Button onClick={() => {
                      navigate("/training")
                      window.scroll(0, 0)
                    }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-lg-1 rounded-5 border-0 py-2 py-xxl-3 '> School Bus Driver </Button>

                  </Card.Footer>

                  <Card.Footer className="p-0 bg-transparent py-3 d-flex justify-content-center d-block d-md-none">
                    <Row className='justify-content-center'>
                      <Col sm={12} >
                        <Button onClick={() => {
                          navigate("/training")
                          window.scroll(0, 0)
                        }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-lg-1 rounded-5 border-0 py-2 py-xl-3 w-100'> Learning License </Button>
                      </Col>
                      <Col sm={12}>
                        <Button onClick={() => {
                          navigate("/training")
                          window.scroll(0, 0)
                        }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-lg-1 rounded-5 border-0 py-2 py-xxl-3 w-100'> Suspended License </Button>
                      </Col>
                      <Col sm={12}>
                        <Button onClick={() => {
                          navigate("/training")
                          window.scroll(0, 0)
                        }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-lg-1 rounded-5 border-0 py-2 py-xxl-3 w-100'> School Bus Driver </Button>
                      </Col>
                    </Row>

                  </Card.Footer>
                </Card>
              </Col>
              <Col md={5} lg={5} sm={11}>
                <Card className='p-4 text-start border-0 shadow mb-3 mb-lg-0'>
                  <img src={counterimg1} alt="counterimg1" />
                  <h3 className='countHeading my-3'> <strong> School / College / Organization Trainings </strong></h3>
                  <p className='textCard'><strong>Road Safety & Traffic Awareness programme jointly organized by RTO, Nashik and <span style={{ color: "#c50c1c" }}>Nashik</span><span style={{ color: "#ff6600" }}> First.</span></strong></p>
                  <p className='textCard' style={{ textAlign: "left" }}>In this initiative, the learning license holders (<em>youth aged 18 to 25 yrs</em>) will get permanent license only after undergoing Counselling &amp; Training on <strong>Road Safety &amp; Traffic Awareness Programme</strong> for two hours.</p>
                  <Card.Footer style={{ maxHeight: "105px" }} className="p-0 bg-transparent py-3 d-flex text-center d-none d-md-block">
                    <Button onClick={() => {
                      navigate("/training")
                      window.scroll(0, 0)
                    }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-lg-1 rounded-5 border-0 py-2 py-xxl-3'> School Students </Button>
                    <Button onClick={() => {
                      navigate("/training")
                      window.scroll(0, 0)
                    }
                    } style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-lg-1 rounded-5 border-0 py-2 py-xxl-3'> Adult (College / Organization) </Button>
                  </Card.Footer>

                  <Card.Footer className="p-0 bg-transparent py-3 d-flex justify-content-center d-block d-md-none">
                    <Row className='justify-content-center'>
                      <Col sm={12} >
                        <Button onClick={() => {
                          navigate("/training")
                          window.scroll(0, 0)
                        }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-lg-1 rounded-5 border-0 py-2 w-100'> School Students </Button>
                      </Col>
                      <Col sm={12}>
                        <Button onClick={() => {
                          navigate("/training")
                          window.scroll(0, 0)
                        }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-lg-1 rounded-5 border-0 py-2 w-100'> Adult (College / Organization) </Button>
                      </Col>
                    </Row>

                  </Card.Footer>
                </Card>
              </Col>

            </Row>
            {/* <Row className='mt-lg-5 justify-content-center'>
            <Col md={6} lg={5} sm={12} className='p-0 d-flex flex-row-reverse'>
            <Card className='py-4 px-4 shadow-lg text-start border-top-0 border-end-0 border-start-0 shadow-lg position-relative  ' style={{ borderBottom: "10px rgb(255, 99, 71) solid" }}>
            <img src={counterimg1}/>
            <h4 style={{ fontWeight: 700 }} className='mt-lg-3'>RTO Training </h4>
            <h6 className='me-lg-5 pe-lg-3 mt-lg-2' style={{ fontWeight: 700, fontFamily: "poppins", lineHeight: "20px" }}>Road Safety & Traffic Awareness programme jointly organized by RTO, Nashik and <span style={{color:"#c50c1c"}}>Nashik</span> <span style={{color:"#ff6600"}}>First.</span></h6>
            <p className='mt-lg-2' style={{ fontSize: "1.02rem", fontFamily: "poppins", }}>In this initiative, the learning license holders (youth aged 18 to 25 yrs) will get permanent license only after undergoing Counselling & Training on <span style={{fontWeight:"bold"}}>Road Safety & Traffic Awareness Programme</span> for two hours.</p>
            <Row className='d-flex justify-content-start  '>
            <Col   >
            <Button onClick={() => navigate("/training")} className=' p-2 border-0 rounded-4' style={{ backgroundColor: "#f96945", fontSize: "1.2rem", fontWeight: 600, lineHeight: "1" }}>
            Learning License
            </Button>
            </Col>
            <Col >
            <Button onClick={() => navigate("/training")} className=' p-2 border-0 rounded-4 ' style={{ backgroundColor: "#f96945", fontSize: "1.2rem", fontWeight: 600, lineHeight: "1" }}>
            Suspended License
            </Button>
            </Col>
            <Col   >
            <Button onClick={() => navigate("/training")} className=' p-2  border-0 rounded-4 ' style={{ backgroundColor: "#f96945", fontSize: "1.2rem", fontWeight: 600, lineHeight: "1" }}>
            School bus driver
            </Button>
            </Col>
            </Row>
            
            </Card>
            
            </Col>
            <Col md={6} lg={5} sm={12} className='p-0'>
            <Card className='py-4 px-4 shadow-lg text-start border-top-0 border-end-0 border-start-0 shadow-lg position-relative  ms-lg-4 ' style={{ borderBottom: "10px rgb(255, 99, 71) solid" }}>
            <img src={homecounterimg2a} />
            <h4 style={{ fontWeight: 700 }} className='mt-lg-3'>School / College / Organization Trainings</h4>
            <h6 className='mt-lg-2' style={{  fontFamily: "poppins", lineHeight: "20px" }}>To increase awareness about Traffic Safety, we organizes <span style={{fontWeight:"700"}}>Road Safety Traffic Awareness Workshops </span>for <span style={{color:"#993300", fontWeight:"bold"}}>free of cost.</span></h6>
            <p className='pb-lg-3 mt-lg-2' style={{  fontSize: "1.02rem", fontFamily: "poppins", }}>This programme is exclusively designed for school students and Adult such as College students, Employees working in various organisations, Rickshaw Drivers, Bus Drivers and any other types of adult groups.</p>
            <Row className='d-flex justify-content-start  '>
            <Col >
            <Button onClick={() => navigate("/training")} className=' p-lg-3 px-lg-5 border-0 rounded-4' style={{ backgroundColor: "#f96945", fontSize: "1.2rem", fontWeight: 600, lineHeight: "1.5" }}>
            School  Student
            </Button>
            </Col>
            <Col  >
            <Button onClick={() => navigate("/training")} className='px-lg-5 border-0 rounded-4 ' style={{ backgroundColor: "#f96945", fontSize: "1.2rem", fontWeight: 600, lineHeight: "1.3" }}>
            Adult (College / Organisation)
            </Button>
            </Col>
            </Row>
            </Card>
            </Col>
            </Row> */}

          </Container>
        </section >
      </Container >
    </>
  )
}

export default Homecounter
