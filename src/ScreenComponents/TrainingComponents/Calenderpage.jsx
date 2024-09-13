import React, { useState } from "react";
import { Container, Table, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import leftarrow from "../../Assets/Assets/Training/leftarrow.png";
import rightarrow from "../../Assets/Assets/Training/rightarrow.png";
import lghead from "../../Assets/Assets/MainBanner/lghead.png"
import img4 from "../../Assets/Assets/MainBanner/img4.jpg"
import "../../Components/Calender.css";

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
      navigate("/slotpage", { state: { selectedDate: clickedDate } });
    }
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

          <Container className='datetime p-3'>
            Click on the calendar date & time slot, then fill out the form below to schedule your training.
          </Container>
        </Container>
        <Container className="calender mt-5">
          <Col lg={12} className="mt-4 d-flex justify-content-center align-items-center">
            <button className="btn ms-1" onClick={() => changeMonth('prev')}>
              <img src={leftarrow} className="w-75 arrowimg mt-4" alt="Previous" />
            </button>
            <h3 className="calenderheadline mx-4 mt-4">
              {monthNames[currentMonth]} {currentYear}
            </h3>
            <button className="btn ms-1 " onClick={() => changeMonth('next')}>
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

                      return (
                        <td
                          key={dayIndex}
                          onMouseEnter={() => day && setHoveredDay(day)}
                          onMouseLeave={() => day && setHoveredDay(null)}
                          onClick={() => handleDateClick(day)} // Handle date click
                          style={{
                            height: "100px",
                            textAlign: "end",
                            verticalAlign: "middle", // Center the text vertically
                            backgroundColor: day && (day.isNextMonth ? "#f0f0f0" : (day === hoveredDay ? "#e0e0e0" : "white")),
                            color: day && (day.isNextMonth ? "#ccc" : "black"),
                            pointerEvents: day && day.isNextMonth ? "none" : "auto", // Disable interaction for next month's days
                            transition: 'background-color 0.3s', // Smooth transition for background color change
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