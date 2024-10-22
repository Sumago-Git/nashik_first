import React from 'react';
import lghead from "../../Assets/Assets/MainBanner/lghead.jpg";
import img4 from "../../Assets/Assets/MainBanner/img4.jpg";
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import '../../Components/About.css';
import city from '../../Assets/Assets/Aboutpage/city.png';

const Aboutbanner = () => {
    // Array containing content for the carousel slides
    const carouselItems = [
        {
            headline: (
                <>
                    <span style={{ fontWeight: "800" }}>Happiness...</span> is living in the <br />city of your dreams...
                </>
            ),
            subtext: (
                <>
                    Cities in India are getting smarter and looking for secure,
                    intelligent and smarter solutions of resource optimisation.
                    Quality of Life is at the heart of this transformation. Nashik
                    First is an initiative of active citizens of Nashik which is
                    catalysing this growth by helping individuals, communities,
                    working with government authorities to do what matters most.
                </>
            ),
        },
        {
            headline: (
                <>
                    <span style={{ fontWeight: "800" }}>Nashik First:</span> begins with <br /> Empowering Our City’s Growth
                </>
            ),
            subtext: (
                <>
                    Nashik First is dedicated to fostering sustainable development and improving the quality of life in Nashik. By connecting citizens, businesses, and local authorities, we create impactful initiatives that address the city’s unique needs, from infrastructure and education to health and environment.
                </>
            ),
        },
        {
            headline: (
                <>
                    <span style={{ fontWeight: "800" }}>Contributing to</span> Happiness
                </>
            ),
            subtext: (
                <>
                    At Nashik First, we believe that true progress is measured by the happiness of its citizens. Through community-building activities, wellness programs, and initiatives that promote work-life balance, we aim to enhance the overall well-being and joy of every resident in Nashik.
                </>
            ),
        },
        {
            headline: (
                <>
                    <span style={{ fontWeight: "800" }}>Civic Engagement</span>
                </>
            ),
            subtext: (
                <>
                    We believe that an engaged and informed community is key to a thriving city. Through awareness programs, citizen forums, and partnerships, Nashik First encourages residents to take an active role in shaping their city's future.
                </>
            ),
        },
        {
            headline: (
                <>
                    <span style={{ fontWeight: "800" }}> Sustainability</span>
                </>
            ),
            subtext: (
                <>
                    Promoting eco-friendly practices is at the heart of Nashik First's mission. We focus on implementing green initiatives, waste management, and clean energy solutions that ensure a sustainable and healthy environment for future generations.
                </>
            ),
        },
        {
            headline: (
                <>
                    <span style={{ fontWeight: "800" }}> Social Development</span>
                </>
            ),
            subtext: (
                <>
                    Our social development projects aim to uplift marginalized communities by providing access to education, healthcare, and employment opportunities, fostering inclusive growth in Nashik.
                </>
            ),
        }
    ];

    return (
        <>

            <Container fluid className=' me-0'>
                <Row>
                    <Col className='p-0'>
                        <img src={lghead} className='lghead d-none d-md-block w-100 ' alt="Banner" />
                        <img src={img4} className='img4 d-block d-md-none w-100' alt="Banner" />
                    </Col>
                </Row>
            </Container>
            <Container fluid className='backgrnd mt-4 '>
                <Row >
                    <Col md={12} lg={6} sm={12} className='mx-auto '>
                        <Carousel className=' w-100 h-75 caru'>
                            {carouselItems.map((item, index) => (
                                <Carousel.Item key={index} className='carouselitem'>
                                    <p className='text-start ms-md-4 ms-md-0 headline pt-md-5 w-sm-100 ms-3'>
                                        {item.headline}
                                    </p>
                                    <p className='text-start ms-md-4 headlinetext pb-5 m-md-0 w-sm-100 ms-3'>
                                        {item.subtext}
                                    </p>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                    <Col md={12} lg={6}>
                        <img src={city} className='city d-none d-md-block img-fluid p-0 mb-md-4 ' alt="City" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Aboutbanner;
