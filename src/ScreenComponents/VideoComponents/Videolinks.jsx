import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import yt1 from '../../Assets/Assets/Youtube/yt1.png'
import '../../Components/Video.css';



const Videolinks = () => {

    const videos = [
        {
          imgSrc: yt1,
          url: 'https://youtu.be/Rek0NWPCNOc?si=xflborI9KrV-2AhW',
        },
        {
          imgSrc: yt1,
          url: null, 
        },
      ];

  return (
    <>

    <h1 className='mt-5 ourvideoheadline'>Our Video</h1>
    <Container className='mt-5 pb-5'>
        <Row className='mx-5 '>
          {videos.map((video, index) => (
            <Col key={index} lg={6} md={12} sm={12}>
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
  )
}

export default Videolinks
