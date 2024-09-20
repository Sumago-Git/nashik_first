import React from 'react';
import '../../Components/Video.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import video from '../../Assets/Assets/VideoPage/video.png';
import lghead from "../../Assets/Assets/MainBanner/lghead.png"
import img4 from "../../Assets/Assets/MainBanner/img4.jpg"

const AwarnessVideo = () => {
  const title = 'Nashik first traffic';

  return (
    <>
      <img src={lghead} className='lghead d-none d-md-block' />
      <img src={img4} className='img4 d-block d-md-none' />
      <Container fluid className='videobg pb-5'>
        <h1 className='pt-5  videoheadline'>Traffic Awareness Video</h1>

        <Container className='pb-4'>
          <Row className='mx-lg-4'>
            {Array.from({ length: 9 }).map((_, index) => (
              <Col lg={4} md={6} sm={12} key={index} className={index >= 3 ? 'mt-5' : 'mt-4'}>
                <Card style={{ width: '22rem', borderRadius: '20px', backgroundColor: '#F96945' }}>
                  <img src={video} className='videoimg' alt='Video thumbnail' />
                  <text className='mb-3 videotext pb-0'>{title}</text>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default AwarnessVideo;
