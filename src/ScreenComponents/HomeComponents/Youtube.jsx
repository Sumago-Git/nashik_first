import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import yt1 from '../../Assets/Assets/Youtube/yt1.png';
import '../../Components/Youtube.css';

const Youtube = () => {
  // Array of YouTube videos
  const videos = [
    {
      imgSrc: yt1,
      url: 'https://youtu.be/Rek0NWPCNOc?si=xflborI9KrV-2AhW',
    },
    {
      imgSrc: yt1,
      url: null, // no link for the second image
    },
  ];

  return (
    <>
      <Container className='mt-5'>
        <Row className='mx-auto'>
          {videos.map((video, index) => (
            <Col key={index} lg={6}>
              {video.url ? (
                <a href={video.url}>
                  <img src={video.imgSrc} className='yt1' alt={`YouTube video ${index + 1}`} />
                </a>
              ) : (
                <img src={video.imgSrc} className='yt1' alt={`YouTube thumbnail ${index + 1}`} />
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Youtube;
