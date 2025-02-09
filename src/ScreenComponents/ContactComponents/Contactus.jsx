import React, { useEffect, useState } from 'react';
import lghead from "../../Assets/Assets/MainBanner/lghead.jpg";
import img4 from "../../Assets/Assets/Home/traffic_education_mob.png";
import { Container, Row, Col } from 'react-bootstrap';
import "../../Components/Contact.css";
import whatsapp from "../../Assets/Assets/ContactPage/whatsapp.png";
import mail from "../../Assets/Assets/ContactPage/mail.png";
import location from "../../Assets/Assets/ContactPage/location.png";
import call from "../../Assets/Assets/ContactPage/call.png";
import captcha from "../../Assets/Assets/ContactPage/captcha.png";
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { captchaKey } from '../../App';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Contactus = () => {


  const [contactDetail_get, setcontactdetails] = useState([])

  const contactdetails_here = () => {
    axios.get('contact-detail/get-contactdetails')
      .then((res) => {
        setcontactdetails(res.data.responseData)
        console.log("Getdata Here : ", res.data.responseData);

      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    contactdetails_here();
    Aos.init();
  }, [])




  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    contact: "",
    age: "",
    subject: "",
    profession: "",
    suggestions: "",
    suggestionfile: "",
    captchaToken: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  // const validateForm = () => {
  //   let formErrors = {};

  //   // First Name: Required, minimum length of 2 characters
  //   if (!formData.firstName.trim()) {
  //     formErrors.firstName = "First name is required.";
  //   } else if (formData.firstName.length < 2) {
  //     formErrors.firstName = "First name must be at least 2 characters.";
  //   }

  //   // Email: Required and must be a valid email format
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!formData.email.trim()) {
  //     formErrors.email = "Email is required.";
  //   } else if (!emailRegex.test(formData.email)) {
  //     formErrors.email = "Invalid email format.";
  //   }

  //   // Contact: Required, must be a valid phone number format (10 digits)
  //   const contactRegex = /^[0-9]{10}$/;
  //   if (!formData.contact.trim()) {
  //     formErrors.contact = "Contact is required.";
  //   } else if (!contactRegex.test(formData.contact)) {
  //     formErrors.contact = "Contact must be a valid 10-digit number.";
  //   }

  //   // Age: Required and must be a valid number (between 18 and 100)
  //   if (!formData.age.trim()) {
  //     formErrors.age = "Age is required.";
  //   } else if (isNaN(formData.age) || formData.age < 18 || formData.age > 100) {
  //     formErrors.age = "Age must be a number between 18 and 100.";
  //   }

  //   // Subject: Required, minimum length of 3 characters
  //   if (!formData.subject.trim()) {
  //     formErrors.subject = "Subject is required.";
  //   } else if (formData.subject.length < 3) {
  //     formErrors.subject = "Subject must be at least 3 characters long.";
  //   }

  //   // Profession: Required
  //   if (!formData.profession.trim()) {
  //     formErrors.profession = "Profession is required.";
  //   }

  //   // Suggestions: Optional, but if provided must be at least 10 characters
  //   if (formData.suggestions && formData.suggestions.length < 10) {
  //     formErrors.suggestions = "Suggestions must be at least 10 characters.";
  //   }

  //   // Google reCAPTCHA: Required
  //   if (!formData.captchaToken) {
  //     formErrors.captchaToken = "Please complete the reCAPTCHA.";
  //   }

  //   return formErrors;
  // };

  const validateForm = () => {
    let formErrors = {};

    // First Name: Required, minimum length of 2 characters, only letters
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!formData.firstName.trim()) {
      formErrors.firstName = "First name is required.";
    } else if (formData.firstName.length < 2) {
      formErrors.firstName = "First name must be at least 2 characters.";
    } else if (!nameRegex.test(formData.firstName)) {
      formErrors.firstName = "First name must only contain letters.";
    }

    // Email: Required and must be a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Invalid email format.";
    }

    // Contact: Required, must be a valid phone number format (10 digits, no special characters)
    const contactRegex = /^[0-9]{10}$/;
    if (!formData.contact.trim()) {
      formErrors.contact = "Contact is required.";
    } else if (!contactRegex.test(formData.contact)) {
      formErrors.contact = "Contact must be a valid 10-digit number.";
    }

    // Age: Required, must be a valid number (between 18 and 100)
    if (!formData.age.trim()) {
      formErrors.age = "Age is required.";
    } else if (isNaN(formData.age)) {
      formErrors.age = "Age must be a valid number.";
    } else if (formData.age < 18 || formData.age > 100) {
      formErrors.age = "Age must be between 18 and 100.";
    }

    // Subject: Required, minimum length of 3 characters, only letters and spaces
    if (!formData.subject.trim()) {
      formErrors.subject = "Subject is required.";
    }
    // else if (formData.subject.length < 3) {
    //   formErrors.subject = "Subject must be at least 3 characters long.";
    // } else if (!nameRegex.test(formData.subject)) {
    //   formErrors.subject = "Subject must only contain letters and spaces.";
    // }

    // Profession: Required, only letters
    if (!formData.profession.trim()) {
      formErrors.profession = "Profession is required.";
    } else if (!nameRegex.test(formData.profession)) {
      formErrors.profession = "Profession must only contain letters.";
    }

    // Suggestions: Optional, but if provided must be at least 10 characters
    if (!formData.suggestions.trim()) {
      formErrors.suggestions = "Suggestion is required.";
    } else if (formData.suggestions && formData.suggestions.trim().length < 10) {
      formErrors.suggestions = "Suggestions must be at least 10 characters.";
    }

    // Google reCAPTCHA: Required
    if (!formData.captchaToken) {
      formErrors.captchaToken = "Please complete the reCAPTCHA.";
    }

    return formErrors;
  }

  const submitForm = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);

    // Prepare form data for submission
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (key === "suggestionfile" && formData[key]) {
        formDataToSend.append(key, formData[key]);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      // Replace the URL with your API endpoint
      const response = await axios.post('contactform/create-contactform', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        }
      });

      setIsSubmitting(false);
      setFormData({
        firstName: "",
        email: "",
        contact: "",
        age: "",
        subject: "",
        profession: "",
        suggestions: "",
        suggestionfile: null,
        captchaToken: ""
      });
      alert("Thank You..! We Will Connect With You Soon.");
    } catch (error) {
      console.error("Error submitting form", error);
      setIsSubmitting(false);
    }
  };
  const handleRecaptchaChange = (token) => {
    setFormData({ ...formData, captchaToken: token });
  };


  return (
    <>
      <img src={lghead} className='lghead d-none d-md-block' />
      <img src={img4} className='img4 d-block d-md-none' />


      <Container fluid className='p-0 position-relative contactbg  '>
        <Row className='p-0 m-0 justify-content-center'>
          <Col lg={5} className="justify-content-center ">
            {
              contactDetail_get.map((a) => {
                return (
                  <>
                    <Container fluid>
                      <Row>
                        <Col lg={6} md={6} sm={12} >
                          <a href="tel:+91 7796116555" style={{ textDecoration: 'none', color: 'inherit' }} className='w-100' data-aos="zoom-in-up">
                            <img src={whatsapp} alt="WhatsApp" height={'250px'} />
                          </a>
                          <p className="icontext text-center ml-1">
                            <a href="tel:+91 7796116555" style={{ textDecoration: 'none', color: 'inherit' }}>
                              +91 {a.whatsapp}

                            </a>
                          </p>

                        </Col>
                        <Col lg={6} md={6} sm={12}>
                          <a href="tel:+91 2532315966" style={{ textDecoration: 'none', color: 'inherit' }} className='w-100' data-aos="zoom-in-up">
                            <img src={call} alt="Phone" height={'250px'} />
                          </a>
                          <p className="icontext text-center ml-1">
                            <a href="tel:+91 2532315966" style={{ textDecoration: 'none', color: 'inherit' }}>
                              +91 {a.phone}
                              {/* +91 2532315966 */}
                            </a>
                          </p>
                        </Col>


                        <Col lg={6} md={6} sm={12}>
                          <a href="mailto:secretary@nashikfirst.com" style={{ textDecoration: 'none', color: 'inherit' }} className='w-100' data-aos="zoom-in-up">
                            <img src={mail} alt="Email" height={'250px'} />
                          </a>
                          <p className="icontext text-center ml-1">
                            <a href="mailto:secretary@nashikfirst.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                              {a.email}
                            </a>
                          </p>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                          <a
                            href="https://www.google.com/maps?q=Survey+No.+590/591,+Motkari+Nagar,+Near+Nelson+Hospital,+Behind+Tupsakhare+Lawns,+Near+Mumbai+Naka,+Nashik"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            className='w-100'
                            data-aos="zoom-in-up"
                          >
                            <img src={location} alt="Location" height={'250px'} />
                          </a>
                          <p className="icontext text-center  ml-1">
                            <a
                              href="https://www.google.com/maps?q=Survey+No.+590/591,+Motkari+Nagar,+Near+Nelson+Hospital,+Behind+Tupsakhare+Lawns,+Near+Mumbai+Naka,+Nashik"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                              {a.address}
                            </a>
                          </p>

                        </Col>
                      </Row>
                    </Container>
                  </>
                )
              })
            }




          </Col>
          <Col lg={6} md={12}>
            <div className="card-body ">
              <h5 className="card-title contacttext mt-lg-3">Contact us</h5>
              <form onSubmit={submitForm}>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <p className="text-start mt-3">Full Name<span className='text-danger'>*</span></p>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="p-2 w-100 contactinput"
                    />
                    {errors.firstName && <p className="text-start text-danger">{errors.firstName}</p>}
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <p className="text-start mt-3">Age<span className='text-danger'>*</span></p>
                    <input
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="p-2 w-100 contactinput"
                    />
                    {errors.age && <p className="text-start text-danger">{errors.age}</p>}
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <p className="text-start mt-3">Email<span className='text-danger'>*</span></p>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="p-2 w-100 contactinput"
                    />
                    {errors.email && <p className="text-start text-danger">{errors.email}</p>}
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <p className="text-start mt-3">Mobile Number<span className='text-danger'>*</span></p>
                    <input
                      name="contact"
                      maxLength={10} // Restrict input to 10 characters
                      minLength={10} // Optionally enforce a minimum length
                      value={formData.contact}
                      onChange={handleChange}
                      className="p-2 w-100 contactinput"
                    />
                    {errors.contact && <p className="text-start text-danger">{errors.contact}</p>}
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <p className="text-start mt-3">Profession<span className='text-danger'>*</span></p>
                    <input
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      className="p-2 w-100 contactinput"
                    />
                    {errors.profession && <p className="text-start text-danger">{errors.profession}</p>}
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <p className="text-start mt-3">Subject<span className='text-danger'>*</span></p>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="p-2 w-100 contactinput outline-none "
                    >
                      <option value="" className='outline-none'>Select a subject</option>
                      <option value="Roads (Intra-city and Intercity) Connectivity" className='outline-none'>Roads (Intra-city and Intercity) Connectivity</option>
                      <option value="Smooth & Disciplined City Traffic" className='outline-none'>Smooth & Disciplined City Traffic</option>
                      <option value="Industry and New Investments" className='outline-none'>Industry and New Investments</option>
                      <option value="Education (Road Safety)" className='outline-none'>Education (Road Safety)
                      </option>
                    </select>
                    {errors.subject && <p className="text-start text-danger">{errors.subject}</p>}
                  </div>

                  <div className="col-lg-12">
                    <p className="text-start mt-3">Suggestion<span className='text-danger'>*</span></p>
                    <textarea
                      name="suggestions"
                      value={formData.suggestions}
                      onChange={handleChange}
                      className="p-2 w-100 contactinput"
                    />
                    {errors.suggestions && <p className="text-start text-danger">{errors.suggestions}</p>}
                  </div>

                  <div className="col-lg-6 col-md-6 text-center mt-4">
                    <ReCAPTCHA
                      sitekey={captchaKey}
                      onChange={handleRecaptchaChange}
                    />
                    {errors.captchaToken && <p className="text-start text-danger">{errors.captchaToken}</p>}
                  </div>
                  <div className="col-lg-6 col-md-6 text-center mt-3">
                    <p className="text-start mb-2">Suggestion File</p>
                    <input
                      name="suggestionfile"
                      type='file'
                      accept='.jpg,.jpeg,.png,.pdf'
                      onChange={(e) => setFormData({
                        ...formData,
                        suggestionfile: e.target.files[0], // Store the file object in state
                      })}
                      className="p-2 w-100 contactinput"
                    />
                  </div>

                  <div className="col-lg-12 text-center mt-4 mb-4 ">
                    <button type="submit" className=" submitbutton" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>

      {/* MOBILE VIEW */}
      {/* <Container className='contactbg2 d-block d-md-none'>
        <Row>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title contacttext">Contact us</h5>
              <Row>
                <Col>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"First Name"}</p>
                  <input name='' className='contactinput p-3  m-0 mt-0 ms-lg-3' />
                </Col>
                <Col>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Email"}</p>
                  <input name='' className='contactinput p-3  m-0 mt-0 ms-lg-3' />
                </Col>
                <Col>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Contact"}</p>
                  <input name='' className='contactinput p-3  m-0 mt-0 ms-lg-3' />
                </Col>
                <Col>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Age"}</p>
                  <input name='' className='contactinput p-3  m-0 mt-0 ms-lg-3' />
                </Col>
                <Col>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Subject"}</p>
                  <input name='' className='contactinput p-3  m-0 mt-0 ms-lg-3' />
                </Col>
                <Col>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Profession"}</p>
                  <input name='' className='contactinput p-3  m-0 mt-0 ms-lg-3' />
                </Col> */}
      {/* <Col>
                  <p className='bookingdate text-black text-start ms-lg-4 mt-3 m-0'>{"Suggestions"}</p>
                  <textarea name='' className='contactinput p-3  m-0 mt-0 ms-lg-3' />
                </Col>
                <Col>
                  <img src={captcha} className='w-50 mt-lg-3 mt-3' />
                  <textarea name='' placeholder='Enter Captcha' className='contactinput p-3  m-0 mt-0 ms-lg-3 mt-lg-2 mt-3' />
                </Col>
                <div className='text-center '>
                  <button className='submitbutton  mt-4 p-3'>
                    Submit
                  </button>
                </div>
                <Container fluid className="justify-content-center align-items-center vh-100 ms-5">
                  <Row className="justify-content-center"> */}
      {/* WhatsApp Icon and Text */}
      {/* <Col lg={6} className="d-flex flex-column align-items-center my-3">
                      <div className="d-flex flex-column align-items-center">
                        <img src={whatsapp} className="icons mb-2" alt="WhatsApp" />
                        <p className="icontext">
                          <a href="tel:+91 7796116555" style={{ textDecoration: 'none', color: 'inherit' }}>
                            +91 7796116555
                          </a>
                        </p>
                      </div>
                    </Col> */}

      {/* Phone Icon and Text */}
      {/* <Col lg={6} className="d-flex flex-column align-items-center my-3">
                      <div className="d-flex flex-column align-items-center">
                        <img src={call} className="icons mb-2" alt="Phone" />
                        <p className="icontext">
                          <a href="tel:+912532315966" style={{ textDecoration: 'none', color: 'inherit' }}>
                            +91 2532315966
                          </a>
                        </p>
                      </div>
                    </Col> */}

      {/* Email Icon and Text */}
      {/* <Col lg={6} className="d-flex flex-column align-items-center my-3">
                      <div className="d-flex flex-column align-items-center">
                        <img src={mail} className="icons mb-2" alt="Email" />
                        <p className="icontext">
                          <a href="mailto:secretary@nashikfirst.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                            secretary@nashikfirst.com
                          </a>
                        </p>
                      </div>
                    </Col> */}

      {/* Location Icon and Text */}
      {/* <Col lg={6} className="d-flex flex-column align-items-center my-3">
                      <div className="d-flex flex-column align-items-center">
                        <img src={location} className="icons mb-2" alt="Location" />
                        <p className="icontext text-center">
                          <a href="https://www.google.com/maps?q=Survey+No.+590/591,+Motkari+Nagar,+Near+Nelson+Hospital,+Behind+Tupsakhare+Lawns,+Near+Mumbai+Naka,+Nashik" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Survey No. 590/591, Motkari<br />
                            Nagar, Near Nelson Hospital,<br />
                            Behind Tupsakhare Lawns,<br />
                            Near Mumbai Naka, Nashik.
                          </a>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>

              </Row>
            </div>
          </div>
        </Row>
      </Container> */}
    </>
  );
};

export default Contactus;
