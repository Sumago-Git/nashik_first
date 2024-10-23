import React from 'react'
import lghead from "../../Assets/Assets/MainBanner/lghead.jpg"
import img4 from "../../Assets/Assets/Home/traffic_education_mob.png"
import photo1 from '../../Assets/Assets/Photogallery/photo1.png';
import photo2 from '../../Assets/Assets/Photogallery/photo2.png';
import photo3 from '../../Assets/Assets/Photogallery/photo3.png';
import { Col, Container, Row, Card } from 'react-bootstrap'

const Newsphoto = () => {
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
            <Container fluid className=' me-0'>
                <Row>
                    <Col className='p-0'>
                        <img src={lghead} className='lghead d-none d-md-block w-100 ' alt="Banner" />
                        <img src={img4} className='img4 d-block d-md-none w-100' alt="Banner" />
                    </Col>
                </Row>
            </Container>
            <h1 style={{ fontWeight: '700', fontFamily: "'Century Gothic Paneuropean', sans-serif", fontSize: "40px" }} className='mt-lg-4'>
             News
            </h1>
            <Row className='mt-lg-5 p-0 px-lg-3 mx-lg-5 mx-auto'>
                {photos.map((photo, index) => (
                    <Col xs={12} sm={6} md={4} lg={4} className='mb-4' key={index}>
                        <Card className='photo h-100 '>
                            <img src={photo.src} className='picture img-fluid' alt={`Photo ${index + 1}`} />
                            {/* <Card.Body>
                  <Card.Text className='mt-3 cardtext text-start'>
                    {photo.text}
                  </Card.Text>
                </Card.Body> */}
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Newsphoto
