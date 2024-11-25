import React, { useEffect, useState, useSyncExternalStore } from 'react';
import lghead from "../../Assets/Assets/MainBanner/lghead.jpg";
import { Container, Row, Col } from 'react-bootstrap';
import "../../Components/Slotpage.css";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import axios from 'axios';

const Slotpage = () => {
    const [slotDate, setSlotDate] = useState("")
    const location = useLocation()
    const navigate = useNavigate(); // Get the navigate function from useNavigate hook
    const [category, setcategory] = useState("");
    const [sessions, setSessions] = useState([]);

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    useEffect(() => {
        if (location) {
            console.log("location state : ", location.state);
            setcategory(location.state.category)

            const date = new Date(location.state.selectedDate);
            // Format options
            const options = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };

            // Get the formatted date in 'Tuesday 10/09/2024' format
            const formattedDate = date.toLocaleDateString('en-GB', options).replace(',', '');
            setSlotDate(formattedDate)

        }
    }, [location])

    console.log("category", category);
    console.log("slotdate", slotDate);

    useEffect(() => {
        if (category && slotDate) {

            let value = slotDate
            const parts = value.split(' '); // Split the string by space
            const dateParts = parts[1].split('/'); // Split the date part (e.g., "27/11/2024") by "/"

            // Extract day, month, and year
            const day = dateParts[0];
            const month = dateParts[1];
            const year = dateParts[2];

            // Format to YYYY-MM-DD
            const formattedDate = `${month}/${day}/${year}`;

            let data = {
                slotdate: formattedDate,
                category: category
            }
            axios.post(`/Sessionslot/get-getSessionbySessionslot`, data, {
                headers: {
                    "Content-Type": "application/json",
                    // Add any additional headers if required
                }
            }).then((result) => {
                console.log("result", result.data.responseData);
                setSessions(result.data.responseData)
            }).catch((err) => {
                console.log("err", err);

            })
        }
    }, [category, slotDate])

    // const sessions = [
    //     { time: "10:30 A.M.", session: "Session 1" },
    //     { time: "03:30 P.M.", session: "Session 2" }
    // ];




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

                    <Container className='mt-md-5'>
                        <Row>
                            {
                                sessions.length == 0 ? "No Slots Available"
                                    :
                                    sessions.map((session, index) => {
                                        let time = session.time; // Example input time in 24-hour format

                                        // Split the time into hours and minutes
                                        let [hours, minutes] = time.split(':');

                                        // Convert hours to 12-hour format and determine AM/PM
                                        let period = 'A.M.';
                                        if (hours >= 12) {
                                            period = 'P.M.';
                                            if (hours > 12) {
                                                hours -= 12; // Convert hours greater than 12 to 12-hour format
                                            }
                                        } else if (hours === '0') {
                                            hours = 12; // Convert 00:xx to 12:xx A.M.
                                        }

                                        // Format the hours and minutes to ensure two digits for minutes
                                        let formattedTime = `${hours}:${minutes} ${period}`;
                                        console.log("formattedTime", formattedTime);
                                        console.log("session.title", session.title);
                                        const isAvailable = session.available_seats > 0;

                                        const buttonStyle = {
                                            border: "0px",
                                            cursor: isAvailable ? 'pointer' : 'not-allowed',
                                            opacity: isAvailable ? 1 : 0.5, // Make the button slightly transparent when unavailable
                                        };
                                        return (
                                            <Col key={index} lg={6} sm={6} md={6} className={index === 0 ? 'pe-lg-5' : 'ps-lg-5'}>
                                                <button
                                                    onClick={() => {
                                                        if (isAvailable) {
                                                            // Check if category is either 'abc' or 'xyz'
                                                            if (

                                                                category === "RTO – Learner Driving License Holder Training"
                                                                || category === "RTO – Suspended Driving License Holders Training"
                                                                || category === "RTO – Training for School Bus Driver") {
                                                                localStorage.setItem('slotsid', session.id);
                                                                navigate("/bookingpage", {
                                                                    state: {
                                                                        selectedDate: slotDate,
                                                                        selectedTime: `${formattedTime}-${session.title}`,
                                                                        category: category
                                                                    }
                                                                });
                                                                // Ensure window scrolls to top after navigation
                                                                setTimeout(() => window.scrollTo(0, 790), 0);
                                                            } else {
                                                                console.log("Navigation prevented: Invalid category");
                                                            }
                                                        }
                                                    }}
                                                    className='w-100'
                                                    style={buttonStyle}
                                                >
                                                    <Container className='session p-lg-3'>
                                                        {formattedTime} - {session.title}{session.id}
                                                    </Container>
                                                </button>
                                            </Col>
                                        );
                                    })}

                            <Col lg={12} className='mt-md-5 pt-lg-3 pb-5 mb-lg-2 mt-4'>
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
