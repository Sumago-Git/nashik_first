import React from 'react'
import { Container } from 'react-bootstrap'
import circle from '../Assets/Assets/Homecounter/circle.png'
import training from '../Assets/Assets/Homecounter/training.png';
import traffic from '../Assets/Assets/Homecounter/traffic.png';
import lives from '../Assets/Assets/Homecounter/lives.png';
import child from '../Assets/Assets/Homecounter/child.png';
import adult from '../Assets/Assets/Homecounter/adult.png';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Homecounter = () => {
  return (
    <>
      <h2> What makes us <span style={{ color: '#F96945' }}>special?</span></h2>
      <Container fluid className='pitch'>
        <Row>
          <Col lg={4}>
            <Row>
              <Col lg={6}>
                <Col lg={12} className='train mt-5 ms-5' style={{ height: '400px', backgroundColor: "#F96945" }}>
                  <Container style={{ marginTop: "100px", color: "white" }}>
                    <h5>Training Imparted</h5>
                    <img src={training} />
                    <h1>5,120</h1>
                  </Container>
                </Col>
                <Col lg={12} className='child ms-5 mt-3' style={{ height: '200px', backgroundColor: 'white', boxShadow: " 18px -25px 50px 0px #00000040" }}>
                <Container style={{ marginTop: "10px", color: "black" }}>
                    <h5>Children</h5>
                    <img src={child} style={{height:"100px"}} />
                    <h2>271,062</h2>
                  </Container>
                </Col>
              </Col>
              <Col lg={6}>
                <Col lg={12} className='train mt-4 ms-5' style={{ height: "150px", backgroundColor: 'white', boxShadow: '15px 18px 40px 0px #00000040' }}>
                <img src={traffic} style={{ width:"200px", marginTop:"30px"}}/>
                </Col>
                <Col lg={12} className='child mt-3 ms-5' style={{ height: "250px", backgroundColor: 'white', boxShadow: '19px 14px 48px 0px #00000040' }}>
                <Container style={{ marginTop: "50px", color: "black" }}>
                    <h5>Lives Changed</h5>
                    <img src={lives} />
                    <h2>271,062</h2>
                  </Container>
                </Col>
                <Col lg={12} className='adult mt-3 ms-5' style={{ height: "210px", backgroundColor: "#FDEDD8", boxShadow: '25px 38px 80px 0px #00000040' }}>
                <Container style={{ marginTop: "20px", color: "blac"}}>
                    <h5>Adult</h5>
                    <img src={adult} style={{height:"90px"}} />
                    <h2>135,127</h2>
                  </Container>
                </Col>
              </Col>
            </Row>
          </Col>

          <Col lg={6} style={{position:"relative"}}>
            <Row>
              <Col lg={11} className=''>
                <Col lg={12} className='mt-4 ms-5 w-100' style={{ height: "300px", backgroundColor: "white", borderRadius: '10px', boxShadow: '8px 8px 40px 0px #00000040', borderBottom: '10px solid #F96945', position: 'relative' }}>
               <Container>
               <h3 className='text-start pt-4 pb-1 ms-4 '>RTO <span style={{color:'#F96945' }}>Training</span></h3>
                <h6 className='text-start  ms-4'><b>Road Safety</b>&<b> Traffic Awareness</b>programme jointly <br/>organized by RTO, Nashik and Nashik First. <br/> In this initiative, the learning license holders (youth aged 18 to <br/> 25 yrs) will get permanent license only after undergoing<br/> Counselling & Training on Road Safety & Traffic Awareness <br/>Programme for two hours.</h6>
               </Container>
                <Row style={{position:"absolute"}}>
                  <Col lg={3} className='ms-5 '><Container className='license'><h5>Learning License</h5></Container></Col>
                  <Col lg={3} className='ms-3'><Container className='license'><h5>Suspended License</h5></Container></Col>
                  <Col lg={3} className='ms-3'><Container className='license'><h5>School bus driver</h5></Container></Col>
                </Row>
                  <Container style={{ position: "absolute", backgroundImage: `url(${circle})`, borderRadius: "50%", height: '250px', width: '250px', marginLeft: "550px", marginTop: "-200px", border: '10px solid #FFFFFF' }}></Container>
                </Col>
                <Col lg={8} className='mt-4 ms-5 w-100' style={{ height: "300px", backgroundColor: "white", borderRadius: '10px', boxShadow: '8px 8px 40px 0px #00000040', borderBottom: '10px solid #F96945' }}>
                <Container>
               <h3 className='text-start pt-4 pb-1 ms-4 '>RTO <span style={{color:'#F96945' }}>Training</span></h3>
                <h6 className='text-start  ms-4'><b>Road Safety</b>&<b> Traffic Awareness</b>programme jointly <br/>organized by RTO, Nashik and Nashik First. <br/> In this initiative, the learning license holders (youth aged 18 to <br/> 25 yrs) will get permanent license only after undergoing<br/> Counselling & Training on Road Safety & Traffic Awareness <br/>Programme for two hours.</h6>
               </Container>
                <Row>
                  <Col lg={3} className='ms-5'><Container className='license'><h5>Learning License</h5></Container></Col>
                  <Col lg={3} className='ms-3'><Container className='license' ><h5>Suspended License</h5></Container></Col>
                  <Col lg={3} className='ms-3'><Container className='license'><h5>School bus driver</h5></Container></Col>
                </Row>
                  <Container style={{ position: "absolute", backgroundImage: `url(${circle})`, borderRadius: "50%", height: '250px', width: '250px', marginLeft: "550px", marginTop: "-250px", border: '10px solid #FFFFFF' }}></Container>
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
