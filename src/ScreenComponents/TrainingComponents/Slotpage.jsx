import React, { useEffect, useState, useSyncExternalStore } from 'react';
import lghead from "../../Assets/Assets/MainBanner/lghead.jpg";
import { Container, Row, Col } from 'react-bootstrap';
import "../../Components/Slotpage.css";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import axios from 'axios';

const Slotpage = () => {
    const [slotDate, setSlotDate] = useState("")
    const [slotDate1, setSlotDate1] = useState("")

    const location = useLocation()
    const navigate = useNavigate(); // Get the navigate function from useNavigate hook
    const [category, setcategory] = useState("");
    const [sessions, setSessions] = useState([]);
    console.log("sessions", sessions);

    const [categoryData, setCategoryData] = useState({
        heading: "",
        data: "",
        note: ""
    });
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    useEffect(() => {
        if (category == "RTO – Learner Driving License Holder Training") {
            setCategoryData({
                heading: "Road Safety & Traffic Awareness programme jointly organized by RTO Nashik and Nashik First.",
                data: "This programme is conducted exclusively designed for people holding Learner License & applied for Permanent License. Consists of 2 hour training at Traffic Education Park and knowledge sharing on Traffic Rules, Defensive Driving, Right of Way, Safety measures, Causes of Road Accidents, Do’s and Don’ts while driving. Participants are given attendance certificate which is required to be submitted to RTO before final test.",
                note: "Note : Applicants for a Permanent Driving License who have a Learner Driving License."
            })
        } else if (category == "School Students Training – Group") {
            setCategoryData({
                heading: "This programme is exclusively designed for school students from Std. 5th to Std. 10th.",
                data: "Consists of 2 hours training to create awareness of Basic traffic rules, Road signs, Safety measures and tools, Dos & Don’ts of traffic rules in high school students.",
                note: "Note : No individual bookings accepted. To be booked By the Concerned teacher for batch size of minimum 30 & maximum 50 participants."
            })
        } else if (category == "College/Organization Training – Group") {
            setCategoryData({
                heading: "This programme is exclusively designed for College students, Employees working in various organisations & all other types of adult groups.",
                data: "Consists of 2 hour training to create awareness of Traffic rules, Road signs, Safety measures and tools, Causes of accidents, Dos & Don’ts of traffic rules.",
                note: "Note : No individual bookings accepted. To be booked By the Concerned coordinator for batch size of minimum 30 & maximum 50 participants."
            })
        } else if (category == "RTO – Suspended Driving License Holders Training") {
            setCategoryData({
                heading: "Road Safety & Traffic Awareness programme jointly organized by RTO, Nashik and Nashik First.",
                data: "Consists of 2 hour training at Traffic Education Park and knowledge sharing on Traffic Rules and Licenses Suspension rules, Defensive Driving, Right of Way, Safety Measures, Causes of Road Accidents, Dos and Don’ts while driving. Participants are given attendance certificate which is required to be submitted to RTO to get back suspended license.",
                note: ""
            })
        } else if (category == "RTO – Training for School Bus Driver") {
            setCategoryData({
                heading: "Road Safety & Traffic Awareness programme jointly organized by RTO, Nashik and Nashik First.",
                data: "Consists of 2 hour training at Traffic Education Park and knowledge sharing on Traffic Rules, Defensive Driving, Right of Way, Safety measures, Causes of Road Accidents, Dos and Don’ts while driving. Participants are given attendance certificate which is required to be submitted to RTO to get new permit or renewal of permit.",
                note: ""
            })
        }
    }, [category])
    const [slotDatefortest, setslotDatefortest] = useState("")

    useEffect(() => {
        if (location) {
            console.log("location state : ", location.state);
            setcategory(location.state.category)

            const date = new Date(location.state.selectedDate);
            console.log("slotdate", date);
            // Format options
            const options = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };
            const day = date.getDate(); // Day without leading zero
            const month = date.getMonth() + 1; // Month without leading zero (0-indexed)
            const year = date.getFullYear();
            // Get the formatted date in 'Tuesday 10/09/2024' format
            const formattedDate1 = `${month}/${day}/${year}`;
            const formattedDate = date.toLocaleDateString('en-GB', options).replace(',', '');
            setSlotDate(formattedDate)
            setSlotDate1(formattedDate1)
            const year1 = date.getFullYear();
            const month1 = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
            const day1 = String(date.getDate()).padStart(2, '0'); // Ensure two digits for day

            const formattedDate2 = `${year1}-${month1}-${day1}`;
            setslotDatefortest(formattedDate2);

        }
    }, [location])

    useEffect(() => {
        if (category && slotDate1) {

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
                slotdate: slotDate1,
                category: category
            }
            axios.post(`/Sessionslot/get-getSessionbySessionslot`, data, {
                headers: {
                    "Content-Type": "application/json",
                    // Add any additional headers if required
                }
            }).then((result) => {
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
                        {categoryData.heading}
                        {/* Road Safety & Traffic Awareness programme jointly <br />
                        organized by RTO, Nashik and Nashik First. */}
                    </p>
                    <p className='slotpagepara text-start'>
                        {categoryData.data}
                        {/* This programme is conducted exclusively for people holding Learner License & applied for Permanent License.
                        It consists of 2-hour training at Traffic Education Park with knowledge sharing on Traffic Rules, Defensive Driving,
                        Right of Way, Safety measures, Causes of Road Accidents, and Do’s and Don’ts while driving.
                        Participants are provided with attendance certificates required to be submitted to the RTO before the final test.
                    */}
                    </p>
                    <p className='slotpagepara text-start' style={{ fontStyle: 'italic', color: "#c90919" }}>
                        {categoryData.note}
                    </p>
                    {(category == "School Students Training – Group" || category == "College/Organization Training – Group") &&

                        <p className='slotpagepara text-start' style={{ fontWeight: 'bold', color: "#032377" }}>
                            (Please Call <a href="tel:+0253-2315966">0253-2315966</a> or <a href="tel:+917796116555">7796116555</a> for Bookings)
                        </p>
                    }
                    <Container className='datetime p-lg-3'>
                        Click on the calendar date & time slot, then fill out the form below to schedule your training.
                    </Container>

                    <h1 className='daydate mt-5'>{slotDate}</h1>

                    <Container className='mt-md-5'>
                        <Row>
                            {
                                sessions.length == 0 ? "No Slots Available"
                                    :
                                    sessions.filter(slot => slot.slotType !== "onsite").map((session, index) => {
                                        let time = session.time; // Example input time in 24-hour format

                                        // Split the time into hours and minutes
                                        let [hours, minutes] = time.split(':');

                                        // Convert hours to 12-hour format and determine AM/PM
                                        let period = 'P.M.';
                                        if (hours >= 9) {
                                            period = 'A.M.';
                                            if (hours <= 9) {
                                                hours -= 12; // Convert hours greater than 12 to 12-hour format
                                            }
                                        } else if (hours === '0') {
                                            hours = 12; // Convert 00:xx to 12:xx A.M.
                                        }

                                        // Format the hours and minutes to ensure two digits for minutes

                                        const formatTimeTo12Hour = (time) => {
                                            const [hour, minute] = time.split(':');
                                            const hours = parseInt(hour, 10);
                                            const period = hours >= 12 ? 'PM' : 'AM';
                                            const formattedHour = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
                                            return `${formattedHour}:${minute} ${period}`;
                                        };
                                        let formattedTime = formatTimeTo12Hour(session.time)
                                        const isAvailable = session.available_seats > 0;

                                        const buttonStyle = {
                                            border: "0px",
                                            cursor: isAvailable ? 'pointer' : 'not-allowed',
                                            opacity: isAvailable ? 1 : 0.5, // Make the button slightly transparent when unavailable
                                        };
                                        return (
                                            <Col key={index} lg={6} sm={6} md={6} className={index % 2 === 0 ? 'pe-lg-5 pt-2' : 'ps-lg-5 pt-2'}>
                                                <button
                                                    onClick={() => {
                                                        if (isAvailable) {
                                                            // Check if category is either 'abc' or 'xyz'
                                                            if (

                                                                category === "RTO – Learner Driving License Holder Training") {
                                                                localStorage.setItem('slotsid', session.id);
                                                                navigate("/bookingpage", {
                                                                    state: {
                                                                        selectedDate: slotDate,
                                                                        selectedTime: `${formattedTime} ${session.title ? ` - ${session.title}` : ""}`,
                                                                        category: category,
                                                                        temodate: slotDatefortest,

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
                                                    <Container className={`${session.available_seats > 0 ? "session1" : "session"} p-lg-3`}>
                                                        {formatTimeTo12Hour(session.time)}  {session.title ? `- ${session.title}` : ""}
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
