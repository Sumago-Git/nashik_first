import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import pastbanner from "../../Assets/Assets/Pastevents/pastbanner.png"
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
  const [eventgallery_data , setevent] = useState([]);

  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowFunc = (id) => {
    handleShow()
    setId(id)
  }

  useEffect(()=>{
    Aos.init();
  },[])

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
        setevent(res.data.responseData)
        console.log(res.data.responseData);
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
        <p className='trainingeventheadline mt-5 pt-5 text-center'>Special Event</p>
        <Row className='mx-5 justify-content-center'>
          {
            pastgetdata.map((a) => {
              return (
                <>
                  <Col xs={12} sm={6} md={4} className='mb-2' data-aos="fade-up" >
                    <img src={a.img} className='events img-fluid' alt={a.title} />
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
          {eventgallery_data.map((event ,index) => (
            <>
              <Col xs={12} sm={6} md={4} className={index >= 3 ? 'mt-3 mb-2' : 'mb-2'}> {/* Reduced the margin-top and margin-bottom */}
                <img src={event.img} className='events img-fluid' alt={event.title} />
              </Col>
            </>
          ))}
          <Modal size="md" show={show} onHide={handleClose}>
            <Modal.Body>
              <img src={eventGallery[id]} className=' img-fluid' alt={`Event Gallery `} />
            </Modal.Body>
          </Modal>
        </Row>
      </Container>
    </>
  )
}

export default Pastevents
