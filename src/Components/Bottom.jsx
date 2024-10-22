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
import axios from 'axios';
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
const Bottom = () => {
  const [footerDate, setFooterDate] = useState("")
  const [socialLinks, setSocialLinks] = useState([])

  useEffect(() => {
    axios
      .get("social-contact/get-socialcontacts")
      .then((response) => {
        if (response.data) {
          console.log("response", response.data);
        } else {
          // setSocialLinks(response.data.);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
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
    { name: 'Traffic Awareness Video', path: '/awarnessvideo' }
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
        <Container fluid className='pb-5'>
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
              <div style={{ fontWeight: "600", fontSize: "20px" }}>
                <p className=' text-start  ms-lg-3 mt-lg-3 m-lg-0'> Visitor count :- 10000235 </p>
                {/* <p className=' text-start  ms-lg-3 '>  </p>. */}
              </div>
            </Col>

            <Col sm={6} lg={3} className='mt-5 '>
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

            <Col sm={12} lg={4} className="mt-5">
              <p className='text-start bottomheadline pb-3 ms-3'>Contact Details</p>
              {contactDetails.map((detail, index) => (
                <Row
                  className={`align-items-center mt-2 ms-3 ${detail.isAddress ? 'pt-0' : ''}`}
                  key={index}
                  onClick={() => handleClick(detail.type || (detail.isEmail && 'email') || (detail.isAddress && 'location'), detail.text)}
                  style={{ cursor: 'pointer' }}
                >
                  <Col lg={1} xs={2} className='p-0 me-lg-3 border-2 ps-1'>
                    {/* <img src={detail.icon} alt="Icon" className={`footericon ${detail.isAddress ? 'mb-5' : ''}`} /> */}
                    <div class="rounded-circle footericon">
                      <img src={detail.icon} className='mt-2 ' />
                    </div>


                  </Col>
                  <Col lg={10} xs={10} className='p-0 '>
                    {detail.isAddress ? (
                      <p className="text-start" style={{ fontSize: "19px", fontWeight: "600" }}>{detail.text}</p>
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

              <Row className="mt-0 pb-0">
                <Col lg={4} className='text-start p-0'>
                  <h5 className=' mt-2 ms-4'>Follow Us On</h5>
                </Col>
                <Col lg={1} xs={2} className='p-0  ms-4'>
                  <a href={"https://www.facebook.com/Nashikfirsttrafficpark/"} target="_blank" rel="noopener noreferrer" className='mt-3'>
                    <Card className=" p-2 rounded-5 mt-1 mx-lg-3 iconHover1" style={{ width: "fit-content" }}>
                      <FaFacebookF />
                    </Card>
                  </a>
                </Col>
                <Col lg={1} xs={2} className='p-0  ms-4'>
                  <a href={"https://www.instagram.com/nashikfirst/"} target="_blank" rel="noopener noreferrer" className='mt-3'>
                    <Card className=" p-2 rounded-5 mt-1 mx-lg-3 iconHover2" style={{ width: "fit-content" }}>
                      <BsInstagram />
                    </Card>
                  </a>
                </Col>
                <Col lg={1} xs={2} className='p-0  ms-4'>
                  <a href={"https://www.youtube.com/channel/UC4AHC6DgEBtIFZ74PxPoQqw"} target="_blank" rel="noopener noreferrer" className='mt-3'>
                    <Card className=" p-2 rounded-5 mt-1 mx-lg-3 iconHover3" style={{ width: "fit-content" }}>
                      <AiOutlineYoutube />
                    </Card>
                  </a>
                </Col>
                <Col lg={1} xs={2} className='p-0  ms-4'>
                  <a href={"https://twitter.com/anfnashikfirst"} target="_blank" rel="noopener noreferrer" className='mt-3'>
                    <Card className=" p-2 rounded-5 mt-1 mx-lg-3 iconHover4" style={{ width: "fit-content" }}>
                      <BsTwitterX />
                    </Card>
                  </a>
                </Col>

              </Row>
            </Col>
          </Row>
          <p className='copyright mt-lg-2 m-0 p-0 mt-4 '>© {footerDate} Copyright <span style={{ fontSize: "20px" }}>Nashik First</span> : Made with Passion by <a href='https://www.sumagoinfotech.com/' target="_blank"> <img src={sumagologo} style={{ width: "250px" }} /> </a> </p>
          <p className='p-0 m-0 copyright mt-0 p-0 mt-4'>*This Website is updated in 2024 </p>

        </Container>
      </section>
    </>
  );
};

export default Bottom;
