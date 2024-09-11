import React, { useEffect, useState } from 'react';
import lghead from "../../Assets/Assets/MainBanner/lghead.png";
import { Container, Row, Col } from 'react-bootstrap';
import "../../Components/Slotpage.css";
import { useLocation } from 'react-router-dom';

const Slotpage = () => {
    const [slotDate, setSlotDate] = useState("")
    const location = useLocation()

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

                    <Container className='datetime p-3'>
                        Click on the calendar date & time slot, then fill out the form below to schedule your training.
                    </Container>

                    <h1 className='daydate mt-5'>{slotDate}</h1>

                    <Container className='mt-5'>
                        <Row>
                            {sessions.map((session, index) => (
                                <Col key={index} lg={6} className={index === 0 ? 'pe-5' : 'ps-5'}>
                                    <Container className='session p-3'>
                                        {session.time} - {session.session}
                                    </Container>
                                </Col>
                            ))}

                            <Col lg={12} className='mt-5 pt-3 pb-5 mb-2'>
                                <button className='returnbutton p-3'>
                                    Return
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </>
    );
}

export default Slotpage;
