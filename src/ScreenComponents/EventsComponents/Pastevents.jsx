import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "../../Components/Pastevents.css";
import banner from "../../Assets/Assets/Pastevents/banner.png"
import event1 from "../../Assets/Assets/Pastevents/event1.png"
import event2 from "../../Assets/Assets/Pastevents/event2.png"
import event3 from "../../Assets/Assets/Pastevents/event3.png"
import event4 from "../../Assets/Assets/Pastevents/event4.png"
import event5 from "../../Assets/Assets/Pastevents/event5.png"
import event6 from "../../Assets/Assets/Pastevents/event6.png"
import event7 from "../../Assets/Assets/Pastevents/event7.png"
import event8 from "../../Assets/Assets/Pastevents/event8.png"
import event9 from "../../Assets/Assets/Pastevents/event9.png"



const Pastevents = () => {
  return (
    <>

      <Container fluid className='p-0'>
        <img src={banner} className='w-100 eventbanner' />
      </Container>

      <Container fluid className='trainingeventbg mt-5 pb-5'>
        <p className='trainingeventheadline'>Special Training Event</p>
        <Row className='mt-4'>
          <Col lg={4}>
            <Container className='ms-0'>
              <img src={event1} className='eventimg m-0' />
            </Container>
          </Col>
          <Col lg={4}>
            <Container className='ms-0'>
              <img src={event2} className='eventimg m-0 p-0' />
            </Container>
          </Col>

          <Col lg={4}>
            <Container className='ms-0'>
              <img src={event3} className='eventimg m-0' />
            </Container>
          </Col>


        </Row>
      </Container>
    </>
  )
}

export default Pastevents
