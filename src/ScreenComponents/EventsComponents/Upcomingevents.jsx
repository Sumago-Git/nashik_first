import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import upcomingbanner from "../../Assets/Assets/Pastevents/upcomingbanner.png";
import "../../Components/Upcomingevents.css";
import upcoming1 from "../../Assets/Assets/Upcomingevents/upcoming1.png";

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
  return (
    <>
      <Container fluid className='p-0'>
        <img src={upcomingbanner} className='w-100 eventbanner' alt="Event Banner" />
      </Container>

      <Container fluid className='upcomingbg pb-5'>
        <p className='upcomingheadline mt-5'>Upcoming Events</p>

        {eventsData.map((event) => (
          <React.Fragment key={event.id}>
            <Container className='event '>
              <Row >
                <Col lg={4} md={5}>
                  <div className=' d-none d-md-block '>
                    <img src={event.image} className='eventimg pb-lg-4 pb-md-4' alt="Event" />
                  </div>
                </Col>
                <Col lg={8} md={7} className='text-start coll'>
                  <p className='upcomingtext1 mb-0 ms-3'>Time Duration <span className='soontext d-none d-lg-inline-block'>COMING SOON</span></p>
                  <Container className='soonbox d-none d-lg-inline-block' style={{ marginLeft: "420px" }}>05</Container>
                  <Container className='soonbox d-none d-lg-inline-block' style={{ marginLeft: "470px" }}>55</Container>
                  <Container className='soonbox d-none d-lg-inline-block' style={{ marginLeft: "520px" }}>00</Container>
                  <p className='upcomingtext2 mb-0 ms-3'>{event.timeDuration}</p>
                  <p className='upcomingtext1 mb-0 ms-3'>Area</p>
                  <p className='upcomingtext2 mb-0 ms-3'>{event.area}</p>
                  <p className='upcomingtext1 mb-0 ms-3'>Purpose of the campaign</p>
                  <p className='upcomingtext2 ms-3'>
                    {event.purpose.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </Col>
              </Row>
            </Container>
            {/* Show image on medium and larger screens, hide on smaller screens */}

          </React.Fragment>
        ))}
      </Container>
    </>
  );
};

export default Upcomingevents;
