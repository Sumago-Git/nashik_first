import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Components/Youtube.css';

const Youtube = () => {
  return (
    <>
      <Container className='mt-lg-5'>
        <p className='vdoheadline pb-lg-4 mt-3'>Our Videos</p>
        <Row className="mx-auto">
          <Col xs={12} md={6} className='mb-4'>
            <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://www.youtube.com/embed/RmJXd5fviBA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Col>
          <Col xs={12} md={6} className='mb-4'>
            <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://www.youtube.com/embed/vmFT7ial_pM?si=3ph4gwo7_9Ef1jKu"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Col>
          <Col  className='pb-4'>
         < a href='https://www.youtube.com/@nashikfirst4058' target="_blank">
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
