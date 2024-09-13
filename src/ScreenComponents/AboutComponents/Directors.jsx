import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Components/About.css';

const Directors = () => {
  const directors = [
    { name: 'Abhay Kulkarni', title: 'Chairman', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' },
    { name: 'Devendra Bapat', title: 'Managing Director', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' },
    { name: 'Vinita Dharkar', title: 'Vice Chairperson', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' },
    { name: 'Milind Jambotkar', title: 'General Secretary', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' },
    { name: 'Narendra Saboo', title: 'Treasurer', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' },
    { name: 'Jitendra Shirke', title: 'Director', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' },
    { name: 'Pramod Lad', title: 'Director', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' },
    { name: 'Suresh Patel', title: 'Director', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' },
    { name: 'Sanjay Deshmukh', title: 'Treasurer', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' }
  ];

  return (
    <>
      <Container fluid className='directorbg mt-5 pt-5'>
        <h2 className='drheadline text-center'>Directors of Advantage Nashik Foundation</h2>
        <Container className='mt-4 pb-5'>
          <Row className='justify-content-center'>
            {directors.map((director, index) => (
              <Col lg={4} md={6} sm={12} className='mb-5' key={index}>
                <div className='section mt-4'>
                  <p className='sectiontext'>{director.description}</p>
                </div>
                <div className='sectiontop text-center'>
                  <h4 className='mt-3'>{director.name}</h4>
                  <p style={{ fontWeight: "100", fontSize: "20px" }}>{director.title}</p>
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
