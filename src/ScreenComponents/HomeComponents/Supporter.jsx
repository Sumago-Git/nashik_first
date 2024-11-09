import React, { useEffect, useState } from 'react';
import { Container, Spinner, Alert } from 'react-bootstrap';
import banner from '../../Assets/Assets/Supporters/banner.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../Components/Supporters.css';
import axios from 'axios';

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

          <Container fluid className='pb-4'>
            {/* Show loading spinner while data is fetching */}
            {loading ? (
              <div className="text-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : error ? (
              // Show error message if there was an issue fetching data
              <Alert variant="danger">
                {error}
              </Alert>
            ) : (
              // Display supporter images if data is available
              <Row className='justify-content-center p-3'>
                {thanksto_brands.map((supporter, index) => (
                  <Col xs={6} sm={3} md={3} lg={3} className='mb-3 mt-lg-4' key={index}>
                    <img src={supporter.img} className='trademark img-fluid' alt={supporter.title} />
                  </Col>
                ))}
              </Row>
            )}
          </Container>
        </Container>
      )}

      {/* Show a message if no data is found */}
      {thanksto_brands.length === 0 && !loading && !error && (
        <></>
        
      )}
    </>
  );
};

export default Supporter;
