import React, { useEffect, useState } from 'react';
import lghead from "../../Assets/Assets/MainBanner/lghead.png";
import { Container, Row, Col } from 'react-bootstrap';
import "../../Components/Slotpage.css";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Slotpage = () => {
    const [slotDate, setSlotDate] = useState("")
    const location = useLocation()
    const navigate = useNavigate(); // Get the navigate function from useNavigate hook

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])
    useEffect(() => {
        if (location) {
            const date = new Date(location.state.selectedDate);
            // Format options
            const options = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };

            // Get the formatted date in 'Tuesday 10/09/2024' format
            const formattedDate = date.toLocaleDateString('en-GB', options).replace(',', '');
            setSlotDate(formattedDate)

        }
    }, [location])



    const sessions = [
        { time: "10:30 A.M.", session: "Session 1" },
        { time: "03:30 P.M.", session: "Session 2" }
    ];




    return (
        <>
            <Container fluid className='p-0 m-0'>
                <img src={lghead} className='w-100' alt="Header" />
            </Container>

            <Container fluid className='slotbg'>
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

                    <Container className='datetime p-lg-3'>
                        Click on the calendar date & time slot, then fill out the form below to schedule your training.
                    </Container>

                    <h1 className='daydate mt-5'>{slotDate}</h1>

                    <Container className='mt-lg-5'>
                        <Row>
                            {sessions.map((session, index) =>
                            (
                                <Col key={index} lg={6} sm={12} className={index === 0 ? 'pe-lg-5' : 'ps-lg-5'}>
                                    <button onClick={() => navigate("/bookingpage", { state: { selectedDate: slotDate, selectedTime: `${session.time}-${session.session}` } })} className='w-100' style={{ border: "0px" }}> <Container className='session p-lg-3'>
                                        {session.time} - {session.session}
                                    </Container></button>
                                </Col>
                            )
                            )
                            }
                            <Col lg={12} className='mt-lg-5 pt-lg-3 pb-5 mb-lg-2 mt-4'>
                                <Link to='/training'><button className='returnbutton p-lg-3'>
                                    Return
                                </button></Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </>
    );
}

export default Slotpage;
