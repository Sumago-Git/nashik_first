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
            <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>

              <iframe src="https://www.youtube.com/embed/vmFT7ial_pM?si=5uIAVgRzK2KB4cth"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className='w-100'
                style={{ height: "250px" }}>
              </iframe>

            </div>
          </Col>

          {/* Video 2 */}
          <Col xs={12} md={6} className='mb-4'>
            <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>

              <iframe width="560" height="315" src="https://www.youtube.com/embed/GCQnntHWj5s?si=1436175hz8suUCDv"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className='w-100'
                style={{ height: "250px" }}>
              </iframe>

            </div>
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
