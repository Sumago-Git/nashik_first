import React, { useEffect, useState } from 'react';
import lghead from "../../Assets/Assets/MainBanner/lghead.jpg";
import { Container, Row, Col } from 'react-bootstrap';
import "../../Components/Slotpage.css";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { captchaKey } from '../../App';


const Bookingpage = () => {

  const [formData, setFormData] = useState({
    licenseNumber: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicleType: [],
  });

  const [errors, setErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null);


  const [slotTime, setSlotTime] = useState("")
  const location = useLocation()

  const validate = () => {
    const newErrors = {};
    if (!formData.licenseNumber) newErrors.licenseNumber = 'License number is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!captchaValue) newErrors.captcha = 'Please complete the CAPTCHA';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      vehicleType: prevState.vehicleType.includes(value)
        ? prevState.vehicleType.filter((type) => type !== value)
        : [...prevState.vehicleType, value],
    }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post('YOUR_API_URL', formData);
      console.log('Response:', response.data);
      // Handle success (e.g., show a success message, reset the form, etc.)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show an error message)
    }
  };
  useEffect(() => {
    if (location) {
      console.log("location.state", location.state.selectedDate);
      console.log("location.selectedTime", location.state.selectedTime);
      setSlotTime(`${location.state.selectedDate} ${location.state.selectedTime}`)

    }
  }, [location])

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

        <Container className='bookingdetails mt-5 pt-4 pb-3'>
          <h1 className='bookingheadline mt-3 mx-auto'>Please fill in your details</h1>
          <div className='form-group mb-4'>
            <p className='bookingdate text-black text-start ms-lg-4'>{"Booking Date"}</p>
            <p className='detailtext text-black text-start ms-lg-4 mb-4'>{slotTime}</p>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3'>{"Learning License Number*"}</p>
                  <input
                    name='licenseNumber'
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    placeholder={"MH15/0012345/2021"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                  {errors.licenseNumber && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.licenseNumber}</p>}
                </Col>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3'>{"First Name*"}</p>
                  <input
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={"First Name"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                  {errors.firstName && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.firstName}</p>}
                </Col>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3'>{"Middle Name"}</p>
                  <input
                    name='middleName'
                    value={formData.middleName}
                    onChange={handleChange}
                    placeholder={"Middle Name"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                </Col>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3'>{"Last Name*"}</p>
                  <input
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder={"Last Name"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                  {errors.lastName && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.lastName}</p>}
                </Col>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3'>{"Email*"}</p>
                  <input
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={"Email"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                  {errors.email && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.email}</p>}
                </Col>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3'>{"Phone*"}</p>
                  <input
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={"Phone"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                  {errors.phone && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.phone}</p>}
                </Col>
                <Col>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3'>{"Vehicle type*"}</p>
                  <Row>
                    {['2 Wheelers', '3/5 Wheelers', '4 Wheelers Heavy', '4 Wheelers Light'].map((type) => (
                      <Col xs={6} key={type}>
                        <Row>
                          <Col xs={2} sm={2} lg={1} className='ms-lg-4'>
                            <input
                              type="checkbox"
                              className="radiobtn mt-1"
                              value={type}
                              checked={formData.vehicleType.includes(type)}
                              onChange={handleCheckboxChange}
                            />
                          </Col>
                          <Col xs={10} sm={10} lg={10} className="text-start">
                            <label className="btntext">{type}</label>
                          </Col>
                        </Row>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col lg={12}>
                  <ReCAPTCHA
                    sitekey={captchaKey} // Replace with your Google reCAPTCHA site key
                    onChange={handleCaptchaChange}
                    className='mt-3 ms-md-4'
                  />
                  {errors.captcha && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.captcha}</p>}
                </Col>
                <div className='text-center'>
                  <button className='returnbutton p-lg-2 mt-4'>Book Now</button>
                </div>
              </Row>
            </form>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Bookingpage;
