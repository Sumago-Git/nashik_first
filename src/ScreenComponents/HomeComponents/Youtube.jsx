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
        
        <Row className="mx-auto">
          
          {/* Video 1 */}
          <Col xs={12} md={6} className='mb-4'>
            <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              {!video1Loaded ? (
                <img
                src={yt1}
                alt="Custom Thumbnail"
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={loadVideo1}
              />
              ) : (
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  src="https://www.youtube.com/embed/RmJXd5fviBA?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </Col>
          
          {/* Video 2 */}
          <Col xs={12} md={6} className='mb-4'>
            <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              {!video2Loaded ? (
                <img
                src={yt1}
                alt="Custom Thumbnail"
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={loadVideo2}
              />
              ) : (
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  src="https://www.youtube.com/embed/vmFT7ial_pM?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
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
