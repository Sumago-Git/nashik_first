import React, { useEffect, useState } from 'react'
import lghead from "../../Assets/Assets/MainBanner/lghead.jpg"
import img4 from "../../Assets/Assets/Home/traffic_education_mob.png"
import photo1 from '../../Assets/Assets/Photogallery/photo1.png';
import photo2 from '../../Assets/Assets/Photogallery/photo2.png';
import photo3 from '../../Assets/Assets/Photogallery/photo3.png';
import { Col, Container, Row, Card } from 'react-bootstrap'
import axios from 'axios';

const Newsphoto = () => {

    const[getdata , setdata] = useState([]);

    const fetdata = () => {
        axios.get('news/get-news')
            .then((res) => {
                setdata(res.data.responseData)
            })
            .catch((err) => {
                console.log(err);
                
            })
    }
    useEffect(()=>{
        fetdata();
    },[])
    const photos = [
        {
            src: photo1,
            text: ' '
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
            <Row className='mt-lg-5 p-0 px-lg-3 mx-lg-5 mx-auto justify-content-center'>
                {getdata.map((a, index) => (
                    <Col xs={12} sm={12} md={4} lg={4} className='mb-4' key={index}>
                        <Card className='photo h-100 border-0'>
                            <img src={a.img} className='picture img-fluid' alt={`Photo ${index + 1}`} />
                            <Card.Body>
                                <Card.Text className='mt-3 cardtext text-start'>
                                    {a.title}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Newsphoto
