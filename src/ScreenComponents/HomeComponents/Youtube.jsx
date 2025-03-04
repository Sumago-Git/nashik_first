import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Components/Youtube.css';
import yt1 from "../../Assets/Assets/Youtube/yt1.png"
import yt2 from "../../Assets/Assets/Youtube/yt2.png"
import axios from 'axios';

const Youtube = () => {
  const [video1Loaded, setVideo1Loaded] = useState(false);
  const [video2Loaded, setVideo2Loaded] = useState(false);

  const [getdata, setdata] = useState([]);

  const fetchdata = () => {
    axios.get('homeyoutube/get-homeyoutube')
      .then((res) => {
        setdata(res.data.responseData)
        console.log(res.data.responseData);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    fetchdata();
  }, [])
  const loadVideo1 = () => {
    setVideo1Loaded(true);
  };

  const loadVideo2 = () => {
    setVideo2Loaded(true);
  };

  return (
    <>
      <section className='mt-5 mt-lg-0'>
        <Container className='mt-lg-5'>

          <Row className="mx-auto">
            {
              getdata.map((a) => {
                return (
                  <>
                    <Col xs={12} md={6} className='mb-4'>
                      {/* <iframe  src="https://www.youtube.com/embed/0j3X0OaHZro" title="Nashik First" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                      <iframe
                        className='w-100 rounded-3'
                        style={{ height: "280px" }}
                        src={a.mediaurl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
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
                <button className='returnbutton py-1'>
                  View More
                </button>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Youtube;
