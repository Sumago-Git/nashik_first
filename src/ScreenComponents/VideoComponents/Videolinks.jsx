import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Components/Youtube.css';
import yt1 from "../../Assets/Assets/Youtube/yt1.png"
import axios from 'axios';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Youtube = () => {


  const [getdata, setdata] = useState([]);

  const fetchdata = () => {
    axios.get('Videos/get-Videos')
      .then((res) => {
        let data = [...res.data.responseData].reverse()
        setdata(data)
      })
      .catch((err) => {
        console.log(err);

      })
  }
  useEffect(() => {
    fetchdata();
    Aos.init();
  }, [])

  
 
 

  return (
    <>
      <Container className='mt-lg-5'>
        <p className='vdoheadline pb-lg-4 mt-3'>Our Videos</p>
        <Row className="mx-auto">
          {
            getdata.map((a) => {
              return (
                <>
                  <Col xs={12} md={6} className='mb-4' data-aos="fade-up">
                    <iframe
                      className="w-100 rounded-3"
                      style={{ height: "280px" }}
                      src={a.mediaurl}
                      title={a.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </Col>
                </>
              )
            })
          }
          <Col className='pb-4'>
            <a href='https://www.youtube.com/@nashikfirst4058' target="_blank" rel="noopener noreferrer">
              <button className='returnbutton p-lg-3 mt-2'>
                View More
              </button>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Youtube;
