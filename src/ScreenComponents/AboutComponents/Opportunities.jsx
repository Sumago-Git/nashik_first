import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import transport from '../../Assets/Assets/Aboutpage/transport.png';
import animal from '../../Assets/Assets/Aboutpage/animal.png';
import pollution from '../../Assets/Assets/Aboutpage/pollution.png';
import safety from '../../Assets/Assets/Aboutpage/safety.png';

const opportunitiesData = [
    { imgSrc: transport, text: 'Mass transport' },
    { imgSrc: animal, text: 'Stray Dog &<br /> Animals' },
    { imgSrc: pollution, text: 'Environment and <br />Pollution' },
    { imgSrc: safety, text: 'Safety Waste<br /> Management &<br />Sewage System' },
    { imgSrc: transport, text: 'Sports Complex', marginTop: '-50px' },
    { imgSrc: animal, text: 'Power Adquacy', marginTop: '-50px' },
    { imgSrc: pollution, text: 'Clean & Flowing<br/> Godavari River', marginTop: '-50px', pb: true },
];

const Opportunities = () => {
    return (
        <>
            <Container fluid className='oppobg mt-5 pb-5 pt-4'>
                <h1 className='oppoheadline pt-5'>Opportunities of Work for ANF</h1>
                <Container>
                    <Row className='mt-2 justify-content-center '>
                        {opportunitiesData.map((item, index) => (
                            <Col lg={3} className={item.pb ? 'pb-5' : ''} key={index}>
                                <img src={item.imgSrc} className='oppoimg' style={{ marginTop: item.marginTop || '0px' }} />
                                <text className='oppoimgtext' dangerouslySetInnerHTML={{ __html: item.text }} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default Opportunities;
