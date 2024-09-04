import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Components/About.css';

const Directors = () => {
  const directors = [
    { name: 'Abhay Kulkarni', title: 'Chairman', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' },
    { name: 'Devendra Bapat', title: 'Managing Director', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' },
    { name: 'Vinita Dharkar', title: 'Vice Chairperson', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' },
    { name: 'Milind Jambotkar', title: 'General Secretory', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' },
    { name: 'Narendra Saboo', title: 'Treasure', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' },
    { name: 'Jitendra Shirke', title: 'Director', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' },
    { name: 'Pramod Lad', title: 'Director', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' },
    { name: 'Suresh Patel', title: 'Director', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' },
    { name: 'Sanjay Deshmukh', title: 'Trasure', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.' }
  ];

  return (
    <>
      <Container fluid className='directorbg mt-5 pt-5'>
        <text className='drheadline'>Directors of Advantage Nashik Foundation</text>
        <Container className='mt-0 pb-5'>
          <Container className='p-5 mx-auto'>
            <Row className='justify-content-center'>
              {directors.map((director, index) => (
                <Col lg={4} className={`mt-3 ${index >= 3 ? 'pt-5' : ''} ${index >= directors.length - 3 ? 'pb-5' : ''}`} key={index}>
                  <div className='section'>
                    <p className='sectiontext'>{director.description}</p>
                  </div>
                  <div className='sectiontop'>
                    <text className='mt-3'>{director.name} <br/> <span style={{ fontWeight: "100", fontSize:"25px" }}>{director.title}</span></text>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Directors;
