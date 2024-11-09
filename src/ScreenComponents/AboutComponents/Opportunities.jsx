import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import health from "../../Assets/Assets/Aboutpage/health.png";
import road from "../../Assets/Assets/Aboutpage/road.png";
import truck from "../../Assets/Assets/Aboutpage/truck.png";
import social from "../../Assets/Assets/Aboutpage/social.png";
import industry from "../../Assets/Assets/Aboutpage/industry.png";
import education from "../../Assets/Assets/Aboutpage/education.png";
import axios from 'axios';


import Aos from 'aos'
import 'aos/dist/aos.css'

const opportunitiesData = [
    // { imgSrc: health, text: "Health" },
    { imgSrc: road, text: "Roads (Intra-city\nand Intercity) Connectivity" },
    { imgSrc: truck, text: "Smooth & Disciplined\nCity Traffic" },
    // { imgSrc: social, text: "Social Awareness\n& Use of RTI" },
    { imgSrc: industry, text: "Industry\nand New Investments" },
    { imgSrc: education, text: "Education" },
];

const Opportunities = () => {

    const [getdata, setdata] = useState([]);

    const getdata_here = () => {
        axios.get('ObjectiveOfANF/get-ObjectiveOfANF')
            .then((res) => {
                setdata(res.data.responseData);
                console.log(res.data.responseData);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getdata_here();
        Aos.init();
    }, [])


    return (
        <>
            <Container fluid className='oppobg mt-lg-5 pb-lg-5 pt-lg-4'>
                <h1 className='oppoheadline pt-lg-5 text-center'>Objectives of ANF</h1>
                <Container>
                    <Row className='mt-lg-2 justify-content-center mx-5'>
                        {getdata.map((item, index) => (
                            <>

                                <Col lg={3} md={6} sm={6} className='d-flex flex-column align-items-center text-center' data-aos="fade-down">
                                    <img src={item.img} className='oppoimg img-fluid  ' alt={item.title} />
                                    <p className='oppoimgtext pt-3 ' style={{ whiteSpace: 'pre-wrap' }}>{item.title}</p>
                                </Col>
                            </>

                        ))}
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default Opportunities;
