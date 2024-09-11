import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import banner from "../../Assets/Assets/Pastevents/banner.png"
import "../../Components/Pastevents.css"
import event1 from "../../Assets/Assets/Pastevents/event1.png";
import event2 from "../../Assets/Assets/Pastevents/event2.png"
import event3 from "../../Assets/Assets/Pastevents/event3.png"
import event4 from "../../Assets/Assets/Pastevents/event4.png"
import event5 from "../../Assets/Assets/Pastevents/event5.png"
import event6 from "../../Assets/Assets/Pastevents/event6.png"
import event7 from "../../Assets/Assets/Pastevents/event7.png"
import event8 from "../../Assets/Assets/Pastevents/event8.png"
import event9 from "../../Assets/Assets/Pastevents/event9.png"

const specialEvents = [
  event1, event2, event3
];

const eventGallery = [
  event4, event5, event6, event7, event8, event9
];

const Pastevents = () => {
  return (
    <>
      <Container fluid className='p-0'>
        <img src={banner} className='w-100 img-fluid' alt="Banner" />
      </Container>

      <Container fluid className='trainingeventbg pb-5'>
        <p className='trainingeventheadline mt-5 pt-5 text-center'>Special Training Event</p>
        <Row>
          {specialEvents.map((event, index) => (
            <Col xs={12} sm={6} md={4} key={index} className='mb-4'>
              <img src={event} className='events img-fluid' alt={`Event ${index + 1}`} />
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid className='trainingeventbg pb-5'>
        <p className='trainingeventheadline mt-5 pt-5 text-center'>Event Gallery</p>
        <Row>
          {eventGallery.map((event, index) => (
            <Col xs={12} sm={6} md={4} key={index} className={index >= 3 ? 'mt-5 mb-4' : 'mb-4'}>
              <img src={event} className='events img-fluid' alt={`Event Gallery ${index + 1}`} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Pastevents
