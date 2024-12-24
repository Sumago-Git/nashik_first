import React, { useEffect, useState } from 'react';
import lghead from "../../Assets/Assets/MainBanner/lghead.jpg";
import im from "../../Assets/Assets/Aboutpage/111 (1).png"
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../../Components/Slotpage.css";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { captchaKey } from '../../App';
import Form from 'react-bootstrap/Form';
import excelFile from "../../Assets/Assets/Excel/your-excel-file.xlsx"
import * as XLSX from 'xlsx';
import { MdOutlineFileDownload } from "react-icons/md";
import InputMask from 'react-input-mask';
import Modal from 'react-bootstrap/Modal';

const Bookingpage = () => {
  const [formData, setFormData] = useState({
    learningNo: '____/_______/____',
    fname: '',
    mname: '',
    lname: '',
    email: '',
    phone: '',
    excel: '',
    // vehicletype: [],
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
  const [category, setCategory] = useState(""); // Add a state for category
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const handleShow = () => setShowModal(true);
  const [slotDatefortest, setslotDatefortest] = useState("")
  console.log(slotDatefortest)

  const [categoryData, setCategoryData] = useState({
    heading: "",
    data: "",
    note: ""
  });

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex
    const phoneRegex = /^[0-9]{10}$/; // 10-digit phone number regex
    const landlineRegex = /^(?:\+91[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?\d{6,8}$/; // Landline number regex
    const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces for name fields
    const charOnlyRegex = /^[A-Za-z]+$/; // Only letters, no spaces or special characters
    const numberOnlyRegex = /^\d+$/; // Only numbers
    let licenseRegex;
    if (!formData.fname) {
      newErrors.fname = "First name is required.";
    } else if (!nameRegex.test(formData.fname)) {
      newErrors.fname = "First name should only contain letters and spaces.";
    }
    if (!formData.lname) {
      newErrors.lname = "Last name is required.";
    } else if (!nameRegex.test(formData.lname)) {
      newErrors.lname = "Last name should only contain letters and spaces.";
    }
    if (category === "RTO – Suspended Driving License Holders Training") {
      licenseRegex = /^[A-Z]{2}\/\d{2}\/[A-Z]{2}\/\d{4}$/; // Format for suspended license holders
    } else {
      licenseRegex = /^[A-Z]{2}\d{2}\/\d{7}\/\d{4}$/; // Format like "MH15/0012345/3456"
    }

    // License number validation
    if (!formData.learningNo) {
      newErrors.learningNo = `${category === "RTO – Suspended Driving License Holders Training"
        ? "Permanent license number is required"
        : "Learning license number is required"
        }`;
    } else if (!licenseRegex.test(formData.learningNo)) {
      newErrors.learningNo = "Please enter a valid license number.";
    }

    if (
      category === "School Students Training – Group" ||
      category === "College/Organization Training – Group"
    ) {
      // Group training validations
      if (!formData.excel) {
        newErrors.excel = "Please upload an Excel file.";
      }
      if (!formData.institution_name) {
        newErrors.institution_name = "Institution name is required.";
      } else if (!nameRegex.test(formData.institution_name)) {
        newErrors.institution_name = "Institution name should only contain letters and spaces.";
      }
      if (!formData.institution_email) {
        newErrors.institution_email = "Institution email is required.";
      } else if (!emailRegex.test(formData.institution_email)) {
        newErrors.institution_email = "Please enter a valid institution email address.";
      }
      if (!formData.institution_phone) {
        newErrors.institution_phone = "Institution phone is required.";
      } else if (!landlineRegex.test(formData.institution_phone)) {
        newErrors.institution_phone =
          "Institution phone number must be a valid format (e.g., +91-123-456789 or 1234567890).";
      }
    } else {
      // Individual training validations
      if (!formData.fname) {
        errors.fname = "First name is required.";
      } else if (!charOnlyRegex.test(formData.fname)) {
        errors.fname = "First name should only contain letters and no spaces.";
      }

      // Last Name Validation
      if (!formData.lname) {
        errors.lname = "Last name is required.";
      } else if (!charOnlyRegex.test(formData.lname)) {
        errors.lname = "Last name should only contain letters and no spaces.";
      }

      if (!formData.email) {
        newErrors.email = "Email is required.";
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }

      if (!formData.phone) {
        newErrors.phone = "Phone is required.";
      } else if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Phone number must be a valid 10-digit number.";
      }
    }

    // Validate the CAPTCHA
    if (!captchaValue) {
      newErrors.captcha = "Please complete the CAPTCHA.";
    }

    // Finalize and set errors
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const requiredExcelColumns = ["fname", "mname", "lname", "email", "phone"];

  const handleChange = (e) => {
    const { name, files } = e.target;

    if (name === 'excel') {
      const file = files[0];

      const allowedExtensions = /(\.xls|\.xlsx)$/i;
      if (file && !allowedExtensions.exec(file.name)) {
        alert("Please upload a valid Excel file (.xls or .xlsx)");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Get headers and validate columns
        const headers = XLSX.utils.sheet_to_json(sheet, { header: 1 })[0];
        const isValidColumns = requiredExcelColumns.every(column => headers.includes(column));

        if (!isValidColumns) {
          alert("The uploaded Excel file does not match the required structure. Please check the column names.");
          e.target.value = "";
          return;
        }

        // Count rows and validate the number of entries
        const rows = XLSX.utils.sheet_to_json(sheet);
        const rowCount = rows.length;

        if (rowCount <= 30 || rowCount >= 70) {
          alert("The number of entries in the Excel file should be greater than 30 and less than 70.");
          e.target.value = "";
          return;
        }

        // If both column structure and row count are valid, set the file in formData
        setFormData((prevData) => ({
          ...prevData,
          [name]: file,
        }));
      };

      reader.readAsArrayBuffer(file);
    } else {
      // Handle other fields
      setFormData((prevData) => ({
        ...prevData,
        [name]: e.target.value,
      }));


    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  // const handleSubmit = async (e) => {


  //   e.preventDefault();

  //   if (!validate()) return;

  //   setIsSubmitting(true); // Start loading
  //   let value = slotdate
  //   const parts = value.split(' '); // Split the string by space
  //   const dateParts = parts[1].split('/'); // Split the date part (e.g., "27/11/2024") by "/"

  //   // Extract day, month, and year
  //   const day = dateParts[0];
  //   const month = dateParts[1];
  //   const year = dateParts[2];

  //   // Format to YYYY-MM-DD
  //   const formattedDate = `${month}/${day}/${year}`;

  //   try {
  //     // Create a new FormData instance
  //     const sessionSlotId = localStorage.getItem('slotsid');

  //     const data = new FormData();

  //     // Append all form fields to the FormData instance
  //     data.append('learningNo', formData.learningNo);
  //     data.append('fname', formData.fname);

  //     data.append('mname', formData.mname);
  //     data.append('lname', formData.lname);
  //     data.append('email', formData.email);
  //     data.append('phone', formData.phone);
  //     data.append('category', category);
  //     data.append('slotsession', slotsession);
  //     data.append('slotdate', formattedDate);
  //     data.append('tempdate', slotDatefortest);
  //     data.append('institution_name', formData.institution_name);
  //     data.append('institution_email', formData.institution_email);
  //     data.append('institution_phone', formData.institution_phone);
  //     data.append('hm_principal_manager_name', formData.hm_principal_manager_name);
  //     data.append('hm_principal_manager_mobile', formData.hm_principal_manager_mobile);
  //     data.append('coordinator_mobile', formData.coordinator_mobile);
  //     data.append('coordinator_name', formData.coordinator_name);
  //     data.append('sessionSlotId', sessionSlotId);

  //     // Append the Excel file if it exists
  //     if (formData.excel) {
  //       data.append('file', formData.excel);
  //     }

  //     // Append the vehicle types as a comma-separated string
  //     // data.append('vehicletype', formData.vehicletype.join(','));

  //     // Make the axios request to the combined endpoint


  //     const response = await axios.post('bookingform/create-uploadOrAddBookingForm', data, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     console.log("response", response);

  //     setFormData({
  //       learningNo: '',
  //       fname: '',
  //       mname: '',
  //       lname: '',
  //       email: '',
  //       phone: '',
  //       excel: '',
  //       // vehicletype: [],
  //     });
  //     handleShow()
  //     setShowModal(true)
  //     setCaptchaValue(null); // Reset the captcha
  //     setErrors({}); // Clear errors
  //     navigate('/training')
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     // Handle error
  //     if (error.response) {
  //       // toast.error(`Error: ${error.response.data.message || 'Something went wrong!'}`);
  //       alert(`Error: ${error.response.data.message || 'Something went wrong!'}`);
  //     } else {
  //       // toast.error('Error: No response from server.');
  //       alert('Error: No response from server.');
  //     }
  //   } finally {
  //     setIsSubmitting(false); // Stop loading
  //   }
  // };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true); // Start loading
    let value = slotdate;
    const parts = value.split(' '); // Split the string by space
    const dateParts = parts[1].split('/'); // Split the date part (e.g., "27/11/2024") by "/"

    // Extract day, month, and year
    const day = dateParts[0];
    const month = dateParts[1];
    const year = dateParts[2];

    // Format to YYYY-MM-DD
    const formattedDate = `${month}/${day}/${year}`;

    // Create a new FormData instance
    const sessionSlotId = localStorage.getItem('slotsid');

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
    data.append('tempdate', slotDatefortest);
    data.append('institution_name', formData.institution_name);
    data.append('institution_email', formData.institution_email);
    data.append('institution_phone', formData.institution_phone);
    data.append('hm_principal_manager_name', formData.hm_principal_manager_name);
    data.append('hm_principal_manager_mobile', formData.hm_principal_manager_mobile);
    data.append('coordinator_mobile', formData.coordinator_mobile);
    data.append('coordinator_name', formData.coordinator_name);
    data.append('sessionSlotId', sessionSlotId);

    // Append the Excel file if it exists
    if (formData.excel) {
      data.append('file', formData.excel);
    }

    // Make the axios request to the combined endpoint
    axios
      .post('bookingform/create-uploadOrAddBookingForm', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log('response', response);

        setFormData({
          learningNo: '',
          fname: '',
          mname: '',
          lname: '',
          email: '',
          phone: '',
          excel: '',
          // vehicletype: [],
        });
        setCaptchaValue(null); // Reset the captcha
        setErrors({}); // Clear errors
        setTimeout(() => {
          navigate('/training');
        }, 3000);
        handleShow();
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // Handle error
        if (error.response) {
          // toast.error(`Error: ${error.response.data.message || 'Something went wrong!'}`);
          alert(`Error: ${error.response.data.message || 'Something went wrong!'}`);
        } else {
          // toast.error('Error: No response from server.');
          alert('Error: No response from server.');
        }
      })
      .finally(() => {
        setIsSubmitting(false); // Stop loading
      });
  };


  useEffect(() => {
    if (category == "RTO – Learner Driving License Holder Training") {
      setCategoryData({
        heading: "Road Safety & Traffic Awareness programme jointly organized by RTO Nashik and Nashik First.",
        data: "This programme is conducted exclusively designed for people holding Learner License & applied for Permanent License. Consists of 2 hour training at Traffic Education Park and knowledge sharing on Traffic Rules, Defensive Driving, Right of Way, Safety measures, Causes of Road Accidents, Do’s and Don’ts while driving. Participants are given attendance certificate which is required to be submitted to RTO before final test.",
        note: "Applicants for a Permanent Driving License who have a Learner Driving License."
      })
    } else if (category == "School Students Training – Group") {
      setCategoryData({
        heading: "This programme is exclusively designed for school students from Std. 5th to Std. 10th.",
        data: "Consists of 2 hours training to create awareness of Basic traffic rules, Road signs, Safety measures and tools, Dos & Don’ts of traffic rules in high school students.",
        note: "No individual bookings accepted. To be booked By the Concerned teacher for batch size of minimum 30 & maximum 50 participants."
      })
    } else if (category == "College/Organization Training – Group") {
      setCategoryData({
        heading: "This programme is exclusively designed for College students, Employees working in various organisations & all other types of adult groups.",
        data: "Consists of 2 hour training to create awareness of Traffic rules, Road signs, Safety measures and tools, Causes of accidents, Dos & Don’ts of traffic rules.",
        note: "No individual bookings accepted. To be booked By the Concerned coordinator for batch size of minimum 30 & maximum 50 participants."
      })
    } else if (category == "RTO – Suspended Driving License Holders Training") {
      setCategoryData({
        heading: "Road Safety & Traffic Awareness programme jointly organized by RTO, Nashik and Nashik First.",
        data: "Consists of 2 hour training at Traffic Education Park and knowledge sharing on Traffic Rules and Licenses Suspension rules, Defensive Driving, Right of Way, Safety Measures, Causes of Road Accidents, Dos and Don’ts while driving. Participants are given attendance certificate which is required to be submitted to RTO to get back suspended license.",
        note: ""
      })
    } else if (category == "RTO – Training for School Bus Driver") {
      setCategoryData({
        heading: "Road Safety & Traffic Awareness programme jointly organized by RTO, Nashik and Nashik First.",
        data: "Consists of 2 hour training at Traffic Education Park and knowledge sharing on Traffic Rules, Defensive Driving, Right of Way, Safety measures, Causes of Road Accidents, Dos and Don’ts while driving. Participants are given attendance certificate which is required to be submitted to RTO to get new permit or renewal of permit.",
        note: ""
      })
    }
  }, [category])

  useEffect(() => {
    if (location && location.state) {
      console.log("location state : ", location.state);
      const selectedSession = location.state.selectedTime.split('-')[1];
      setSlotSession(selectedSession)
      setSlotDate(location.state.selectedDate)
      setslotDatefortest(location.state.temodate)

      // console.log("location.selectedTime", location.state.selectedTime);
      setCategory(location.state.category || ""); // Assume category comes from the location state
      setSlotTime(`${location.state.selectedDate} ${location.state.selectedTime}`);
    }
  }, [location])



  const handleDownload = () => {
    // Assuming you have the Excel file's URL
    const excelFileUrl = excelFile;

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = excelFileUrl;
    link.download = 'your-excel-file.xlsx'; // Specify the file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
  };


  return (
    <>
      <Container fluid className='m-0 p-0'>
        <img src={lghead} className='w-100' alt="Header" />
      </Container>

      <Container fluid className='slotbg pb-3 mb-4'>
        <Container>
          <p className='slotheadline text-start m-0 pt-5'>
            {categoryData.heading}
            {/* Road Safety & Traffic Awareness programme jointly <br />
            organized by RTO, Nashik and Nashik First. */}
          </p>
          <p className='slotpagepara text-start'>
            {categoryData.data}
            {/* This programme is conducted exclusively for people holding Learner License & applied for Permanent License.
            It consists of 2-hour training at Traffic Education Park with knowledge sharing on Traffic Rules, Defensive Driving,
            Right of Way, Safety measures, Causes of Road Accidents, and Do’s and Don’ts while driving.
            Participants are provided with attendance certificates required to be submitted to the RTO before the final test. */}
          </p>
          <p className='slotpagepara text-start' style={{ fontStyle: 'italic', color: "#c90919" }}>
            {categoryData.note}
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
                  <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Institution Landline No.*"}</p>
                  <input
                    name='institution_phone'
                    value={formData.institution_phone}
                    onChange={handleChange}
                    placeholder={"Institution Landline No."}
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
                    maxlength="10"
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
                <Col lg={6} >
                  <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Cordinator Mobile*"}</p>

                  <input
                    name='coordinator_mobile'
                    maxlength="10"
                    value={formData.coordinator_mobile}
                    onChange={handleChange}
                    placeholder={"Cordinator Mobile"}
                    className='dateinput p-3 m-0 mt-0 ms-lg-3'
                  />
                  {errors.coordinator_mobile && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.coordinator_mobile}</p>}
                </Col>
                <Col lg={7} className='mb-3'>
                  <Form.Group controlId="uploadExcel">
                    <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Upload Excel*"} <Button className='rounded-5 border-0' title="Download the sample Excel sheet, enter your details, and reupload it here." style={{ background: "#ee8042" }} onClick={handleDownload}>
                      Download Excel <MdOutlineFileDownload size={20} />
                    </Button></p>
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
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Submitting...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </Button>                </div>
              </Row>
            </form>
          ) : (
            <div className='form-group mb-4'>
              <p className='bookingdate text-black text-start ms-lg-4'>{"Booking Date"}</p>
              <p className='detailtext text-black text-start ms-lg-4 mb-4'>{slotTime}</p>
              <form onSubmit={handleSubmit}>
                <Row className='justify-content-center'>
                  <Col lg={6} md={7} sm={12}>
                    <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>
                      {category === "RTO – Suspended Driving License Holders Training" ? "Permanant License Number*" : "Learning License Number*"}
                    </p>
                    {category === "RTO – Suspended Driving License Holders Training" ?
                      <InputMask
                        mask="**/**/**/****"
                        value={formData.learningNo || ""} // Ensure controlled value
                        onChange={(e) => {
                          // Get the input value and convert it to uppercase
                          const inputValue = e.target.value.toUpperCase();

                          // Update state in real-time
                          setFormData((prevFormData) => ({
                            ...prevFormData,
                            learningNo: inputValue,
                          }));
                        }}
                        placeholder="____/_______/____"
                        className="dateinput p-3 m-0 mt-0 ms-lg-3 custom-placeholder"
                      >
                        {(inputProps) => <input {...inputProps} />}
                      </InputMask>
                      :
                      <InputMask
                        mask="****/*******/****"
                        value={formData.learningNo || ""} // Ensure controlled value
                        onChange={(e) => {
                          // Get the input value and convert it to uppercase
                          const inputValue = e.target.value.toUpperCase();

                          // Update state in real-time
                          setFormData((prevFormData) => ({
                            ...prevFormData,
                            learningNo: inputValue,
                          }));
                        }}
                        placeholder="____/_______/____"
                        className="dateinput p-3 m-0 mt-0 ms-lg-3 custom-placeholder"
                      >
                        {(inputProps) => <input {...inputProps} />}
                      </InputMask>
                    }

                    {errors.learningNo && (
                      <p className='text-start ms-md-4 mt-1 text-danger'>{errors.learningNo}</p>
                    )}
                  </Col>
                  <Col lg={6} md={7}>
                    <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"First Name*"}</p>
                    <input
                      name='fname'
                      value={formData.fname}
                      onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-Z]/g, '')} // Allow only alphabets

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
                      onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-Z]/g, '')} // Allow only alphabets

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
                      onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-Z]/g, '')} // Allow only alphabets

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
                      placeholder={"Email"}
                      className='dateinput p-3 m-0 mt-0 ms-lg-3'
                    />
                    {errors.email && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.email}</p>}
                  </Col>
                  <Col lg={6} md={7}>
                    <p className='bookingdate text-black text-start ms-lg-4 ms-sm-3 mt-3'>{"Phone*"}</p>
                    <input
                      name='phone'
                      maxlength="10"
                      value={formData.phone}
                      onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} // Restrict to numbers only

                      onChange={handleChange}
                      placeholder={"Phone"}
                      className='dateinput p-3 m-0 mt-0 ms-lg-3 ms-md-0'
                    />
                    {errors.phone && <p className='text-start ms-md-4 mt-1 text-danger'>{errors.phone}</p>}
                  </Col>
                  {/* <Col lg={12} md={12}>
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
                  </Col> */}
                  <Col lg={12}>
                    <ReCAPTCHA
                      sitekey={captchaKey} // Replace with your Google reCAPTCHA site key
                      onChange={handleCaptchaChange}
                      className='m-3'
                    />
                    {errors.captcha && <p className='text-start mt-1 text-danger'>{errors.captcha}</p>}
                  </Col>
                  <div className='text-center'>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Submitting...
                        </span>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </div>
                </Row>
              </form>
            </div>
          )}
        </Container>
      </Container >


      <Modal show={showModal} size="lg" onHide={() => setShowModal(false)} >
        {/* <Modal.Header closeButton>
            Thank you for your registration
          </Modal.Header> */}
        <Modal.Body>
          <img src={im} className='img-fluid w-100' alt="" />
        </Modal.Body>
      </Modal>

    </>
  );
}

export default Bookingpage;
