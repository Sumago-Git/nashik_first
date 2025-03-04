import React, { useEffect, useState } from "react";
import { Container, Table, Col, Row } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom"; // Import useNavigate from react-router-dom
import leftarrow from "../../Assets/Assets/Training/leftarrow.png";
import rightarrow from "../../Assets/Assets/Training/rightarrow.png";
import lghead from "../../Assets/Assets/MainBanner/lghead.jpg"
import img4 from "../../Assets/Assets/Home/traffic_education_mob.png"
import "../../Components/Calender.css";
import Nav from 'react-bootstrap/Nav';
import axios from "axios";


const Calenderpagerestrictred = () => {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const accessCode = searchParams.get('access');
    if (accessCode !== '9f4f8a69ab47f51bb34b16294d12dfab') {
      // Redirect to home or error page if the access code is incorrect
      navigate('/');
    }
  }, [searchParams, navigate]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredDay, setHoveredDay] = useState(null);

  const [selectedButton, setSelectedButton] = useState("");
  const [specialDates, setspecialDates] = useState([]);
  const [btno, setbrno] = useState();
  const [categoryData, setCategoryData] = useState({
    heading: "",
    data: "",
    note: ""
  });
  const [dateStatuses, setDateStatuses] = useState({}); // State to store date statuses

  useEffect(() => {
    if (selectedButton == "RTO – Learner Driving License Holder Training") {
      setCategoryData({
        heading: "Road Safety & Traffic Awareness programme jointly organized by RTO Nashik and Nashik First.",
        data: "This programme is conducted exclusively designed for people holding Learner License & applied for Permanent License. Consists of 2 hour training at Traffic Education Park and knowledge sharing on Traffic Rules, Defensive Driving, Right of Way, Safety measures, Causes of Road Accidents, Do’s and Don’ts while driving. Participants are given attendance certificate which is required to be submitted to RTO before final test.",
        note: "Note : Applicants for a Permanent Driving License who have a Learner Driving License."
      })
    } else if (selectedButton == "School Students Training – Group") {
      setCategoryData({
        heading: "This programme is exclusively designed for school students from Std. 5th to Std. 10th.",
        data: "Consists of 2 hours training to create awareness of Basic traffic rules, Road signs, Safety measures and tools, Dos & Don’ts of traffic rules in high school students.",
        note: "Note : No individual bookings accepted. To be booked By the Concerned teacher for batch size of minimum 30 & maximum 50 participants."
      })
    } else if (selectedButton == "College/Organization Training – Group") {
      setCategoryData({
        heading: "This programme is exclusively designed for College students, Employees working in various organisations & all other types of adult groups.",
        data: "Consists of 2 hour training to create awareness of Traffic rules, Road signs, Safety measures and tools, Causes of accidents, Dos & Don’ts of traffic rules.",
        note: "Note : No individual bookings accepted. To be booked By the Concerned coordinator for batch size of minimum 30 & maximum 50 participants."
      })
    } else if (selectedButton == "RTO – Suspended Driving License Holders Training") {
      setCategoryData({
        heading: "Road Safety & Traffic Awareness programme jointly organized by RTO, Nashik and Nashik First.",
        data: "Consists of 2 hour training at Traffic Education Park and knowledge sharing on Traffic Rules and Licenses Suspension rules, Defensive Driving, Right of Way, Safety Measures, Causes of Road Accidents, Dos and Don’ts while driving. Participants are given attendance certificate which is required to be submitted to RTO to get back suspended license.",
        note: ""
      })
    } else if (selectedButton == "RTO – Training for School Bus Driver") {
      setCategoryData({
        heading: "Road Safety & Traffic Awareness programme jointly organized by RTO, Nashik and Nashik First.",
        data: "Consists of 2 hour training at Traffic Education Park and knowledge sharing on Traffic Rules, Defensive Driving, Right of Way, Safety measures, Causes of Road Accidents, Dos and Don’ts while driving. Participants are given attendance certificate which is required to be submitted to RTO to get new permit or renewal of permit.",
        note: ""
      })
    }
  }, [selectedButton])
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
  useEffect(() => {
    getdata_here();
  }, [currentDate]);
  const getdata_here = ({ category = selectedButton, buttonNumber = btno } = {}) => {
    axios.post('/Sessionslot/getAvailableslotslots', {
      year: currentYear.toString(),
      month: (currentMonth + 1).toString(),
      category,
      slotType: "inhouse"
    })
      .then((res) => {
        const slotData = res.data.data.reduce((acc, slot) => {
          // Add the status of each date to the dateStatuses state
          acc[slot.day] = slot.status;
          return acc;
        }, {});

        setDateStatuses(slotData);
        setspecialDates(res.data.data.map(slot => ({
          day: slot.day,
          status: slot.status,
          totalCapacity: slot.totalCapacity,
          totalAvailableSeats: slot.totalAvailableSeats,
          label: slot.status === "available" ? "Available" : slot.status === "Holiday" ? "Holiday" : "Closed",
          color: slot.status === "Holiday" ? "#ff0000" : (slot.status === "available" ? "green" : "red"),
          bgColor: slot.status === "Holiday" ? "#ea7777" : (slot.status === "available" ? "#d4ffd4" : "#ffd4d4"),
          isHoliday: slot.status === "Holiday",
        })));
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
    if (dateStatuses[day] !== "Holiday") { // Only handle click if the status is "Available"
      const clickedDate = new Date(currentYear, currentMonth, day);
      window.scrollTo(0, 700);
      navigate("/slotpage2", { state: { selectedDate: clickedDate, category: selectedButton } });
    }
  };

  const isPastDate = (day) => {
    const dateToCheck = new Date(currentYear, currentMonth, day);
    const today = new Date(); // Get the current date

    // Reset today's time to midnight
    today.setHours(0, 0, 0, 0);

    // Reset dateToCheck's time to midnight and compare
    return dateToCheck.getTime() === today.getTime();
  };

  const handleButtonClick = (buttonNumber, btncategory) => {


    setSelectedButton(btncategory);
    setbrno(buttonNumber);
    getdata_here({
      category: btncategory,
      buttonNumber,
    })
    if (window.innerWidth <= 768) {
      window.scrollBy(0, 1400); // Scroll 100 pixels down for mobile view
    }

    // Check if the category matches
    // if (btncategory === "College / Organization Training – Individual") {
    //   // Navigate to the desired page
    //   navigate('/bookingpage2'); // Replace with your target route
    // } else {
    //   getdata_here({
    //     category: btncategory,
    //     buttonNumber,
    //   });
    // }
  };


  const tabsData = [
    { id: 1, label: "RTO – Learner Driving License Holder Training" },
   

    // { id: 6, label: "College / Organization Training – Individual" }
  ];
  return (
    <>
      <Container fluid className='m-0 p-0'>
        <img src={lghead} className='lghead d-none d-md-block' />
        <img src={img4} className='img4 d-block d-md-none' />
      </Container>



      <Container fluid className="slotbg">
        <Container>
          <p className='slotheadline text-start mt-0 pt-4 '>
            <div className='datetime p-3 text-center'>
              Click on the calendar date & time slot, then fill out the form below to schedule your training.
            </div>
            <Nav variant="tabs" defaultActiveKey="/home" className="mt-lg-4 mx-auto">
              <Row>
                {tabsData.map((tab) => (
                  <Col  className="p-0" key={tab.id} onClick={() => handleButtonClick(tab.id, tab.label)}>
                    <Nav.Item className="calendertabs">
                      <Nav.Link eventKey={`link-${tab.id}`} className="text-black">
                        <button
                          type="button"
                          className={`btn3d btn w-100 calendertabs custom-button ${btno === tab.id ? 'selected' : ''}`}
                          style={{
                            fontSize: "1.1rem",
                            backgroundColor: btno === tab.id ? '#ededf9' : 'white', // Set selected background color
                            color: btno === tab.id ? 'orange' : 'black' // Set text color based on selection


                          }}

                          aria-label={tab.label}
                        >
                          <span className="glyphicon glyphicon-download-alt"></span> {tab.label}
                        </button>
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                ))}
              </Row>
            </Nav>

            <br />

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
          {(selectedButton == "School Students Training – Group" || selectedButton == "College/Organization Training – Group") &&

            <p className='slotpagepara text-start' style={{ fontWeight: 'bold', color: "#032377" }}>
              (Please Call <a href="tel:+0253-2315966">0253-2315966</a> or <a href="tel:+917796116555">7796116555</a> for Bookings)
            </p>
          }
        </Container>
        {
          selectedButton &&
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

            <Container className="mt-4" style={{ overflowX: "auto" }}>
              <Table >
                <thead>
                  <tr className="text-start">
                    {daysOfWeek.map((day) => (
                      <th key={day} style={{ borderLeft: '2px solid #888', borderRight: '2px solid #888', border: "2px solid #888", padding: '10px', textAlign: 'center' }}>
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {weeks.map((week, weekIndex) => (
                    <tr key={weekIndex} style={{ cursor: 'default' }}>
                      {week.map((day, dayIndex) => {
                        const isPast = day && isPastDate(day);
                        const isDisabled = !day || !isPastDate(day); // Disable all days except past days
                        const { label: dateLabel, isHoliday } = getSpecialDateDetails(day, currentMonth);
                        const isAvailable = dateStatuses[day] === "available"; // Check status from state
                        const label = isPast ? "Available" : "Closed"; // Label logic
                        const bgColor = isPast ? "#d4ffd4" : "#ffd4d4"; // Green for past days, red for others
                        const textColor = isPast ? "green" : "red"; // Text color matches the label type

                        return (
                          <td
                            key={dayIndex}
                            onMouseEnter={() => day && !isDisabled && setHoveredDay(day)}
                            onMouseLeave={() => day && !isDisabled && setHoveredDay(null)}
                            onClick={() => !isDisabled && handleDateClick(day)}
                            style={{
                              height: "100px",
                              textAlign: "center",
                              verticalAlign: "middle",
                              cursor: `${dateStatuses[day] === "available" ? "pointer" : ""}`,
                              border: "2px solid #888",
                              borderRight: "2px solid #888",
                              backgroundColor: day
                                ? day.isNextMonth
                                  ? "#f0f0f0" // Next month's dates (light gray)
                                  : isDisabled
                                    ? "#f9f9f9" // Disabled (past dates or holidays)
                                    : dateStatuses[day] !== "Holiday"
                                      ? "#d4ffd4" // Green for available
                                      : dateStatuses[day] === "Holiday"
                                        ? "#ea7777" // Light blue for holiday
                                        : "#ffd4d4" // Red for closed or other statuses
                                : "white",
                              color: day
                                ? day.isNextMonth
                                  ? "#ccc" // Light color for next month's dates
                                  : isDisabled || dateStatuses[day] === "Holiday"
                                    ? "#999" // Gray for disabled or holiday
                                    : "black"
                                : "black", color: day && (day.isNextMonth ? "#ccc" : isDisabled || isHoliday ? "#999" : "black"),
                              pointerEvents: day && (isDisabled || isHoliday ? "none" : "auto"),
                              transition: 'color 0.3s',
                              fontFamily: "Poppins",
                              fontWeight: "600",
                              fontSize: "1.3rem"
                            }}
                          >
                            {day && (day.isNextMonth ? day.day : day || "")}
                            <br />
                            {specialDates && specialDates.length > 0 && specialDates.find((date) => date.day === day) && !isPastDate(day) && (
                              <div style={{
                                fontSize: '13px',
                                marginTop: '3px',
                                color: textColor, // Green for "Available", red for "Closed"
                                backgroundColor: bgColor,
                                padding: '3px 8px',
                                borderRadius: '15px',
                                display: 'inline-block',
                                fontWeight: 'bold',
                              }}>
                                {label}
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
        }
      </Container>
    </>
  );
};

export default Calenderpagerestrictred;
