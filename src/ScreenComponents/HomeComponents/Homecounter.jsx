import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
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

        <Row>
          <Col md={5} lg={5} sm={12}>

            <Row>
              <Col sm={6} md={6}>
                <Card className='px-5 py-5' style={{ borderBottomLeftRadius: "50px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam provident minus quod incidunt expedita, molestiae quasi eligendi dolore.Ipsam provident minus quod incidunt expedita, molestiae quasi eligendi dolore.
                </Card>
              </Col>
            </Row>

          </Col>




          <Col md={7} lg={7} sm={12}>
            section 2
          </Col>
        </Row>



      </Container>
    </>
  )
}

export default Homecounter
