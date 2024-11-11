import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import upcomingbanner from "../../Assets/Assets/Pastevents/pastbanner1.jpg";
import "../../Components/Upcomingevents.css";
import upcoming1 from "../../Assets/Assets/Upcomingevents/upcoming1.png";
import axios from 'axios';

import Aos from 'aos'
import 'aos/dist/aos.css'


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
