import React, { useEffect, useState } from 'react';
import lghead from "../../Assets/Assets/MainBanner/lghead.png";
import { Container, Row, Col } from 'react-bootstrap';
import "../../Components/Slotpage.css";
import { useLocation } from 'react-router-dom';


const Bookingpage = () => {

  const [slotTime, setSlotTime] = useState("")
  const location = useLocation()


  useEffect(() => {
    if (location) {
      console.log("location.state", location.state.selectedDate);
      console.log("location.selectedTime", location.state.selectedTime);
      setSlotTime(`${location.state.selectedDate} ${location.state.selectedTime}`)

    }
  }, [location])

  return (
    <>
      <Container fluid className='m-0 p-0'>
        <img src={lghead} className='w-100' alt="Header" />
      </Container>

      <Container fluid className='slotbg pb-5 mb-4'>
        <Container>
          <p className='slotheadline text-start m-0 pt-5'>
            Road Safety & Traffic Awareness programme jointly <br />
            organized by RTO, Nashik and Nashik First.
          </p>
          <p className='slotpagepara text-start'>
            This programme is conducted exclusively for people holding Learner License & applied for Permanent License.
            It consists of 2-hour training at Traffic Education Park with knowledge sharing on Traffic Rules, Defensive Driving,
            Right of Way, Safety measures, Causes of Road Accidents, and Do’s and Don’ts while driving.
            Participants are provided with attendance certificates required to be submitted to the RTO before the final test.
          </p>

          <Container className='datetime p-3'>
            Click on the calendar date & time slot, then fill out the form below to schedule your training.
          </Container>
        </Container>

        <Container className='bookingdetails mt-5 pt-4 pb-5'>
          <h1 className='bookingheadline mt-3'>Please fill in your details</h1>
          <div className='form-group mb-4'>
            <p className='bookingdate text-black text-start ms-4'>{"Booking Date"}</p>
            <p className='detailtext text-black text-start ms-4 mb-4'>{slotTime}</p>
            <p className='bookingdate text-black text-start ms-4 mt-3'>{"Learning License Number*"}</p>
            <input
              name=''
              placeholder={"MH15/0012345/2021"}
              className='dateinput p-3 m-0 mt-0 '
            />
            <p className='bookingdate text-black text-start ms-4 mt-3'>{"First Name*"}</p>
            <input
              name=''
              placeholder={"First Name"}
              className='dateinput p-3 m-0 mt-0 '
            />
            <p className='bookingdate text-black text-start ms-4 mt-3'>{"Last Name*"}</p>
            <input
              name=''
              placeholder={"Last Name"}
              className='dateinput p-3 m-0 mt-0 '
            />
            <p className='bookingdate text-black text-start ms-4 mt-3'>{"Email*"}</p>
            <input
              name=''
              placeholder={"Email"}
              className='dateinput p-3 m-0 mt-0 '
            />
            <p className='bookingdate text-black text-start ms-4 mt-3'>{"Phone*"}</p>
            <input
              name=''
              placeholder={"Phone "}
              className='dateinput p-3 m-0 mt-0 '
            />
            <p className='bookingdate text-black text-start ms-4 mt-3'>{"Vehical type*"}</p>

            {/* <Container> */}
            <Row>
              <Col xs={2} sm={1} lg={1} className='ms-lg-4 ps-lg-3'>
                <input type='checkbox' className='radiobtn mt-1' />
              </Col>
              <Col xs={9} sm={11} lg={10} className='text-start'>
                <label className="btntext ">2 Wheelers</label>
              </Col>

              <Col xs={2} sm={1} lg={1} className='ms-lg-4'>
                <input type='checkbox' className='radiobtn mt-1' />
              </Col>
              <Col xs={9} sm={11} lg={10} className='text-start'>
                <label className="btntext">3/5 Wheelers</label>
              </Col>

              <Col xs={2} sm={1} lg={1} className='ms-lg-4'>
                <input type='checkbox' className='radiobtn mt-1' />
              </Col>
              <Col xs={9} sm={11} lg={10} className='text-start'>
                <label className="btntext">4 Wheelers Heavy</label>
              </Col>

              <Col xs={2} sm={1} lg={1} className='ms-lg-4'>
                <input type='checkbox' className='radiobtn mt-1' />
              </Col>
              <Col xs={9} sm={11} lg={10} className='text-start'>
                <label className="btntext">4 Wheelers Light</label>
              </Col>
            </Row>

            {/* </Container> */}



          </div>
          <div className='text-center'>
            <button className='returnbutton p-3 mt-2'>
              Book Now
            </button>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Bookingpage;
