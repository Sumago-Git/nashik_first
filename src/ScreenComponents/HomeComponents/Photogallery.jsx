import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import photo1 from '../../Assets/Assets/Photogallery/photo1.png';
import photo2 from '../../Assets/Assets/Photogallery/photo2.png';
import photo3 from '../../Assets/Assets/Photogallery/photo3.png';
import '../../Components/Photogallery.css';

const Photogallery = () => {
  // Array of photo objects
  const photos = [
    {
      src: photo1,
      text: 'Successful completion of training programme for 2,00,000 Citizens'
    },
    {
      src: photo2,
      text: 'Aika Na Nashikkar – Road Safety Campaign'
    },
    {
      src: photo3,
      text: 'Road Safety Month 2024 – Contest for School Children'
    }
  ];

  return (
    <>
      <Container fluid className='mt-5 pt-4'>
        <h1 style={{ fontWeight: '700' }}>
          Photo <span style={{ color: '#F96945' }}> Gallery</span>
        </h1>
        <Row className='mt-5 p-0 ms-5 me-5'>
          {photos.map((photo, index) => (
            <Col key={index} lg={4}>
              <Card className='photo'>
                <img src={photo.src} className='picture' alt={`Photo ${index + 1}`} />
                <Card.Body>
                  <Card.Text className='mt-3 text1 text-start'>{photo.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Photogallery;
