import React, { useEffect, useState } from "react";
import { Container, Table, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import leftarrow from "../../Assets/Assets/Training/leftarrow.png";
import rightarrow from "../../Assets/Assets/Training/rightarrow.png";
import lghead from "../../Assets/Assets/MainBanner/lghead.jpg"
import img4 from "../../Assets/Assets/Home/traffic_education_mob.png"
import "../../Components/Calender.css";
import Nav from 'react-bootstrap/Nav';
import axios from "axios";


// Event data for sample holidays
const eventData = [
  { date: '2024-09-05', text: 'Holiday' },
  { date: '2024-09-15', text: 'Available' },
  { date: '2024-09-25', text: 'Meeting' },
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredDay, setHoveredDay] = useState(null);
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("RTO – Suspended Driving License Holders Training");
  const [specialDates, setspecialDates] = useState([]);
  const [btno, setbrno] = useState(1, "RTO – Suspended Driving License Holders Training");
  useEffect(() => {


    getdata_here();
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  // Function to handle window resizing and set mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // If window width is less than or equal to 768px, it's mobile
    };

    // Initial check
    handleResize();

    // Add event listener to track window resizing
    window.addEventListener('resize', handleResize);

    // Cleanup listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // useEffect(() => {
  //   // Fetch holidays and session slots on component mount
  //   axios.get('holiday/get-holidays')
  //     .then((res) => {
  //       const holidayData = res.data.responseData.map(holiday => ({
  //         day: new Date(holiday.holiday_date).getDate(),
  //         month: new Date(holiday.holiday_date).getMonth(),
  //         label: 'Holiday',
  //         color: 'red',
  //         bgColor: '#ffd4d4',
  //         isHoliday: true, // Mark this as a holiday
  //       }));
  //       setspecialDates(holidayData);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });

  //   getdata_here();
  // }, []);

  const getdata_here = () => {
    axios.post('/Sessionslot/getAvailableslotslots', {
      year: currentYear.toString(),
      month: (currentMonth + 1).toString(), // Month is 0-indexed, so we add 1
      category: selectedButton,
    })
      .then((res) => {
        const slotData = res.data.data.map(slot => ({
          day: slot.day,
          status: slot.status, // "available", "Holiday", "closed"
          totalCapacity: slot.totalCapacity,
          totalAvailableSeats: slot.totalAvailableSeats,
          label: slot.status === "available" ? "Available" : slot.status === "Holiday" ? "Holiday" : "Closed",
          color: slot.status === "available" ? "green" : "red", // green for available, red for closed or holiday
          bgColor: slot.status === "available" ? "#d4ffd4" : "#ffd4d4", // Light green for available, light red for holidays/closed
          isHoliday: slot.status === "Holiday", // Mark as holiday
        }));

        setspecialDates(slotData);
      })
      .catch((err) => {
        console.error(err);
      });
  };




  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const getSpecialDateDetails = (day, month) => {
    return specialDates.find((special) => special.day === day && special.month === month) || {};
  };

  const changeMonth = (direction) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + (direction === 'prev' ? -1 : 1));
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
    for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size));
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

  const handleButtonClick = (buttonNumber, btncategory) => {
    setSelectedButton(btncategory);
    setbrno(buttonNumber);
    // console.log(selectedButton);
    console.log("selected button : ", buttonNumber);
    console.log("Category : ", btncategory);
    getdata_here();
    // alert(`Selected button: ${btncategory}`);

  };
  return (
    <>
      <Container fluid className='m-0 p-0'>
        <img src={lghead} className='lghead d-none d-md-block' />
        <img src={img4} className='img4 d-block d-md-none' />
      </Container>



      <Container fluid className="slotbg pb-5 mb-4">
        <Container>
          <p className='slotheadline text-start mt-0 pt-4 '>
          <div className='datetime p-3 text-center'>
            Click on the calendar date & time slot, then fill out the form below to schedule your training.
          </div>

            <Nav variant="tabs" defaultActiveKey="/home" className="mt-lg-4 mx-auto ">
              <Row>
                <Col md={4} className="p-0">
                  <Nav.Item className="calendertabs" >
                    <Nav.Link eventKey="link-1" className="text-black " style={{ backgroundColor: "none" }}>
                      {/* <button type="button" className="btn3d btn btn-default w-100 calendertabs" style={{ minHeight: "70px" }} onClick={() => handleButtonClick(1 , "RTO – Suspended Driving License Holders Training")}><span class="glyphicon glyphicon-download-alt"></span> RTO – Suspended Driving License Holders Training</button> */}
                      <button
                        type="button"
                        className={`btn3d btn w-100 calendertabs custom-button ${btno === 1 ? 'selected' : ''}`}
                        style={{
                          backgroundColor: btno === 1 ? '#feeeea' : 'white', // Set selected background color
                          color: btno === 1 ? 'orange' : 'black' // Set text color based on selection
                        }}
                        onClick={() => handleButtonClick(1, "RTO – Learner Driving License Holder Training")}
                        aria-label="RTO – Learner Driving License Holder Training"
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

            <br />


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
                      const { label: dateLabel, color: textColor, bgColor, isHoliday } = getSpecialDateDetails(day, currentMonth);

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
                            backgroundColor: day && (day.isNextMonth ? "#f0f0f0" : (isDisabled || isHoliday ? "#f9f9f9" : (day === hoveredDay ? "#e0e0e0" : "white"))),
                            color: day && (day.isNextMonth ? "#ccc" : isDisabled || isHoliday ? "#999" : "black"),
                            pointerEvents: day && (isDisabled || isHoliday ? "none" : "auto"),
                            transition: 'color 0.3s',
                            fontFamily: "Poppins",
                            fontWeight: "600",
                          }}
                        >
                          {day && (day.isNextMonth ? day.day : day || "")}
                          <br />
                          {specialDates && specialDates.length > 0 && specialDates.find((date) => date.day === day) && (
                            <div style={{
                              fontSize: '10px',
                              marginTop: '5px',
                              color: specialDates.find((date) => date.day === day)?.color, // Use color based on status
                              backgroundColor: specialDates.find((date) => date.day === day)?.bgColor,
                              padding: '3px 8px',
                              borderRadius: '15px',
                              display: 'inline-block',
                              fontWeight: 'bold',
                            }}>
                              {specialDates.find((date) => date.day === day)?.label}
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
