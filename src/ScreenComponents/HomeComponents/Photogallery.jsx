import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import photo1 from '../../Assets/Assets/Photogallery/photo1.png';
import photo2 from '../../Assets/Assets/Photogallery/photo2.png';
import photo3 from '../../Assets/Assets/Photogallery/photo3.png';
import '../../Components/Photogallery.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Photogallery = () => {

  const [getdata, setdata] = useState([]);

  useEffect(() => {
    Aos.init();
  }, [])



  const photodata = () => {
    axios.get('gallery/get-photoGalleries')
      .then((res) => {
        setdata(res.data.responseData);
        console.log(res.data.responseData);

      })
      .catch((err) => {
        console.log(err);

      })
  }

  useEffect(() => {
    photodata();
  }, [])

  return (
    <>
      <Container fluid className='mt-lg-5 pt-4 text-center'>
        <h1 style={{ fontWeight: '700', fontFamily: "'Century Gothic Paneuropean', sans-serif", fontSize: "40px" }}>
          Photo <span style={{ color: '#F96945' }}> Gallery</span>
        </h1>
        <Row className='mt-lg-5 p-0 px-lg-3 mx-lg-5 mx-auto'>
          {getdata.map((photo, index) => (
            <Col xs={12} sm={12} md={4} lg={4} className='mb-4' key={index}>
              <Card className='photo h-100 pb-4 border-0' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
                <img src={photo.img} className='picture img-fluid' style={{ borderRadius: "23px" }} alt={`Photo ${index + 1}`} />
                <Card.Body>
                  <Card.Text className='mt-3 cardtext text-start'>
                    {photo.title}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Col>
          <Link to="events"> <button className='returnbutton p-lg-1 mt-2' onClick={() => window.scrollTo(0, 0)}>
            View More
          </button></Link>
        </Col>
      </Container>
    </>
  );
};

export default Photogallery;
