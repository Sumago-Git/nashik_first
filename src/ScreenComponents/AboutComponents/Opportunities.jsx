import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
// import animal from '../../Assets/Assets/Aboutpage/animal.png';
// import pollution from '../../Assets/Assets/Aboutpage/pollution.png';
// import safety from '../../Assets/Assets/Aboutpage/safety.png';
import health from "../../Assets/Assets/Aboutpage/health.png"
import road from "../../Assets/Assets/Aboutpage/road.png"
import truck from "../../Assets/Assets/Aboutpage/truck.png"
import social from "../../Assets/Assets/Aboutpage/social.png" 
import industry from "../../Assets/Assets/Aboutpage/industry.png"
import education from "../../Assets/Assets/Aboutpage/education.png"


const opportunitiesData = [
    { imgSrc: health },
    { imgSrc: road, },
    { imgSrc: truck, },
    { imgSrc: social, },
    { imgSrc: industry, },
    { imgSrc: education,},
    
];

const Opportunities = () => {
    return (
        <>
            <Container fluid className='oppobg mt-lg-5 pb-lg-5 pt-lg-4'>
                <h1 className='oppoheadline pt-lg-5'>Opportunities of Work for ANF</h1>
                <Container>
                    <Row className='mt-lg-2  mx-1  me-5 pe-3 '>
                        {opportunitiesData.map((item, index) => (
                            <Col lg={4}  className={item.pb ? 'pb-lg-5 '  : ''} key={index}>
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
