import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import upcomingbanner from "../../Assets/Assets/Pastevents/pastbanner1.jpg";
import "../../Components/Upcomingevents.css";
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Upcomingevents = () => {
  const [getdata_upcomming, setupcomming] = useState([]);
  const [animateKey, setAnimateKey] = useState(0); // State to trigger re-render

  const getdata = () => {
    axios.get('Upcomming/get-Upcomming')
      .then((res) => {
        setupcomming(res.data.responseData);
        console.log(res.data.responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  const getCountdown = (startDate, endDate) => {
    const eventStartDate = new Date(startDate);
    const eventEndDate = new Date(endDate);
    const currentDate = new Date();

    if (currentDate < eventStartDate) {
      // Event has not started - calculate time until it starts
      const timeDiff = eventStartDate - currentDate;
      return {
        days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
        status: 'Coming Soon',
      };
    } else if (currentDate >= eventStartDate && currentDate <= eventEndDate) {
      // Event is currently happening
      return { status: 'In Progress' };
    } else {
      // Event has ended
      return { status: 'Event Ended' };
    }
  };

  // Re-run animation every second
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateKey((prevKey) => prevKey + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container fluid className='p-0'>
        <img src={upcomingbanner} className='w-100 eventbanner' alt="Event Banner" />
      </Container>

      <Container fluid className='upcomingbg pb-5'>
        <p className='upcomingheadline mt-5'>Upcoming Events</p>

        {
          getdata_upcomming.length > 0 ?

            getdata_upcomming.map((event) => {
              const countdown = getCountdown(event.fromdate, event.todate);

              // Set color based on event status
              let statusColor = '';
              if (countdown.status === 'Coming Soon') {
                statusColor = 'black';  // Color for Coming Soon
              } else if (countdown.status === 'In Progress') {
                statusColor = 'green';  // Color for In Progress
              }

              return (
                <React.Fragment key={event.id}>
                  <Container className='event'>
                    <Row>
                      <Col lg={4} md={5}>
                        <div className='d-none d-md-block' data-aos="fade-right">
                          <img src={event.img} className='eventimg pb-lg-4 pb-md-4' alt={event.area} />
                        </div>
                      </Col>
                      <Col lg={8} md={7} className='text-start coll'>
                        <p className='upcomingtext1 mb-0 ms-2'>
                          Time Duration
                          <span
                            className='soontext d-none d-lg-inline-block'
                            style={{ color: statusColor }}  // Dynamically change color
                          >
                            {countdown.status}
                          </span>
                        </p>

                        {/* Countdown display */}
                        {countdown.status === 'Coming Soon' ? (
                          <>
                            <Container className='soonbox d-none d-lg-inline-block p-1' style={{ marginLeft: "350px" }}>
                              {countdown.days}<br />
                              <span className="fs-6" style={{ color: "#f96945" }}>Day</span>
                            </Container>
                            <Container className='soonbox d-none d-lg-inline-block p-1' style={{ marginLeft: "400px" }}>
                              {countdown.hours}<br />
                              <span className="fs-6" style={{ color: "#f96945" }}>Hour</span>
                            </Container>
                            <Container className='soonbox d-none d-lg-inline-block p-1' style={{ marginLeft: "450px" }}>
                              {countdown.minutes}<br />
                              <span className="fs-6" style={{ color: "#f96945" }}>Min</span>
                            </Container>
                            <Container className={`soonbox d-none d-lg-inline-block p-1 animate-seconds`} style={{ marginLeft: "500px" }} key={animateKey}>
                              {countdown.seconds}<br />
                              <span className="fs-6" style={{ color: "#f96945" }}>Sec</span>
                            </Container>
                          </>
                        ) : countdown.status === 'In Progress' ? (
                          <p className='upcomingtext2 mb-0 ms-3 text-success'></p>
                        ) : (
                          <p className='upcomingtext2 mb-0 ms-3 text-danger'>Event Ended</p>
                        )}

                        <p className='upcomingtext2 mb-0 ms-3'>{event.fromdate} To {event.todate}</p>
                        <p className='upcomingtext1 mb-0 ms-3'>Area</p>
                        <p className='upcomingtext2 mb-0 ms-3'>{event.area}</p>
                        <p className='upcomingtext1 mb-0 ms-3'>Purpose of the campaign</p>
                        <p className='upcomingtext2 mb-0 ms-3'>{event.purpose}</p>
                      </Col>
                    </Row>
                  </Container>
                </React.Fragment>
              );

            }
            )
            :
            "Comming Soon"}
      </Container>
    </>
  );
};

export default Upcomingevents;
