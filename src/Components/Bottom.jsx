import React, { useEffect, useState } from 'react';
import '../Components/Header.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link
import phone from '../Assets/Assets/Bottom/phone.png';
import email from '../Assets/Assets/Bottom/email.png';
import location from '../Assets/Assets/Bottom/location.png';
import Ellipse from '../Assets/Assets/Bottom/Ellipse 24.png';
import x from '../Assets/Assets/Bottom/twiter.png';
import facebook from '../Assets/Assets/Bottom/facebook.png';
import youtube from '../Assets/Assets/Bottom/youtube.png';
import insta from '../Assets/Assets/Bottom/insta.png';
import whatsapp from '../Assets/Assets/Bottom/whatsapp.png';
import sumagologo from "../Assets/Assets/Bottom/Sumagologo.png";
import whatsappborder from "../Assets/Assets/Bottom/whatsappborder.png"
import phoneborder from "../Assets/Assets/Bottom/phoneborder.png";
import emailborder from "../Assets/Assets/Bottom/emailborder.png";
import locationborder from "../Assets/Assets/Bottom/locationborder.png"
import wappChat from "../Assets/Assets/Home/wapImg.gif"
import call from "../Assets/Assets/Bottom/phone1.png"
import axios from 'axios';
import { FaFacebookF, FaLinkedin, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from 'react-icons/md';
const Bottom = () => {
  const [footerDate, setFooterDate] = useState("")
  const [socialLinks, setSocialLinks] = useState([])

  const [getdata, setdata] = useState([]);
  const [contact_details, setcontact_details] = useState([]);

  const followus = () => {
    axios.get('social-contact/socialcontacts')
      .then((res) => {
        setdata(res.data.responseData)
      })
      .catch((err) => {
        console.log(err);

      })


  }

  const getcontact_details = () => {
    axios.get('contact-detail/get-contactdetails')
      .then((res) => {
        setcontact_details(res.data.responseData)
      })
      .catch((err) => {
        console.log(err);

      })
  }

  useEffect(() => {
    getcontact_details();
    followus();

  }, [])
  useEffect(() => {
    // Create a new Date object
    const currentDate = new Date();

    // Get the current year
    const currentYear = currentDate.getFullYear();
    setFooterDate(currentYear)
    // Log or use the current year
    console.log("Current year:", currentYear);
  }, [])
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Training', path: '/training' },
    { name: ' Video', path: '/awarnessvideo' }
  ];

  const contactDetails = [
    { icon: whatsappborder, text: '+91 7796116555', isPhone: true, type: 'whatsapp' },
    { icon: phoneborder, text: '+91 2532315966', isPhone: true, type: 'phone' },
    { icon: emailborder, text: 'secretary@nashikfirst.com', isEmail: true },
    { icon: locationborder, text: 'Survey No. 590/591, Motkari Nagar, Near Nelson Hospital, Behind Tupsakhare Lawns, Near Mumbai Naka, Nashik. ', isAddress: true },
  ];



  const handleClick = (type, text) => {
    switch (type) {
      case 'phone':
        window.location.href = `tel:${text}`;
        break;
      case 'email':
        window.location.href = `mailto:${text}`;
        break;
      case 'whatsapp':
        window.open(`https://wa.me/${text.replace('+', '').replace(/\s/g, '')}`, '_blank');
        break;
      case 'location':
        window.open(`https://www.google.com/maps?q=${encodeURIComponent(text)}`, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <section className='bottombg'>
        <Container fluid className='pb-2'>
          <Row className='loc'>
            <Col lg={5}>
              <p className='text-start bottomheadline ms-4 loc'>LOCATION</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29995.949551075715!2d73.779067!3d19.987784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb11dd2a51f9%3A0xe9a66ddcd7464b16!2sTraffic%20Education%20Park!5e0!3m2!1sen!2sin!4v1727086121224!5m2!1sen!2sin"
                className='d-none d-md-block mt-3'
                style={{ width: '100%', height: '240px', borderRadius: '9px' }}
                loading="lazy"
              ></iframe>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29995.949551075715!2d73.779067!3d19.987784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb11dd2a51f9%3A0xe9a66ddcd7464b16!2sTraffic%20Education%20Park!5e0!3m2!1sen!2sin!4v1727086121224!5m2!1sen!2sin"
                className='d-block d-md-none mt-3'
                style={{ width: '100%', height: '250px', borderRadius: '9px' }}
                loading="lazy"
              ></iframe>

            </Col>

            <Col sm={6} lg={3} md={6} className='mt-5 '>
              <p className='text-start bottomheadline pb-3 ms-3'>Quick Links</p>
              {quickLinks.map((link, index) => (
                <Row key={index}>
                  <Col sm={1} xs={1} className='mt-3 ms-4'>
                    <img src={Ellipse} alt="Bullet" style={{ width: '15px' }} />
                  </Col>
                  <Col sm={10} xs={10} className='mt-3'>
                    <h5 className='text-start'>
                      <Link to={link.path} onClick={() => window.scrollTo(0, 0)} className='text-decoration-none  quicklinks'>
                        {link.name}
                      </Link>
                    </h5>
                  </Col>
                </Row>
              ))}
            </Col>


            <Col sm={12} lg={4} md={6} className="mt-5">
              <p className='text-start bottomheadline pb-3 ms-3'>Contact Details</p>
              {contactDetails.map((detail, index) => (
                <Row
                  className={`align-items-center mt-2 ms-3 ${detail.isAddress ? 'pt-0' : ''}`}
                  key={index}
                  onClick={() => handleClick(detail.type || (detail.isEmail && 'email') || (detail.isAddress && 'location'), detail.text)}
                  style={{ cursor: 'pointer' }}
                >
                  <Col lg={1} xs={2} className='p-0 me-lg-3 border-2 ps-1'>

                    <div class="rounded-circle footericon">
                      <img src={detail.icon} className='mt-2 ' />
                    </div>


                  </Col>
                  <Col lg={10} xs={10} className='p-0 '>


                    {contact_details.isAddress ? (
                      <p className="text-start" style={{ fontSize: "19px", fontWeight: "600" }}>{detail.whatsapp}</p>
                    ) : detail.isPhone ? (
                      <h5 className="text-start ms-0 p-0">{detail.text}</h5>
                    ) : detail.isEmail ? (
                      <h5 className="text-start ms-0 p-0">{detail.text}</h5>
                    ) : (
                      <h5 className="text-start ms-0 p-0">{detail.text}</h5>
                    )}
                  </Col>
                </Row>
              ))}


            </Col>
          </Row>
          <Row>
          <Col md={6} lg={8}>
            <div style={{ fontWeight: "600", fontSize: "20px", color: "white" }}>
              <p className=' text-start ms-lg-3 mt-lg-4 ms-4 m-lg-0 '> Visitor count : <a href="#" target="_blank">
                <img src="https://hitwebcounter.com/counter/counter.php?page=18050933&style=0025&nbdigits=5&type=page&initCount=10" title="Counter Widget" Alt="Visit counter For Websites" border="0" /></a>   </p>
            </div>
            </Col>
            <Col md={6} lg={4}>
              <Row className="mt-0 pb-0 mt-lg-3 ">
                <Col lg={4} className='text-start p-0 ms-lg-4' style={{ width: "30%" }}>
                  <h5 className=' mt-2  text-white'>Follow Us <span className='d-none d-md-inline'>On</span></h5>
                </Col>
                {
                  getdata.map((a) => {
                    return (
                      <>
                        <Col lg={1} xs={2} className='p-0  mx-lg-3 ms-lg-5'>
                          <a href={a.facebook} target="_blank" rel="noopener noreferrer" className='mt-3'>
                            <Card className=" p-2 rounded-5 mt-1  iconHover1" style={{ width: "fit-content" }}>
                              <FaFacebookF />
                            </Card>
                          </a>
                        </Col>
                        <Col lg={1} xs={2} className='p-0  mx-lg-3  ms-lg-0'>
                          <a href={a.instagram} target="_blank" rel="noopener noreferrer" className='mt-3'>
                            <Card className=" p-2 rounded-5 mt-1  iconHover2" style={{ width: "fit-content" }}>
                              <BsInstagram />
                            </Card>
                          </a>
                        </Col>
                        <Col lg={1} xs={2} className='p-0  mx-lg-3  ms-lg-0'>
                          <a href={a.youtube} target="_blank" rel="noopener noreferrer" className='mt-3'>
                            <Card className=" p-2 rounded-5 mt-1  iconHover3" style={{ width: "fit-content" }}>
                              <FaYoutube />
                            </Card>
                          </a>
                        </Col>
                        <Col lg={1} xs={2} className='p-0 mx-lg-3   ms-lg-0'>
                          <a href={a.twitter} target="_blank" rel="noopener noreferrer" className='mt-3'>
                            <Card className=" p-2 rounded-5 mt-1  iconHover4" style={{ width: "fit-content" }}>
                              {/* <FaWhatsapp /> */}
                              <FaXTwitter />
                            </Card>
                          </a>
                        </Col>
                        {/* <Col lg={1} xs={2} className='p-0 mx-lg-3   ms-lg-0'>
                          <a href={a.linkedin} target="_blank" rel="noopener noreferrer" className='mt-3'>
                            <Card className=" p-2 rounded-5 mt-1  iconHover4" style={{ width: "fit-content" }}>
                              <FaLinkedin />
                            </Card>
                          </a>
                        </Col> */}
                      </>
                    )
                  })
                }



              </Row>
            </Col>
          </Row>
          <p className='copyright mt-lg-2 m-0 p-0 mt-1 '>© {footerDate} Copyright <span style={{ fontSize: "20px" }}>Nashik First</span> : Made with Passion by <a href='https://www.sumagoinfotech.com/' target="_blank"> <img src={sumagologo} style={{ width: "250px" }} /> </a> </p>
          <p className='p-0 m-0 copyright mt-0 p-0 mt-1'>*This Website is updated in 2024 </p>

        </Container>
        {/* <div className="">
          <div className="d-flex justify-content-end">
            <style>
              {`
      @keyframes zoomInOut {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
      }
    `}
            </style>
            <a href="tel:+917796116555" target="_blank" rel="noopener noreferrer">
              <img
                src={call}
                alt="call"
                className="m-4 callIcon"
                style={{
                  zIndex: "1",
                  position: "fixed",
                  bottom: "6rem",
                  right: "0",
                  padding: "0.4rem",
                  animation: "zoomInOut 2s infinite ease-in-out",
                  width: "65px", // Adjust the size as needed
                  height: "65px", // Ensure proportional dimensions
                }}
              />
            </a>
          </div> */}

        {/* </div > */}
        {/* <div className="">
          <div className="d-flex justify-content-end">
            <a href="https://wa.me/+917796116555?text=Hello How Can I Help You ?" target="_blank">
              <img src={wappChat} alt="Whatsapp" className="m-4 wappIcons" style={{ zIndex: "1", position: "fixed", bottom: "1rem", right: "0" }} />
            </a>
          </div>
        </div > */}
      </section>
    </>
  );
};

export default Bottom;