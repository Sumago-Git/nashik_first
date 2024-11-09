import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import upcomingbanner from "../../Assets/Assets/Pastevents/upcomingbanner.png";
import "../../Components/Upcomingevents.css";
import upcoming1 from "../../Assets/Assets/Upcomingevents/upcoming1.png";
import axios from 'axios';

import Aos from 'aos'
import 'aos/dist/aos.css'

const eventsData = [
  {
    id: 1,
    timeDuration: "21st July 2022 to 31st July 2022",
    area: "Nashik City",
    purpose: "To make the citizens aware of the Road Safety rules and to educate them which will change the mindset to follow traffic rules and make Nashik City Safe",
    image: upcoming1,
  },
  {
    id: 2,
    timeDuration: "21st July 2022 to 31st July 2022",
    area: "Nashik City",
    purpose: "To make the citizens aware of the Road Safety rules and to educate them which will change the mindset to follow traffic rules and make Nashik City Safe",
    image: upcoming1,
  },
  {
    id: 3,
    timeDuration: "21st July 2022 to 31st July 2022",
    area: "Nashik City",
    purpose: "To make the citizens aware of the Road Safety rules and to educate them which will change the mindset to follow traffic rules and make Nashik City Safe",
    image: upcoming1,
  },
];

const Upcomingevents = () => {

  const [getdata_upcomming, setupcomming] = useState([]);

  const getdata = () => {
    axios.get('Upcomming/get-Upcomming')
      .then((res) => {
        setupcomming(res.data.responseData);
        console.log(res.data.responseData);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getdata();
  }, [])

  
  useEffect(()=>{
    Aos.init();
  },[])


  return (
    <>
      <Container fluid className='p-0'>
        <img src={upcomingbanner} className='w-100 eventbanner' alt="Event Banner" />
      </Container>

      <Container fluid className='upcomingbg pb-5'>
        <p className='upcomingheadline mt-5'>Upcoming Events</p>

        {/* {
          getdata_upcomming.map((a) => {
            return (
              <>
                <React.Fragment key={a.id}>
                  <Container className='event '>
                    <Row >
                      <Col lg={4} md={5}>
                        <div className=' d-none d-md-block '>
                          <img src={a.img} className='eventimg pb-lg-4 pb-md-4' alt={a.title} />
                        </div>
                      </Col>
                      <Col lg={8} md={7} className='text-start coll'>
                        <p className='upcomingtext1 mb-0 ms-3'>Time Duration <span className='soontext d-none d-lg-inline-block'>COMING SOON</span></p>
                        <Container className='soonbox d-none d-lg-inline-block' style={{ marginLeft: "420px" }}>05</Container>
                        <Container className='soonbox d-none d-lg-inline-block' style={{ marginLeft: "470px" }}>55</Container>
                        <Container className='soonbox d-none d-lg-inline-block' style={{ marginLeft: "520px" }}>00</Container>
                        <p className='upcomingtext2 mb-0 ms-3'>{a.timeDuration}</p>
                        <p className='upcomingtext1 mb-0 ms-3'>Area</p>
                        <p className='upcomingtext2 mb-0 ms-3'>{a.area}</p>
                        <p className='upcomingtext1 mb-0 ms-3'>Purpose of the campaign</p>
                        <p className='upcomingtext2 ms-3'>
                          {a.purpose.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </Col>
                    </Row>
                  </Container>

                </React.Fragment>

              </>
            )
          })
        } */}

        {getdata_upcomming.map((event) => (
          <React.Fragment key={event.id}>
            <Container className='event '>
              <Row >
                <Col lg={4} md={5}>
                  <div className=' d-none d-md-block ' data-aos="fade-right">
                    <img src={event.img} className='eventimg pb-lg-4 pb-md-4' alt={event.area} />
                  </div>
                </Col>
                <Col lg={8} md={7} className='text-start coll'>
                  <p className='upcomingtext1 mb-0 ms-3'>Time Duration <span className='soontext d-none d-lg-inline-block'>COMING SOON</span></p>
                  <Container className='soonbox d-none d-lg-inline-block' style={{ marginLeft: "420px" }}>05</Container>
                  <Container className='soonbox d-none d-lg-inline-block' style={{ marginLeft: "470px" }}>55</Container>
                  <Container className='soonbox d-none d-lg-inline-block' style={{ marginLeft: "520px" }}>00</Container>
                  <p className='upcomingtext2 mb-0 ms-3'>{event.fromdate} To {event.todate}</p>
                  <p className='upcomingtext1 mb-0 ms-3'>Area</p>
                  <p className='upcomingtext2 mb-0 ms-3'>{event.area}</p>
                  <p className='upcomingtext1 mb-0 ms-3'>Purpose of the campaign</p>
                  <p className='upcomingtext2 mb-0 ms-3'>{event.purpose}</p>
                  {/* <p className='upcomingtext2 ms-3'>
                    {event.purpose.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p> */}
                </Col>
              </Row>
            </Container>

          </React.Fragment>
        ))}
      </Container>
    </>
  );
};

export default Upcomingevents;
