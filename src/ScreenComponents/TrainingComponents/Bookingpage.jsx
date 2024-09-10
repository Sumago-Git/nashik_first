import React from 'react';
import lghead from "../../Assets/Assets/MainBanner/lghead.png";
import { Container } from 'react-bootstrap';
import "../../Components/Slotpage.css";

const Bookingpage = () => {
  const formFields = [
    { label: "Booking Date", value: "Saturday 07/09/2024 03:30 P.M.- Session 2", type: "text" },
    { label: "Learning License Number*", placeholder: "MH15/0012345/2021", type: "input" }
  ];

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

        <Container className='bookingdetails mt-5 pt-4 pb-5'>
          <h1 className='bookingheadline mt-3'>Please fill in your details</h1>

          {formFields.map((field, index) => (
            <div key={index} className='form-group mb-4'>
              <p className='bookingdate text-black text-start ms-4'>{field.label}</p>
              {field.type === 'input' ? (
                <input
                  name=''
                  placeholder={field.placeholder}
                  className='dateinput p-3 mt-2 w-100'
                />
              ) : (
                <p className='detailtext text-black text-start ms-4'>{field.value}</p>
              )}
            </div>
          ))}

          <div className='text-center'>
            <button className='returnbutton p-3 mt-4'>
              Book Now
            </button>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Bookingpage;
