


import React, { useState, useSyncExternalStore } from "react";
import { Container, Table, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import leftarrow from "../../Assets/Assets/Training/leftarrow.png";
import rightarrow from "../../Assets/Assets/Training/rightarrow.png";
import lghead from "../../Assets/Assets/MainBanner/lghead.jpg"
import img4 from "../../Assets/Assets/Home/traffic_education_mob.png"
import "../../Components/Calender.css";
import Nav from 'react-bootstrap/Nav';

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

  const specialDates = [
    { day: 15, label: "Holiday", color: "#ecc2c2", bgColor: "#742929" },
    { day: 18, label: "Closed", color: "red", bgColor: "#ffd4d4" },
    { day: 22, label: "Available", color: "green", bgColor: "#d4ffd4" },
  ];

  // Function to get the label and styling details for a specific day
  const getSpecialDateDetails = (day) => {
    return specialDates.find((special) => special.day === day) || {};
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
      window.scrollTo(0, 0);
      // Redirect to another page and pass the date as state
      navigate("/slotpage", { state: { selectedDate: clickedDate, category: selectedButton } });
    }
  };

  const [selectedButton, setSelectedButton] = useState("RTO – Learner Driving License Holder Training");
  const [btno, setbrno] = useState(1, "RTO – Learner Driving License Holder Training");

  const handleButtonClick = (buttonNumber, btncategory) => {
    setSelectedButton(btncategory);
    setbrno(buttonNumber);
    // console.log(selectedButton);
    console.log("selected button : ", buttonNumber);
    // alert(`Selected button: ${btncategory}`);

  };


  // Compare date to check if it is in the past
  const isPastDate = (day) => {
    const dateToCheck = new Date(currentYear, currentMonth, day);
    return dateToCheck < today.setHours(0, 0, 0, 0); // Disable all past dates before today
  };

  return (
    <>
      <Container fluid className='m-0 p-0'>
        <img src={lghead} className='lghead d-none d-md-block' />
        <img src={img4} className='img4 d-block d-md-none' />
      </Container>

      <Container fluid className="slotbg pb-5 mb-4">
        {/* <Container className='datetime p-2 mt-2'>
          
        </Container> */}


        <Container>

          <p className='slotheadline text-start mt-3 pt-5'>
            <div className='datetime p-3 text-center'>
              Click on the calendar date & time slot, then fill out the form below to schedule your training.
            </div>
            <Nav variant="tabs" defaultActiveKey="/home" className="mt-lg-4 mx-auto ">
              <Row>
                <Col md={4} className="p-0">
                  <Nav.Item className="calendertabs" >
                    <Nav.Link eventKey="link-1" className="text-black " style={{ backgroundColor: "none" }}>
                      {/* <button type="button" className="btn3d btn btn-default w-100 calendertabs" style={{ minHeight: "70px" }} onClick={() => handleButtonClick(1 , "RTO – Learner Driving License Holder Training")}><span class="glyphicon glyphicon-download-alt"></span> RTO – Learner Driving License Holder Training</button> */}
                      <button
                        type="button"
                        className={`btn3d btn w-100 calendertabs custom-button ${btno === 1 ? 'selected' : ''}`}
                        style={{
                          backgroundColor: btno === 1 ? '#feeeea' : 'white', // Set selected background color
                          color: btno === 1 ? 'orange' : 'black' // Set text color based on selection
                        }}
                        onClick={() => handleButtonClick(1, "RTO – Learner Driving License Holder Training")}
                        aria-label="College / Organization Training – Individual Option 1"
                      >
                        <span className="glyphicon glyphicon-download-alt"></span> RTO – Learner Driving License Holder Training
                      </button>
                    </Nav.Link>
                  </Nav.Item>
                </Col>
                <Col md={4} className="p-0">
                  <Nav.Item className="calendertabs">
                    <Nav.Link eventKey="link-2" className="text-black" style={{ backgroundColor: "none" }}>
                      {/* <button type="button" className="btn3d btn btn-default w-100 calendertabs" style={{ minHeight: "70px" }} onClick={() => handleButtonClick(2, "RTO – Suspended Driving License Holders Training")}><span class="glyphicon glyphicon-download-alt"></span> RTO – Suspended Driving License Holders Training</button> */}


                      <button
                        type="button"
                        className={`btn3d btn w-100 calendertabs custom-button ${btno === 2 ? 'selected' : ''}`}
                        style={{
                          backgroundColor: btno === 2 ? '#feeeea' : 'white', // Set selected background color
                          color: btno === 2 ? 'orange' : 'black' // Set text color based on selection
                        }}
                        onClick={() => handleButtonClick(2, "RTO – Suspended Driving License Holders Training")}
                        aria-label="College / Organization Training – Individual Option 1"
                      >
                        <span className="glyphicon glyphicon-download-alt"></span>RTO – Suspended Driving License Holders Training
                      </button>

                    </Nav.Link>
                  </Nav.Item>
                </Col>
                <Col md={4} className="p-0">
                  <Nav.Item className="calendertabs">
                    <Nav.Link eventKey="link-3" className="text-black">
                      {/* <button type="button" className="btn3d btn btn-default w-100 calendertabs" style={{ minHeight: "70px" }} onClick={() => handleButtonClick(3, "RTO – Training for School Bus Driver")}  ><span class="glyphicon glyphicon-download-alt"></span>RTO – Training for School Bus Driver</button> */}
                      <button
                        type="button"
                        className={`btn3d btn w-100 calendertabs custom-button ${btno === 3 ? 'selected' : ''}`}
                        style={{
                          backgroundColor: btno === 3 ? '#feeeea' : 'white', // Set selected background color
                          color: btno === 3 ? 'orange' : 'black' // Set text color based on selection
                        }}
                        onClick={() => handleButtonClick(3, "RTO – Training for School Bus Driver")}
                        aria-label="College / Organization Training – Individual Option 1"
                      >
                        <span className="glyphicon glyphicon-download-alt"></span> RTO – Training for School Bus Driver
                      </button>
                    </Nav.Link>
                  </Nav.Item>
                </Col>
                <Col md={4} className="p-0">
                  <Nav.Item className="calendertabs">
                    <Nav.Link eventKey="link-4" className="text-black">
                      {/* <button type="button" className="btn3d btn btn-default w-100 calendertabs" style={{ minHeight: "70px" }} onClick={() => handleButtonClick(4, "School Students Training – Group")}  ><span class="glyphicon glyphicon-download-alt"></span>School Students Training – Group</button> */}
                      <button
                        type="button"
                        className={`btn3d btn w-100 calendertabs custom-button ${btno === 4 ? 'selected' : ''}`}
                        style={{
                          backgroundColor: btno === 4 ? '#feeeea' : 'white', // Set selected background color
                          color: btno === 4 ? 'orange' : 'black' // Set text color based on selection
                        }}
                        onClick={() => handleButtonClick(4, "School Students Training – Group")}
                        aria-label="College / Organization Training – Individual Option 1"
                      >
                        <span className="glyphicon glyphicon-download-alt"></span> School Students Training – Group
                      </button>

                    </Nav.Link>
                  </Nav.Item>
                </Col>
                <Col md={4} className="p-0">
                  <Nav.Item className="calendertabs">
                    <Nav.Link eventKey="link-5" className="text-black">
                      {/* <button type="button" className="btn3d btn btn-default w-100 calendertabs" style={{ minHeight: "70px" }} onClick={() => handleButtonClick(5, "College/Organization Training – Group")}  ><span class="glyphicon glyphicon-download-alt"></span> College/Organization Training – Group</button> */}

                      <button
                        type="button"
                        className={`btn3d btn w-100 calendertabs custom-button ${btno === 5 ? 'selected' : ''}`}
                        style={{
                          backgroundColor: btno === 5 ? '#feeeea' : 'white', // Set selected background color
                          color: btno === 5 ? 'orange' : 'black' // Set text color based on selection
                        }}
                        onClick={() => handleButtonClick(5, "College/Organization Training – Group")}
                        aria-label="College / Organization Training – Individual Option 1"
                      >
                        <span className="glyphicon glyphicon-download-alt"></span> College/Organization Training – Group
                      </button>

                    </Nav.Link>
                  </Nav.Item>
                </Col>
                <Col md={4} className="p-0">
                  <Nav.Item className="calendertabs">
                    <Nav.Link eventKey="link-6" className="text-black">
                      {/* <button type="button" className="btn3d btn btn-default w-100 calendertabs" style={{ minHeight: "70px" }} onClick={() => handleButtonClick(6, "College / Organization Training – Individual")}  ><span class="glyphicon glyphicon-download-alt"></span> College / Organization Training – Individual</button> */}

                      <button
                        type="button"
                        className={`btn3d btn w-100 calendertabs custom-button ${btno === 6 ? 'selected' : ''}`}
                        style={{
                          backgroundColor: btno === 6 ? '#feeeea' : 'white', // Set selected background color
                          color: btno === 6 ? 'orange' : 'black' // Set text color based on selection
                        }}
                        onClick={() => handleButtonClick(6, "College / Organization Training – Individual")}
                        aria-label="College / Organization Training – Individual Option 1"
                      >
                        <span className="glyphicon glyphicon-download-alt"></span> College / Organization Training – Individual
                      </button>
                    </Nav.Link>
                  </Nav.Item>
                </Col>
              </Row>
            </Nav>



            Road Safety & Traffic Awareness programme jointly <br />
            organized by RTO, Nashik and Nashik First.
          </p>
          <p className='slotpagepara text-start'>
            This programme is conducted exclusively for people holding Learner License & applied for Permanent License.
            It consists of 2-hour training at Traffic Education Park with knowledge sharing on Traffic Rules, Defensive Driving,
            Right of Way, Safety measures, Causes of Road Accidents, and Do’s and Don’ts while driving.
            Participants are provided with attendance certificates required to be submitted to the RTO before the final test.
          </p>






        </Container>


        <Container className="calender">
          <Col lg={12} className="mt-4 d-flex justify-content-center align-items-center">
            <button
              className="btn ms-1"
              onClick={() => changeMonth('prev')}
              disabled={isCurrentMonth}
            >
              <img src={leftarrow} className="w-75 arrowimg mt-4" alt="Previous" />
            </button>
            <h3 className="calendarheadline mx-4 mt-4">
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
              responsive
              style={{
                tableLayout: 'fixed',
                borderCollapse: 'collapse',
              }}
            >
              <thead>
                <tr className="text-start">
                  {daysOfWeek.map((day) => (
                    <th
                      key={day}
                      style={{
                        borderLeft: '1px solid #ddd',
                        borderRight: '1px solid #ddd',
                        padding: '10px',
                        textAlign: 'center',
                      }}
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weeks.map((week, weekIndex) => (
                  <tr key={weekIndex} style={{ cursor: 'default' }}>
                    {week.map((day, dayIndex) => {
                      const isDisabled = day && isPastDate(day);
                      const { label: dateLabel, color: textColor, bgColor } = getSpecialDateDetails(day);

                      return (
                        <td
                          key={dayIndex}
                          onMouseEnter={() => day && !isDisabled && setHoveredDay(day)}
                          onMouseLeave={() => day && !isDisabled && setHoveredDay(null)}
                          onClick={() => !isDisabled && handleDateClick(day)}
                          style={{
                            height: "100px",
                            textAlign: "end",
                            verticalAlign: "middle",
                            borderRight: "1px solid #ddd", // Vertical line
                            backgroundColor: day && (day.isNextMonth ? "#f0f0f0" : (isDisabled ? "#f9f9f9" : (day === hoveredDay ? "#e0e0e0" : "white"))),
                            color: day && (day.isNextMonth ? "#ccc" : isDisabled ? "#999" : "black"),
                            pointerEvents: day && (isDisabled ? "none" : "auto"),
                            transition: 'color 0.3s',
                            fontFamily: "Poppins",
                            fontWeight: "600",
                          }}
                        >
                          {day && (day.isNextMonth ? day.day : day || "")}
                          <br />
                          {dateLabel && !isDisabled && (
                            <div
                              style={{
                                fontSize: '10px',
                                marginTop: '5px',
                                color: textColor,
                                backgroundColor: bgColor,
                                padding: '3px 8px',
                                borderRadius: '15px',
                                display: 'inline-block',
                                fontWeight: 'bold',
                              }}
                            >
                              {dateLabel}
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