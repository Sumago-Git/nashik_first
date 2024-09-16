import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Components/Youtube.css';

const Youtube = () => {
  return (
    <>
      <Container className='mt-5 '>
        <Row className="mx-auto">
          <Col lg={6}>
            <div className="video-container" style={{ position: 'relative', width: '500px', height: '250px' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/0j3X0OaHZro"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="video-container" style={{ position: 'relative', width: '550px', height: '250px' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/WpJFmvsVRW4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Youtube;
