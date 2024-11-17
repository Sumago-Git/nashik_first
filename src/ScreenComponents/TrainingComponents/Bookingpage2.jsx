import React, { useEffect, useState } from 'react';
import lghead from "../../Assets/Assets/MainBanner/lghead.jpg";
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../../Components/Slotpage.css";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { captchaKey } from '../../App';

const Bookingpage2 = () => {
  const [formData, setFormData] = useState({
    category: 'College / Organization Training – Individual',
    fname: '',
    mname: '',
    lname: '',
    email: '',
    phone: '',

  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null);
  const [slotTime, setSlotTime] = useState("")






  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex
    const phoneRegex = /^[0-9]{10}$/; // 10-digit phone number regex
    const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces for name fields
    if (!formData.fname) {
      newErrors.fname = 'First name is required';
    } else if (!nameRegex.test(formData.fname)) {
      newErrors.fname = 'First name should only contain letters';
    }

    if (!formData.lname) {
      newErrors.lname = 'Last name is required';
    } else if (!nameRegex.test(formData.lname)) {
      newErrors.lname = 'Last name should only contain letters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone number must be a valid 10-digit number';
    }


    // Validate the ReCAPTCHA
    if (!captchaValue) {
      newErrors.captcha = 'Please complete the CAPTCHA';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };






  const handleChange = (e) => {
    const { name } = e.target;


    // Handle other fields
    setFormData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));

  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validate()) {
      return; // Stop form submission if there are errors
    }

    console.log("formData", formData);

    try {
      const response = await axios.post('/Individuals/create-Individuals', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response:', response.data);
      // Show success message
      alert('Booking successfully  created!');

      // Resetting the form
      setFormData({
        fname: '',
        mname: '',
        lname: '',
        email: '',
        phone: '',
      });
      setCaptchaValue(null); // Reset the captcha
      setErrors({}); // Clear errors
      navigate('/training');
    } catch (error) {
      console.error('Error submitting form:', error);

      // Handle error more specifically
      const errorMessage = error.response?.data?.message || 'Something went wrong!';
      alert(`Error: ${errorMessage}`);
    }
  };

  return (
    <>
      <Container fluid className='m-0 p-0'>
        <img src={lghead} className='w-100' alt="Header" />
      </Container>

      <Container fluid className='slotbg pb-3 mb-4'>
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



        <Container className='bookingdetails mt-5 pt-4 pb-3 '>
          <h1 className='bookingheadline mt-3 mx-auto'>Please fill in your details</h1>

          <div className='form-group mb-4'>
            <p className='bookingdate text-black text-start ms-lg-4'>{"Booking Date"}</p>
            <p className='detailtext text-black text-start ms-lg-4 mb-4'>{slotTime}</p>
            <form onSubmit={handleSubmit}>
              <Row className='justify-content-center'>
                <Col lg={6} md={7}>
                  <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"First Name*"}</p>
                  <input
                    name='fname'
                    value={formData.fname}
                    onChange={handleChange}
                    placeholder={"First Name"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                  {errors.fname && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.fname}</p>}
                </Col>
                <Col lg={6} md={7}>
                  <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Middle Name"}</p>
                  <input
                    name='mname'
                    value={formData.mname}
                    onChange={handleChange}
                    placeholder={"Middle Name"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                  {errors.mname && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.mname}</p>}
                </Col>
                <Col lg={6} md={7}>
                  <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Last Name*"}</p>
                  <input
                    name='lname'
                    value={formData.lname}
                    onChange={handleChange}
                    placeholder={"Last Name"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                  {errors.lname && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.lname}</p>}
                </Col>
                <Col lg={6} md={7}>
                  <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Email*"}</p>
                  <input
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={"email"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                  {errors.email && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.email}</p>}
                </Col>
                <Col lg={6} md={7}>
                  <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Phone*"}</p>
                  <input
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={"phone"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3 ms-md-0'
                  />
                  {errors.phone && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.phone}</p>}
                </Col>

                <Col lg={12}>
                  <ReCAPTCHA
                    sitekey={captchaKey} // Replace with your Google reCAPTCHA site key
                    onChange={handleCaptchaChange}
                    className='m-3'
                  />
                  {errors.captcha && <p className='text-start mt-1 text-danger'>{errors.captcha}</p>}
                </Col>
                <div className='text-center'>
                  <button type='submit' className='returnbutton p-lg-2 mt-4'>Book Now</button>
                </div>
              </Row>
            </form>
          </div>

        </Container>
      </Container>
    </>
  );
}

export default Bookingpage2;
