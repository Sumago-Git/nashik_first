import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Components/About.css';

const Directors = () => {
  const directors = [
    { name: 'Abhay Kulkarni', title: 'Chairman', description: 'Photos' },
    { name: 'Vinita Dharkar', title: 'Vice Chairperson', description: 'Photos' },
    { name: 'Devendra Bapat', title: 'Managing Director', description: 'Photos' },
    { name: 'Milind Jambotkar', title: 'General Secretary', description: 'Photos' },
    { name: 'Narendra Saboo', title: 'Treasurer', description: 'Photos' },
    { name: 'Jitendra Shirke', title: 'Director', description: 'Photos' },
    { name: 'Pramod Lad', title: 'Director', description: 'Photos' },
    { name: 'Suresh Patel', title: 'Director', description: 'Photos' },
    { name: 'Sanjay Deshmukh', title: 'Director', description: 'Photos' }
  ];

  return (
    <>
      <Container fluid className='directorbg mt-lg-5 pt-lg-5 p-0'>
        <h2 className='drheadline lg-text-center '>Directors of <span style={{ color: "#ee7f37" }}>Advantage Nashik Foundation</span></h2>
        <Container className='mt-4 pb-lg-5 mt-md-5'>
          <Row className=' mx-lg-5 justify-content-center'>
            {directors.map((director, index) => (
              <Col lg={4} md={6} sm={12} className='mb-5' key={index}>
                <div className='section mt-4 '>
                  <p className='sectiontext p-1'>{""}</p>
                </div>
                <div className='sectiontop text-center pb-5'>
                  <p className='mt-3 drname mb-md-1'>{director.name}</p>
                  <p className='drpost mb-lg-5'>{director.title}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Directors;
