import React, { useState } from "react";
import { Container, Table, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import leftarrow from "../../Assets/Assets/Training/leftarrow.png";
import rightarrow from "../../Assets/Assets/Training/rightarrow.png";
import lghead from "../../Assets/Assets/MainBanner/lghead.jpg"
import img4 from "../../Assets/Assets/Home/traffic_education_mob.png"
import "../../Components/Calender.css";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

// Define static event data with text
const eventData = [
  { date: '2024-09-05', text: 'Holiday' },
  { date: '2024-09-15', text: 'Available' },
  { date: '2024-09-25', text: 'Meeting' },
  // Add more event data here
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredDay, setHoveredDay] = useState(null);
  const navigate = useNavigate(); // Get the navigate function from useNavigate hook

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const changeMonth = (direction) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1);
      } else if (direction === 'next') {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);
  const startingDay = getFirstDayOfMonth(currentMonth, currentYear);
  const firstWeek = Array(startingDay).fill(null).concat(daysArray.slice(0, 7 - startingDay));
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };
  const weeks = chunkArray(daysArray.slice(7 - startingDay), 7);
  weeks.unshift(firstWeek);
  const lastWeek = weeks[weeks.length - 1];
  const remainingCells = 7 - lastWeek.length;
  const nextMonthDays = Array.from({ length: remainingCells }, (_, index) => index + 1);
  lastWeek.push(...nextMonthDays.map(day => ({ day, isNextMonth: true })));

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Get today's date
  const today = new Date();
  const isCurrentMonth = currentMonth === today.getMonth() && currentYear === today.getFullYear();

  // Helper function to check if a date has an event and return the text
  const getEventText = (date) => {
    const event = eventData.find(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear();
    });
    return event ? event.text : null;
  };

  // Helper function to handle date click and redirect
  const handleDateClick = (day) => {
    if (day) {
      const clickedDate = new Date(currentYear, currentMonth, day);
      // Redirect to another page and pass the date as state
      navigate("/slotpage", { state: { selectedDate: clickedDate ,category : selectedButton} });
    }
  };

  // Compare date to check if it is in the past
  const isPastDate = (day) => {
    const dateToCheck = new Date(currentYear, currentMonth, day);
    return dateToCheck < today.setHours(0, 0, 0, 0); // Disable all past dates before today
  };

  const [selectedButton, setSelectedButton] = useState(1);
  
  const handleButtonClick = (buttonNumber,btncategory) => {
    setSelectedButton(btncategory );
    console.log(selectedButton);
    
  };

  return (
    <>
      <Container fluid className='m-0 p-0'>
        <img src={lghead} className='lghead d-none d-md-block' />
        <img src={img4} className='img4 d-block d-md-none' />
      </Container>

      <Container fluid className="slotbg pb-5 mb-4">

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

          <Container className='datetime p-3 mt-lg-4'>
            Click on the calendar date & time slot, then fill out the form below to schedule your training.
          </Container>

          <Nav variant="tabs" defaultActiveKey="/home" className="mt-lg-4 mx-auto ">
            <Row>
              <Col md={4} className="p-0">
                <Nav.Item className="calendertabs" >
                  <Nav.Link eventKey="link-1" className="text-black " style={{ backgroundColor: "none" }}>
                    {/* <button type="button" className="btn3d btn btn-default w-100 calendertabs" style={{ minHeight: "70px" }}><span class="glyphicon glyphicon-download-alt"></span> RTO – Learner Driving License Holder Training</button> */}

                    <Button
                      variant={selectedButton === 1 ? "success" : "#ffefeb"}
                      className="me-2 w-100 p-3 tabsbtn"
                      onClick={() => handleButtonClick(1, "RTO – Learner Driving License Holder Training")}
                    >
                      RTO – Learner Driving License Holder Training
                    </Button>
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col md={4} className="p-0">
                <Nav.Item className="calendertabs">
                  <Nav.Link eventKey="link-2" className="text-black" style={{ backgroundColor: "none" }}>
                    {/* <button type="button" className="btn3d btn btn-default w-100 calendertabs" style={{ minHeight: "70px" }}><span class="glyphicon glyphicon-download-alt"></span> RTO – Suspended Driving License Holders Training</button> */}
                    <Button
                      variant={selectedButton === 2 ? "success" : "#ffefeb"}
                      className="me-2 w-100 p-3 tabsbtn"
                      onClick={() => handleButtonClick(2 ,"RTO – Suspended Driving License Holders Training")}
                    >
                      RTO – Suspended Driving License Holders Training
                    </Button>
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col md={4} className="p-0">
                <Nav.Item className="calendertabs">
                  <Nav.Link eventKey="link-3" className="text-black">
                    {/* <button type="button" className="btn3d btn btn-default w-100 calendertabs" style={{ minHeight: "70px" }}><span class="glyphicon glyphicon-download-alt"></span>RTO – Training for School Bus Driver</button> */}
                    <Button
                      variant={selectedButton === 3 ? "success" : "#ffefeb"}
                      className="me-2 w-100 p-3 tabsbtn"
                      onClick={() => handleButtonClick(3 , "RTO – Training for School Bus Driver")}
                    >
                      RTO – Training for School Bus Driver
                    </Button>
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col md={4} className="p-0">
                <Nav.Item className="calendertabs">
                  <Nav.Link eventKey="link-4" className="text-black">
                    {/* <button type="button" className="btn3d btn btn-default w-100 calendertabs" style={{ minHeight: "70px" }}><span class="glyphicon glyphicon-download-alt"></span>School Students Training – Group</button> */}
                    <Button
                      variant={selectedButton === 4 ? "success" : "#ffefeb"}
                      className="me-2 w-100 p-3 tabsbtn"
                      onClick={() => handleButtonClick(4 , "School Students Training – Group")}
                    >
                      School Students Training – Group
                    </Button>
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col md={4} className="p-0">
                <Nav.Item className="calendertabs">
                  <Nav.Link eventKey="link-5" className="text-black">
                    {/* <button type="button" className="btn3d btn btn-default w-100 calendertabs" style={{ minHeight: "70px" }}><span class="glyphicon glyphicon-download-alt"></span> College/Organization Training – Group</button> */}
                    <Button
                      variant={selectedButton === 5 ? "success" : "#ffefeb"}
                      className="me-2 w-100 p-3 tabsbtn"
                      onClick={() => handleButtonClick(5 , "College/Organization Training – Group")}
                    >
                      College/Organization Training – Group
                    </Button>
                  </Nav.Link>
                </Nav.Item>
              </Col>
              <Col md={4} className="p-0">
                <Nav.Item className="calendertabs">
                  <Nav.Link eventKey="link-6" className="text-black">
                    {/* <button type="button" className="btn3d btn btn-default w-100 calendertabs" style={{ minHeight: "70px" }}><span class="glyphicon glyphicon-download-alt"></span> College / Organization Training – Individual</button> */}
                    <Button
                      variant={selectedButton === 6 ? "success" : "#ffefeb"}
                      className="me-2 w-100 p-3 tabsbtn mb-3"
                      onClick={() => handleButtonClick(6 , "College / Organization Training – Individual")}
                    >
                      College / Organization Training – Individual
                    </Button>
                  </Nav.Link>
                </Nav.Item>
              </Col>
            </Row>
          </Nav>


        </Container>
        <Container className="calender ">
          <Col lg={12} className="mt-4 d-flex justify-content-center align-items-center">
            {/* Disable the left arrow if the user is on the current month */}
            <button
              className="btn ms-1"
              onClick={() => changeMonth('prev')}
              disabled={isCurrentMonth} // Disable if current month is being displayed
            >
              <img src={leftarrow} className="w-75 arrowimg mt-4" alt="Previous" />
            </button>
            <h3 className="calenderheadline mx-4 mt-4">
              {monthNames[currentMonth]} {currentYear}
            </h3>
            <button
              className="btn ms-1"
              onClick={() => changeMonth('next')}
            >
              <img src={rightarrow} className="w-75 arrowimg mt-4" alt="Next" />
            </button>
          </Col>

          <Container className="mt-4">
            <Table
              bordered
              responsive
              style={{
                tableLayout: 'fixed',
                borderCollapse: 'collapse'
              }}
            >
              <thead>
                <tr className="text-start">
                  {daysOfWeek.map((day) => (
                    <th key={day}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weeks.map((week, weekIndex) => (
                  <tr
                    key={weekIndex}
                    style={{ cursor: 'default' }} // Prevent pointer cursor
                  >
                    {week.map((day, dayIndex) => {
                      const date = day && new Date(currentYear, currentMonth, day);
                      const eventText = date && getEventText(date);
                      const disabled = day && isPastDate(day); // Check if day is in the past

                      return (
                        <td
                          key={dayIndex}
                          onMouseEnter={() => day && !disabled && setHoveredDay(day)}
                          onMouseLeave={() => day && !disabled && setHoveredDay(null)}
                          onClick={() => !disabled && handleDateClick(day)} // Handle date click only if it's not disabled
                          style={{
                            height: "100px",
                            textAlign: "end",
                            verticalAlign: "middle", // Center the text vertically
                            backgroundColor: day && (day.isNextMonth ? "#f0f0f0" : (disabled ? "#f9f9f9" : (day === hoveredDay ? "#e0e0e0" : "white"))),
                            color: day && (day.isNextMonth ? "#ccc" : disabled ? "#999" : "black"),
                            pointerEvents: day && (disabled ? "none" : "auto"), // Disable interaction for past days
                            transition: 'background-color 0.3s', // Smooth transition for background color change
                            fontFamily: "Poppins",
                            fontWeight: "600",

                          }}
                        >
                          {day && (day.isNextMonth ? day.day : day || "")}
                          {eventText && (
                            <div style={{ fontSize: '12px', marginTop: '5px' }}>
                              {eventText}
                            </div>
                          )}
                        </td>

                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Calendar;
