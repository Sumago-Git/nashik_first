import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Modal, Card } from 'react-bootstrap'
import pastbanner from "../../Assets/Assets/Pastevents/pastbanner1.jpg"
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
import axios from 'axios';

import Aos from 'aos'
import 'aos/dist/aos.css'


const specialEvents = [
  event8, event2, event3
];

const eventGallery = [
  event4, event5, event6, event7, event1, event9
];

const Pastevents = () => {

  const [pastgetdata, setpastgetdata] = useState([]);
  const [eventgallery_data, setevent] = useState([]);
  const [galleryId, setGalleryId] = useState()
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [id, setId] = useState();
  console.log("eventgallery_data", eventgallery_data);

  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);

  // const handleShowFunc = (id) => {
  //   handleShow()
  //   setId(id)
  // }

  useEffect(() => {
    Aos.init();
  }, [])

  const getdata = () => {
    axios.get('PostEvents/get-PostEvents')
      .then((res) => {
        setpastgetdata(res.data.responseData)
        console.log(res.data.responseData);
      })
      .catch((err) => {
        console.log(err);

      })
  }

  const eventget_data = () => {
    axios.get('EventGallary/get-EventGallary')
      .then((res) => {
        setevent(res.data.responseData || []);
      })
      .catch((err) => {
        console.log(err);

      })
  }

  useEffect(() => {
    getdata();
    eventget_data();
  }, [])

  return (
    <>
      <Container fluid className='p-0'>
        <img src={pastbanner} className='w-100 img-fluid' alt="Banner" />
      </Container>

      <Container fluid className='trainingeventbg pb-lg-5'>
        <p className='trainingeventheadline mt-0 pt-5 text-center'>Special Event</p>
        <Row className='mx-5 justify-content-center'>
          {pastgetdata.length == 0 ?
            <h6>Currently, no special events are available.</h6>
            :
            pastgetdata.map((a, id) => {
              return (
                <>
                  <Col xs={12} sm={6} md={4} onClick={() => {
                    setGalleryId(id)
                    setShow(true)
                  }} className='mb-2' data-aos="fade-up" >
                    <img src={a.img} className='events img-fluid' alt={a.title} />
                    <Card.Text className='my-3 cardtext text-center'>
                      {a.title}
                    </Card.Text>
                  </Col>
                </>
              )
            })
          }
        </Row>
      </Container>

      <Container fluid className='trainingeventbg pb-5'>
        <p className='trainingeventheadline mt-lg-5 pt-5  text-center'>Event Gallery</p>
        <Row className='mx-5 p-0 justify-content-center'>
          {eventgallery_data?.map((event, index) => (
            <>
              <Col xs={12} sm={6} md={4} onClick={() => {
                setGalleryId(index)
                setShow1(true)
              }} className={index >= 3 ? 'mt-3 mb-2' : 'mb-2'}> {/* Reduced the margin-top and margin-bottom */}
                <img src={event.img} className='events img-fluid' alt={event.title} />
                <Card.Text className='my-3 cardtext text-center'>
                  {event.title}
                </Card.Text>
              </Col>
            </>
          ))}
          <Modal size="md" show={show} onHide={handleClose}>
            <Modal.Body>
              <img src={pastgetdata[galleryId]?.img} className=' img-fluid' alt={`Event Gallery `} />
            </Modal.Body>
          </Modal>
          {
            eventgallery_data.length > 0 &&
            <Modal size="md" show={show1} onHide={handleClose1}>
              <Modal.Body>
                <img src={eventgallery_data[galleryId]?.img} className=' img-fluid' alt={`Event Gallery `} />
              </Modal.Body>
            </Modal>
          }
        </Row>
      </Container>
    </>
  )
}

export default Pastevents
