import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Container, Spinner, Alert } from 'react-bootstrap';
import banner from '../../Assets/Assets/Supporters/banner.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../Components/Supporters.css';
import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Supporter = () => {
  const [thanksto_brands, setthanksto_brands] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state to show spinner while data is fetching
  const [error, setError] = useState(null); // Error state to handle any issues with the API call

  // Fetch the data from the API
  const getdata = () => {
    axios.get('thanksto/get-ThanksTo')
      .then((res) => {
        setthanksto_brands(res.data.responseData);
        setLoading(false); // Data fetched, set loading to false
        console.log("Thanks TO Imgs : ", res.data.responseData);
      })
      .catch((err) => {
        setError('Failed to load supporters data.'); // Handle any error with API call
        setLoading(false); // Data fetching failed, set loading to false
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of items to show per slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container fluid className='mt-lg-5 pt-4'>
        <Row>
          <Col className='p-0'>
            <img src={banner} style={{ width: '100%' }} alt="Banner" />
          </Col>
        </Row>
      </Container>

      {/* Conditional Rendering of the "Thanks to" Section */}
      {thanksto_brands.length > 0 && (
        <Container fluid className='mt-lg-5 pt-2 support text-center'>
          <p style={{ fontWeight: '700', color: '#F96945' }} className='supporttext'>
            Thanks <span style={{ color: '#F96945' }}> To...</span>
          </p>

          <Container fluid className='pb-4 p-4'>
            {loading ? (
              <div className="text-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : error ? (
              <Alert variant="danger">
                {error}
              </Alert>
            ) : (
              <Slider {...sliderSettings} >
                {thanksto_brands.map((supporter, index) => (
                  <div key={index}>
                    <img
                      src={supporter.img}
                      className='trademark img-fluid'
                      alt={supporter.title}
                      style={{ width: '100%', padding: '10px' }}
                    />
                  </div>
                ))}
              </Slider>
            )}
          </Container>
        </Container>
      )}

      {thanksto_brands.length === 0 && !loading && !error && (
        <Container className="text-center mt-5">
          <p>No supporters available at the moment.</p>
        </Container>
      )}
    </>
  );
};

export default Supporter;
