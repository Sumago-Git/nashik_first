import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import health from "../../Assets/Assets/Aboutpage/health.png";
import road from "../../Assets/Assets/Aboutpage/road.png";
import truck from "../../Assets/Assets/Aboutpage/truck.png";
import social from "../../Assets/Assets/Aboutpage/social.png";
import industry from "../../Assets/Assets/Aboutpage/industry.png";
import education from "../../Assets/Assets/Aboutpage/education.png";

const opportunitiesData = [
    // { imgSrc: health, text: "Health" },
    { imgSrc: road, text: "Roads (Intra-city\nand Intercity) Connectivity" },
    { imgSrc: truck, text: "Smooth & Disciplined\nCity Traffic" },
    // { imgSrc: social, text: "Social Awareness\n& Use of RTI" },
    { imgSrc: industry, text: "Industry\nand New Investments" },
    { imgSrc: education, text: "Education" },
];

const Opportunities = () => {
    return (
        <>
            <Container fluid className='oppobg mt-lg-5 pb-lg-5 pt-lg-4'>
                <h1 className='oppoheadline pt-lg-5 text-center'>Objectives of ANF</h1>
                <Container>
                    <Row className='mt-lg-2 justify-content-center mx-5'>
                        {opportunitiesData.map((item, index) => (
                            <Col lg={6} md={6} sm={12} className='d-flex flex-column align-items-center text-center' key={index}>
                                {/* <div className="d-flex flex-column align-items-center"> */}
                                    <img src={item.imgSrc} className='oppoimg img-fluid ' alt={item.text} />
                                    <p className='oppoimgtext' style={{ whiteSpace: 'pre-wrap' }}>{item.text}</p>
                                {/* </div> */}
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default Opportunities;
