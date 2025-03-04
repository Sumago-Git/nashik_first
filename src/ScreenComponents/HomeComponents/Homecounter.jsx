import React, { useEffect, useState } from 'react'
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
import axios from 'axios';

import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Homecounter = () => {

  const [counterOn, setCounterOn] = useState(false);

  const [getdata, setdata] = useState();
  console.log("getdata", getdata);
  
  const navigate = useNavigate();

  const countsData = () => {
    axios.get('counts/get-entry-counts')
      .then((res) => {
        setdata(res.data.data)
        console.log("res.data", res.data);


      })
      .catch((err) => {
        console.log(err);

      })
  }
  const counter = () => {
    axios.get('counter/get-homecounter')
      .then((res) => {
        setdata(res.data.responseData)

      })
      .catch((err) => {
        console.log(err);

      })
  }
  useEffect(() => {
    // counter();
    countsData();
    Aos.init();
  }, [])


  return (
    <>
      <h1 className='mt-md-5 homecounterheadline '> What makes us <span style={{ color: "#F96945" }}>special?</span></h1>

      <Container fluid className='pitch mt-4 pb-5'>
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <Container>
            <Row>
              <Col md={12} lg={5} sm={12}>
                <Row className="justify-content-center mt-3">
                  {
                    // getdata.map((a) => {
                    //   return (
                    <>
                      <Col xs={6} sm={5} md={5} className="h-50">
                        <Card className="py-4 shadow-md mt-3 border-0 h-75 w-100" style={{ borderTopLeftRadius: "6rem", borderBottomRightRadius: "6rem", background: "#F96945" }}>
                          <h5 style={{ fontWeight: "700" }} className="text-white">
                            Training<br /> Sessions
                          </h5>
                          <img src={trining_imparted} className="w-50 mx-auto" alt="" />
                          {/* <h3 className="text-white">{a.training_imparted}</h3> */}
                          <h2>{counterOn && <CountUp start={0} end={getdata?.sessionSlotCount ? getdata?.sessionSlotCount + 4107 : 4107} duration={2} delay={0}       formattingFn={(value) => new Intl.NumberFormat('en-IN').format(value)}
 />}</h2>
                        </Card>
                      </Col>
                      <Col xs={6} sm={5} md={5} className="h-50">
                        <Card className="py-4 shadow-md mt-3 border-0 h-75 w-100" style={{ borderTopRightRadius: "6rem", borderBottomLeftRadius: "6rem" }}>
                          <h5 style={{ fontWeight: "700" }}>Lives<br /> Changed</h5>
                          <img src={lives} className="w-50 mx-auto" alt="" />
                          {/* <h3 className="">{a.lives_changed}</h3> */}
                          <h2>{counterOn && <CountUp start={0} end={getdata?.totalBookingCount ? getdata?.bookingEntryCountByCategory[2]?.count + 155000 + getdata?.totalExcludingSchoolStudents + 73095 : 0} duration={2} delay={0}       formattingFn={(value) => new Intl.NumberFormat('en-IN').format(value)}
 />}</h2>
                        </Card>
                      </Col>
                      <Col xs={6} sm={5} md={5} className="h-50">
                        <Card className="py-4 shadow-md mt-3 border-0 h-75 w-100" style={{ borderTopRightRadius: "6rem", borderBottomLeftRadius: "6rem" }}>
                          <h5 style={{ fontWeight: "700" }}>Adult</h5>
                          <img src={adult} className="w-50 mx-auto" alt="" />
                          {/* <h3>{a.children}</h3> */}
                          <h4>{counterOn && <CountUp start={0} end={getdata?.totalExcludingSchoolStudents ? getdata?.totalExcludingSchoolStudents + 73095 : 73095} duration={2} delay={0}       formattingFn={(value) => new Intl.NumberFormat('en-IN').format(value)}
 />}</h4>
                        </Card>
                      </Col>

                      <Col xs={6} sm={5} md={5} className="h-50">
                        <Card className="py-4 shadow-md mt-3 border-0 h-75 w-100" style={{ borderTopLeftRadius: "6rem", borderBottomRightRadius: "6rem" }}>
                          <h5 style={{ fontWeight: "700" }}>Children</h5>
                          <img src={child} className="w-50 mx-auto" alt="" />
                          {/* <h3>{a.adult}</h3> */}
                          <h4>{counterOn && <CountUp start={0} end={getdata?.bookingEntryCountByCategory ? getdata?.bookingEntryCountByCategory[2]?.count + 155000 : 155000} duration={2} delay={0}       formattingFn={(value) => new Intl.NumberFormat('en-IN').format(value)}
 />}</h4>
                        </Card>
                      </Col>
                    </>
                    //   )
                    // })
                  }

                  {/* <Col xs={6} sm={5} md={5} className="h-50">
                  <Card className="py-4 shadow-md mt-3 border-0 h-75 w-100" style={{ borderTopLeftRadius: "6rem", borderBottomRightRadius: "6rem", background: "#F96945" }}>
                    <h5 style={{ fontWeight: "700" }} className="text-white">
                      Training<br /> Sessions
                    </h5>
                    <img src={trining_imparted} className="w-50 mx-auto" alt="" />
                    <h3 className="text-white">5,120</h3>
                  </Card>
                </Col>

                
                <Col xs={6} sm={5} md={5} className="h-50">
                  <Card className="py-4 shadow-md mt-3 border-0 h-75 w-100" style={{ borderTopRightRadius: "6rem", borderBottomLeftRadius: "6rem" }}>
                    <h5 style={{ fontWeight: "700" }}>Lives<br /> Changed</h5>
                    <img src={lives} className="w-50 mx-auto" alt="" />
                    <h3 className="">2,71,062</h3>
                  </Card>
                </Col>

                
                <Col xs={6} sm={5} md={5} className="h-50">
                  <Card className="py-4 shadow-md mt-3 border-0 h-75 w-100" style={{ borderTopRightRadius: "6rem", borderBottomLeftRadius: "6rem" }}>
                    <h5 style={{ fontWeight: "700" }}>Adult</h5>
                    <img src={adult} className="w-50 mx-auto" alt="" />
                    <h3>1,35,127</h3>
                  </Card>
                </Col>

                <Col xs={6} sm={5} md={5} className="h-50">
                  <Card className="py-4 shadow-md mt-3 border-0 h-75 w-100" style={{ borderTopLeftRadius: "6rem", borderBottomRightRadius: "6rem" }}>
                    <h5 style={{ fontWeight: "700" }}>Children</h5>
                    <img src={child} className="w-50 mx-auto" alt="" />
                    <h3>1,35,935</h3>
                  </Card>
                </Col> */}
                </Row>
              </Col>

              <Col md={12} lg={5} className="mt-md-5 mt-5">
                <ul className="homecounterlist text-start md-ms-0 md-ps-0 mt-md-4">
                  <li className='mb-md-3'>
                    {/* Setting up Traffic Education Park <span style={{ fontWeight: "800" }}>(TEP)</span> and continuously conducting <span style={{ fontWeight: "800" }}>Traffic Training Sessions for School & College students</span> and <span style={{ fontWeight: "800" }}>Traffic Awareness training sessions for adults.</span> */}
                    As per the directives of the honorable Supreme Court The learning License holder need to undergo two hours mandatory Road Safety Training. Ours is only institute in India which is complying the above directive in coordination with RTO Nashik.
                  </li>
                  <li className='mb-md-3'>
                    <span style={{ fontWeight: "800" }}>Vital role </span> in forming Traffic Planning Cell at Nashik Municipal Corporation & allocation of budget from the government
                  </li>
                  <li className='mb-md-3'>
                    <span style={{ fontWeight: "800" }}>Addressing the Traffic Condition & problems</span> to Ministry of Road & Transport and Highway Department for <span style={{ fontWeight: "800" }}>improving connectivity of Nashik.</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </ScrollTrigger>


        {/* white card */}
        <section className='mt-5'>

          <Container fluid>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
              <Row className='justify-content-center'>
                <Col md={6} lg={5} sm={11}>
                  <Card className='px-4 pt-4 text-start border-0 shadow mb-3 mb-md-0'>
                    <img src={counterimg1} alt="counterimg1" data-aos="zoom-in" data-aos-duration="2000" />
                    <h3 className='countHeading my-3'> <strong> RTO Training </strong></h3>
                    <p className='textCard'><strong>Road Safety & Traffic Awareness programme jointly organized by RTO, Nashik and <span style={{ color: "#c50c1c" }}>Nashik</span><span style={{ color: "#ff6600" }}> First.</span></strong></p>
                    <p className='textCard' style={{ textAlign: "left" }}>In this initiative, the learning license holders (<em>youth aged 18 to 25 yrs</em>) will get permanent license only after undergoing Counselling &amp; Training on <strong>Road Safety &amp; Traffic Awareness Programme</strong> for two hours.</p>

                    <Card.Footer style={{ maxHeight: "105px" }} className="p-0 bg-transparent py-3 my-md-3 my-lg-0 text-center d-none d-md-block">

                      <Button onClick={() => {
                        navigate("/training", {
                          state: { buttonNumber: 1, btncategory: "RTO – Learner Driving License Holder Training" } // Pass your state here
                        })
                        window.scroll(0, 600)
                      }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-md-1 rounded-5 border-0 py-2 py-xxl-3 '> Learning License </Button>

                      <Button onClick={() => {
                        navigate("/training", {
                          state: { buttonNumber: 2, btncategory: "RTO – Suspended Driving License Holders Training" } // Pass your state here
                        })
                        window.scroll(0, 0)
                      }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-md-1 rounded-5 border-0 py-2 py-xxl-3 '> Suspended License </Button>

                      <Button onClick={() => {
                        navigate("/training", {
                          state: { buttonNumber: 3, btncategory: "RTO – Training for School Bus Driver" } // Pass your state here
                        })
                        window.scroll(0, 0)
                      }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-lg-1 rounded-5 border-0 py-2 py-xxl-3 '> School Bus Driver </Button>

                    </Card.Footer>

                    <Card.Footer className="p-0 bg-transparent py-3 d-flex justify-content-center d-block d-md-none">
                      <Row className='justify-content-center'>
                        <Col sm={12} lg={4} md={4}>
                          <Button onClick={() => {
                            navigate("/training", {
                              state: { buttonNumber: 1, btncategory: "RTO – Learner Driving License Holder Training" } // Pass your state here
                            })
                            window.scroll(0, 0)
                          }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-md-1 rounded-5 border-0 py-2 py-xl-3 w-100'> Learning License </Button>
                        </Col>
                        <Col sm={12} lg={4} md={4}>
                          <Button onClick={() => {
                            navigate("/training", {
                              state: { buttonNumber: 2, btncategory: "RTO – Suspended Driving License Holders Training" } // Pass your state here
                            })
                            window.scroll(0, 0)
                          }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-md-1 rounded-5 border-0 py-2 py-xxl-3 w-100'> Suspended License </Button>
                        </Col>
                        <Col sm={12} lg={4} md={4}>
                          <Button onClick={() => {
                            navigate("/training", {
                              state: { buttonNumber: 3, btncategory: "RTO – Training for School Bus Driver" } // Pass your state here
                            })
                            window.scroll(0, 0)
                          }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-md-1 rounded-5 border-0 py-2 py-xxl-3 w-100'> School Bus Driver </Button>
                        </Col>
                      </Row>

                    </Card.Footer>
                  </Card>
                </Col>
                <Col md={6} lg={5} sm={11}>
                  <Card className='px-4 pt-4 text-start border-0 shadow mb-3 mb-md-0'>
                    <img src={homecounterimg2a} alt="homecounterimg2a" data-aos="zoom-in" data-aos-duration="2000" />
                    <h3 className='countHeading my-3'> <strong> School / Institution Trainings </strong></h3>
                    <p className='textCard' style={{ textAlign: "left" }}>To increase awareness about Traffic Safety, we organize <strong>Road Safety Traffic Awareness programs</strong> for <strong><span style={{ color: "#993300" }}><em> FREE OF COST</em></span>.</strong></p>
                    <p className='textCard' style={{ textAlign: "left" }}>This programme is exclusively designed for school students and Adult such as College students, Employees working in various organisations, Rickshaw Drivers, Bus Drivers and any other types of adult groups.</p>
                    <Card.Footer style={{ maxHeight: "105px" }} className="p-0 bg-transparent py-3 my-md-1 my-lg-0 d-flex text-center d-none d-md-block">
                      <Row>
                        <Col lg={5} md={5}>
                          <Button onClick={() => {
                            navigate("/training", {
                              state: { buttonNumber: 4, btncategory: "School Students Training – Group" } // Pass your state here
                            })
                            window.scroll(0, 0)
                          }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-md-1 rounded-5 border-0 py-2 py-xxl-3'> School Students
                          </Button>
                        </Col>
                        <Col lg={7} md={7}>
                          <Button onClick={() => {
                            navigate("/training", {
                              state: { buttonNumber: 5, btncategory: "College/Organization Training – Group" } // Pass your state here
                            })
                            window.scroll(0, 0)
                          }
                          } style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-md-1 rounded-5 border-0 py-2 py-xxl-3'> Adult (Institution)
                          </Button>
                        </Col>
                      </Row>
                    </Card.Footer>

                    <Card.Footer className="p-0 bg-transparent py-3 d-flex justify-content-center d-block d-md-none">
                      <Row className='justify-content-center'>
                        <Col sm={12}  >
                          <Button onClick={() => {
                            navigate("/training", {
                              state: { buttonNumber: 4, btncategory: "School Students Training – Group" } // Pass your state here
                            })
                            window.scroll(0, 0)
                          }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-md-1 rounded-5 border-0 py-2 w-100'> School Students </Button>
                        </Col>
                        <Col sm={12}>
                          <Button onClick={() => {
                            navigate("/training", {
                              state: { buttonNumber: 5, btncategory: "College/Organization Training – Group" } // Pass your state here
                            })
                            window.scroll(0, 0)
                          }} style={{ backgroundColor: "#f96945" }} className='mx-1 my-2 my-md-1 rounded-5 border-0 py-2 w-100'> Adult Institution </Button>
                        </Col>
                      </Row>

                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </ScrollTrigger>
          </Container>
        </section >
      </Container >
    </>
  )
}

export default Homecounter
