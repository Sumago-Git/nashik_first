import React, { useState, useEffect } from "react";
import { Container, Table, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import leftarrow from "../../Assets/Assets/Training/leftarrow.png";
import rightarrow from "../../Assets/Assets/Training/rightarrow.png";
import lghead from "../../Assets/Assets/MainBanner/lghead.jpg"
import img4 from "../../Assets/Assets/Home/traffic_education_mob.png"
import "../../Components/Calender.css";
import Nav from 'react-bootstrap/Nav';
import axios from "axios";

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
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("RTO – Learner Driving License Holder Training");
  const [getdata, setdata] = useState([]);
  const [specialDates, setspecialDates] = useState([]);

  useEffect(() => {
    // Fetch holidays and session slots on component mount
    axios.get('holiday/get-holidays')
      .then((res) => {
        const holidayData = res.data.responseData.map(holiday => ({
          day: new Date(holiday.holiday_date).getDate(),
          month: new Date(holiday.holiday_date).getMonth(),
          label: 'Holiday',
          color: 'red',
          bgColor: '#ffd4d4'
        }));
        setspecialDates(holidayData);
      })
      .catch((err) => {
        console.error(err);
      });

    getdata_here();
  }, []);

  const getdata_here = () => {
    axios.get(`http://127.0.0.1:8000/Sessionslot/sessionslots/category/${selectedButton}`)
      .then((res) => {
        setspecialDates(prevDates => [
          ...prevDates,
          ...res.data.responseData.map(slot => ({
            day: new Date(slot.date).getDate(),
            month: new Date(slot.date).getMonth(),
            label: slot.label,
            color: 'green',
            bgColor: '#d4ffd4'
          }))
        ]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const getSpecialDateDetails = (day, month) => {
    return specialDates.find((special) => special.day === day && special.month === month) || {};
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

  const today = new Date();
  const isCurrentMonth = currentMonth === today.getMonth() && currentYear === today.getFullYear();

  const handleDateClick = (day) => {
    if (day) {
      const clickedDate = new Date(currentYear, currentMonth, day);
      window.scrollTo(0, 700);
      navigate("/slotpage", { state: { selectedDate: clickedDate, category: selectedButton } });
    }
  };

  const isPastDate = (day) => {
    const dateToCheck = new Date(currentYear, currentMonth, day);
    return dateToCheck < today.setHours(0, 0, 0, 0);
  };

  return (
    <>
      <Container fluid className='m-0 p-0'>
        <img src={lghead} className='lghead d-none d-md-block' />
        <img src={img4} className='img4 d-block d-md-none' />
      </Container>

      <Container fluid className="slotbg pb-5 mb-4">
        <Container>
          <p className='slotheadline text-start mt-0 pt-4'>
            <div className='datetime p-3 text-center'>
              Click on the calendar date & time slot, then fill out the form below to schedule your training.
            </div>
          </p>
        </Container>

        <Container className="calender">
          <Col lg={12} className="mt-4 d-flex justify-content-center align-items-center">
            <button className="btn ms-1" onClick={() => changeMonth('prev')} disabled={isCurrentMonth}>
              <img src={leftarrow} className="w-75 arrowimg mt-4" alt="Previous" />
            </button>
            <h3 className="calendarheadline mx-4 mt-4">
              {monthNames[currentMonth]} {currentYear}
            </h3>
            <button className="btn ms-1" onClick={() => changeMonth('next')}>
              <img src={rightarrow} className="w-75 arrowimg mt-4" alt="Next" />
            </button>
          </Col>

          <Container className="mt-4">
            <Table responsive style={{ tableLayout: 'fixed', borderCollapse: 'collapse' }}>
              <thead>
                <tr className="text-start">
                  {daysOfWeek.map((day) => (
                    <th key={day} style={{ borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
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
                      const { label: dateLabel, color: textColor, bgColor } = getSpecialDateDetails(day, currentMonth);

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
                            borderRight: "1px solid #ddd",
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
                            <div style={{
                              fontSize: '10px',
                              marginTop: '5px',
                              color: textColor,
                              backgroundColor: bgColor,
                              padding: '3px 8px',
                              borderRadius: '15px',
                              display: 'inline-block',
                              fontWeight: 'bold',
                            }}>
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
