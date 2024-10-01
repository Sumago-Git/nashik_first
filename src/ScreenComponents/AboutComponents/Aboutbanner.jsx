import React from 'react';
import frame1 from "../../Assets/Assets/MainBanner/Frame 1.png";
import img4 from "../../Assets/Assets/MainBanner/img4.jpg";
import { Container, Carousel } from 'react-bootstrap';
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
            {/* Banner Images */}
            <Container fluid className='pe-0 me-0 p-0'>
                <img src={frame1} className='lghead d-none d-md-block' />
                <img src={img4} className='img4 d-block d-md-none' />
            </Container>

            {/* Carousel Section */}
            <Container fluid className='backgrnd mt-4 p-0 '>
                <Container fluid className='p-0 m-0 w-lg-75 w-sm-100'>
                    <Carousel className=' w-50 h-75 caru'>
                        {carouselItems.map((item, index) => (
                            <Carousel.Item key={index} className='carouselitem'>
                                <p className='text-start ms-lg-5 ms-md-0 headline pt-lg-5  w-sm-100 ms-3 '>
                                    {item.headline}
                                </p>
                                <p className='text-start ms-lg-5 headlinetext pb-5 m-lg-0 w-sm-100 ms-3'>
                                    {item.subtext}
                                </p>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>

                {/* City Image */}
                <Container className='me-0'>
                    <img src={city} className='city d-none d-md-block img-fluid' />
                </Container>
            </Container>
        </>
    );
};

export default Aboutbanner;
