import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import lghead from "../../Assets/Assets/MainBanner/lghead.png";
import "../../Components/Calender.css";
import leftarrow from "../../Assets/Assets/Training/leftarrow.png";
import rightarrow from "../../Assets/Assets/Training/rightarrow.png";

// Helper function to generate calendar data for a given month and year
const generateCalendar = (month, year) => {
  const date = new Date(year, month, 1); // First day of the month
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get total days in the month
  const firstDayIndex = date.getDay(); // Get the day of the week the month starts on (0 for Sunday)

  const calendarDays = [];

  // Fill the days before the start of the month (empty slots)
  for (let i = 0; i < firstDayIndex; i++) {
    calendarDays.push(null);
  }

  // Fill the actual days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      date: i,
      status: i === 11 ? 'Holiday' : i === 31 ? 'Available' : null,
    });
  }

  return calendarDays;
};

const Calenderpage = () => {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const calendarData = generateCalendar(0, 2024); // January 2024 (month is 0-indexed)

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

        <Container className='calender mt-5'>
          <Row className='justify-content-start ms-5'>
            <Col lg={12} className='mt-4'>
              <button className='btn ms-1'>
                <img src={leftarrow} className='w-75 arrowimg' alt="Left Arrow" />
              </button>
              <text className='calenderheadline'>JANUARY 2024</text>
              <button className='btn ms-1'>
                <img src={rightarrow} className='w-75 arrowimg' alt="Right Arrow" />
              </button>
            </Col>
          </Row>

          {/* Display Days of the Week */}
          <Row className='justify-content-start ms-4'>
            {dayNames.map((day, index) => (
              <Col lg={1} key={index} className={`ms-5 text-start ${index === 0 ? 'ms-3' : ''}`}>
                {day}
              </Col>
            ))}
          </Row>

          {/* Display Dates */}
          <Row className='justify-content-start ms-4'>
            {calendarData.map((dateInfo, index) => (
              <Col lg={1} key={index} className={`ms-5 text-start ${index === 0 ? 'ms-3' : ''}`}>
                <Container className={`datebox text-end ${dateInfo?.status === "Holiday" ? "holidaybox" : dateInfo?.status === "Available" ? "availablebox" : ""}`}>
                  {dateInfo ? dateInfo.date : ''}
                  {dateInfo?.status && <p>{dateInfo.status}</p>}
                </Container>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Calenderpage;
