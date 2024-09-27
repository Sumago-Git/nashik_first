import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../Assets/Assets/Supporters/banner.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../Components/Supporters.css';
import support1 from '../../Assets/Assets/Supporters/support1.png';
import support2 from '../../Assets/Assets/Supporters/support2.png';
import support3 from '../../Assets/Assets/Supporters/support3.png';
import support4 from '../../Assets/Assets/Supporters/support4.png';

const Supporter = () => {
  // Array to hold supporters' data
  const supportersData = [support1, support2, support3, support4];

  return (
    <>
      <Container fluid className='mt-lg-5 pt-4'>
        <Row>
          <Col className='p-0'>
            <img src={banner} style={{ width: '100%' }} alt="Banner" />
          </Col>
        </Row>
      </Container>

      <Container fluid className='mt-lg-5 pt-2 support text-center'>
        <p style={{ fontWeight: '700', color:'#F96945'}} className='supporttext'>
          Thanks <span style={{ color: '#F96945' }}> To...</span>
        </p>
        <Container fluid className='pb-4'>
          <Row className='justify-content-center p-3'>
            {supportersData.map((supporter, index) => (
              <Col xs={6} sm={4} md={3} lg={3} className='mb-3 mt-lg-4' key={index}>
                <img src={supporter} className='trademark img-fluid ' alt={`Supporter ${index + 1}`} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Supporter;
