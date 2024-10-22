import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Components/Youtube.css';
import yt1 from "../../Assets/Assets/Youtube/yt1.png"

const Youtube = () => {
  const [video1Loaded, setVideo1Loaded] = useState(false);
  const [video2Loaded, setVideo2Loaded] = useState(false);

  const loadVideo1 = () => {
    setVideo1Loaded(true);
  };

  const loadVideo2 = () => {
    setVideo2Loaded(true);
  };

  return (
    <>
      <Container className='mt-lg-5'>
        <p className='vdoheadline pb-lg-4 mt-3'>Our Videos</p>
        <Row className="mx-auto">

          {/* Video 1 */}
          <Col xs={12} md={6} className='mb-4'>
          <iframe
              className="w-100 rounded-3"
              style={{ height: "250px" }}
              src="https://www.youtube.com/embed/GCQnntHWj5s?si=orzUJ3jia6vl6Saz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Col>

          {/* Video 2 */}
          <Col xs={12} md={6} className='mb-4'>
            <iframe
              className="w-100 rounded-3"
              style={{ height: "250px" }}
              src="https://www.youtube.com/embed/GCQnntHWj5s?si=orzUJ3jia6vl6Saz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

          </Col>

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
