import React, { useEffect, useState } from 'react';
import lghead from "../../Assets/Assets/MainBanner/lghead.jpg";
import { Container, Row, Col } from 'react-bootstrap';
import "../../Components/Slotpage.css";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { captchaKey } from '../../App';
import Form from 'react-bootstrap/Form';

const Bookingpage = () => {
  const [formData, setFormData] = useState({
    learningNo: '',
    fname: '',
    mname: '',
    lname: '',
    email: '',
    phone: '',
    excel: '',
    vehicletype: [],
    institution_name: "",
    institution_email: "",
    institution_phone: "",
    hm_principal_manager_name: "",
    hm_principal_manager_mobile: "",
    coordinator_mobile: "",
    coordinator_name: ""
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null);
  const [slotTime, setSlotTime] = useState("")
  const location = useLocation()
  const [slotsession, setSlotSession] = useState("")
  const [slotdate, setSlotDate] = useState("")
  const [excel, setexcel] = useState("")
  const [category, setCategory] = useState(""); // Add a state for category

  const validate = () => {
    const newErrors = {};
    if (category === "School Students Training – Group" || category === "College/Organization Training – Group") {
      if (!formData.excel) newErrors.excel = 'Please upload an Excel file.';
    } else {
      if (!formData.learningNo) newErrors.learningNo = 'License number is required';
      if (!formData.fname) newErrors.fname = 'First name is required';
      if (!formData.mname) newErrors.mname = 'Middle name is required';
      if (!formData.lname) newErrors.lname = 'Last name is required';
      if (!formData.email) newErrors.email = 'email is required';
      if (!formData.phone) newErrors.phone = 'phone is required';
    }
    if (!captchaValue) newErrors.captcha = 'Please complete the CAPTCHA';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, files } = e.target;

    if (name === 'excel') {
      const file = files[0];
      if (file) {
        const validExtensions = ['xls', 'xlsx'];
        const fileExtension = file.name.split('.').pop().toLowerCase();

        // Check if the uploaded file is an Excel file
        if (!validExtensions.includes(fileExtension)) {
          alert('Only Excel files are accepted.'); // Alert for invalid file type
          setErrors((prev) => ({
            ...prev,
            excel: 'Please upload an Excel file.',
          }));
          setFormData((prev) => ({ ...prev, excel: '' })); // Clear the file input
          return;
        }

        // If valid, set the file
        setErrors((prev) => ({ ...prev, excel: '' })); // Clear error if valid
        setFormData((prev) => ({ ...prev, [name]: file })); // Set the file
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: e.target.value }));
    }
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      vehicletype: prevState.vehicletype.includes(value)
        ? prevState.vehicletype.filter((type) => type !== value)
        : [...prevState.vehicletype, value],
    }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);

    if (!validate()) return;
    let value = slotdate
    const parts = value.split(' '); // Split the string by space
    const dateParts = parts[1].split('/'); // Split the date part (e.g., "27/11/2024") by "/"

    // Extract day, month, and year
    const day = dateParts[0];
    const month = dateParts[1];
    const year = dateParts[2];

    // Format to YYYY-MM-DD
    const formattedDate = `${month}/${day}/${year}`;

    try {
      // Create a new FormData instance
      const data = new FormData();

      // Append all form fields to the FormData instance
      data.append('learningNo', formData.learningNo);
      data.append('fname', formData.fname);
      data.append('mname', formData.mname);
      data.append('lname', formData.lname);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('category', category);
      data.append('slotsession', slotsession);
      data.append('slotdate', formattedDate);
      data.append('institution_name', formData.institution_name);
      data.append('institution_email', formData.institution_email);
      data.append('institution_phone', formData.institution_phone);
      data.append('hm_principal_manager_name', formData.hm_principal_manager_name);
      data.append('hm_principal_manager_mobile', formData.hm_principal_manager_mobile);
      data.append('coordinator_mobile', formData.coordinator_mobile);
      data.append('coordinator_name', formData.coordinator_name);

      // Append the Excel file if it exists
      if (formData.excel) {
        data.append('file', formData.excel);
      }

      // Append the vehicle types as a comma-separated string
      data.append('vehicletype', formData.vehicletype.join(','));

      // Make the axios request to the combined endpoint
      const response = await axios.post('bookingform/create-uploadOrAddBookingForm', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response:', response.data);
      // Show success message
      alert('Booking successfully created!');

      // Resetting the form
      setFormData({
        learningNo: '',
        fname: '',
        mname: '',
        lname: '',
        email: '',
        phone: '',
        excel: '',
        vehicletype: [],
      });
      setCaptchaValue(null); // Reset the captcha
      setErrors({}); // Clear errors
      navigate('/training')
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
      if (error.response) {
        alert(`Error: ${error.response.data.message || 'Something went wrong!'}`);
      } else {
        alert('Error: No response from server.');
      }
    }
  };


  useEffect(() => {
    if (location && location.state) {
      console.log("location state : ", location.state);
      const selectedSession = location.state.selectedTime.split('-')[1];
      setSlotSession(selectedSession)
      setSlotDate(location.state.selectedDate)
      // console.log("location.selectedTime", location.state.selectedTime);
      setCategory(location.state.category || ""); // Assume category comes from the location state
      setSlotTime(`${location.state.selectedDate} ${location.state.selectedTime}`);
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



        <Container className='bookingdetails mt-5 pt-4 pb-3 '>
          <h1 className='bookingheadline mt-3 mx-auto'>Please fill in your details</h1>
          {category === "School Students Training – Group" || category === "College/Organization Training – Group" ? (
            <form onSubmit={handleSubmit}>
              <Row className=''>
                <Col lg={6} md={7} sm={12}>
                  <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Institution Name*"}</p>
                  <input
                    name='institution_name'
                    value={formData.institution_name}
                    onChange={handleChange}
                    placeholder={"Institution Name"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                  {errors.institution_name && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.institution_name}</p>}
                </Col>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Institution Email*"}</p>
                  <input
                    name='institution_email'
                    value={formData.institution_email}
                    onChange={handleChange}
                    placeholder={"Institution Email"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                  {errors.institution_email && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.institution_email}</p>}
                </Col>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Institution Phone*"}</p>
                  <input
                    name='institution_phone'
                    value={formData.institution_phone}
                    onChange={handleChange}
                    placeholder={"Institution Phone"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                  {errors.institution_phone && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.institution_phone}</p>}
                </Col>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Principal/Manager Name*"}</p>
                  <input
                    name='hm_principal_manager_name'
                    value={formData.hm_principal_manager_name}
                    onChange={handleChange}
                    placeholder={"Principal/Manager Name"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                  {errors.hm_principal_manager_name && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.hm_principal_manager_name}</p>}
                </Col>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Principal/Manager Mobile*"}</p>
                  <input
                    name='hm_principal_manager_mobile'
                    value={formData.hm_principal_manager_mobile}
                    onChange={handleChange}
                    placeholder={"Principal/Manager Mobile"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                  {errors.hm_principal_manager_mobile && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.hm_principal_manager_mobile}</p>}
                </Col>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Coordinator Name*"}</p>
                  <input
                    name='coordinator_name'
                    value={formData.coordinator_name}
                    onChange={handleChange}
                    placeholder={"Cordinator Name"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                  {errors.coordinator_name && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.coordinator_name}</p>}
                </Col>
                <Col lg={6}>
                  <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Cordinator Mobile*"}</p>
                  <input
                    name='coordinator_mobile'
                    value={formData.coordinator_mobile}
                    onChange={handleChange}
                    placeholder={"Cordinator Mobile"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                  {errors.coordinator_mobile && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.coordinator_mobile}</p>}
                </Col>
                <Col lg={7} className='mb-3'>
                  <Form.Group controlId="uploadExcel">
                    <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Upload Excel*"}</p>
                    <Form.Control
                      type="file"
                      name='excel'
                      accept=".xls,.xlsx"
                      onChange={handleChange}
                    />
                    {errors.excel && <p className='text-start ms-md-1 mt-1 text-danger'>{errors.excel}</p>}
                  </Form.Group>
                </Col>

                <Col lg={6} className='mb-3'>
                  <ReCAPTCHA
                    sitekey={captchaKey} // Replace with your Google reCAPTCHA site key
                    onChange={handleCaptchaChange}
                  />
                  {errors.captcha && <p className='text-start mt-1 text-danger'>{errors.captcha}</p>}
                </Col>

                <div className='text-center'>
                  <button className='returnbutton p-lg-2 mt-4' type='submit'>Book Now</button>
                </div>
              </Row>
            </form>
          ) : (
            <div className='form-group mb-4'>
              <p className='bookingdate text-black text-start ms-lg-4'>{"Booking Date"}</p>
              <p className='detailtext text-black text-start ms-lg-4 mb-4'>{slotTime}</p>
              <form onSubmit={handleSubmit}>
                <Row className='justify-content-center'>
                  <Col lg={6} md={7} sm={12}>
                    <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Learning License Number*"}</p>
                    <input
                      name='learningNo'
                      value={formData.learningNo}
                      onChange={handleChange}
                      placeholder={"MH15/0012345/2021"}
                      className='dateinput p-3 m-0 mt-0 ms-lg-3'
                    />
                    {errors.learningNo && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.learningNo}</p>}
                  </Col>
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
                    <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"email*"}</p>
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
                    <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"phone*"}</p>
                    <input
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={"phone"}
                      className='dateinput p-3 m-0 mt-0 ms-lg-3 ms-md-0'
                    />
                    {errors.phone && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.phone}</p>}
                  </Col>
                  <Col lg={12} md={12}>
                    <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Vehicle type*"}</p>
                    <Row>
                      {['2 Wheelers', '3/5 Wheelers', '4 Wheelers Heavy', '4 Wheelers Light'].map((type) => (
                        <Col xs={6} key={type}>
                          <Row>
                            <Col xs={2} sm={2} lg={1} className='ms-lg-4'>
                              <input
                                type="checkbox"
                                className="radiobtn mt-1"
                                value={type}
                                checked={formData.vehicletype.includes(type)}
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
          )}




        </Container>
      </Container>
    </>
  );
}

export default Bookingpage;
