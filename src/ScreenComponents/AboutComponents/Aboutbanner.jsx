import React from 'react'
import lghead from "../../Assets/Assets/MainBanner/lghead.png";
import { Container } from 'react-bootstrap';
import '../../Components/About.css'
import city from '../../Assets/Assets/Aboutpage/city.png'

const Aboutbanner = () => {
    return (
        <>
            <Container fluid className='pe-0 me-0'>
                <img src={lghead} style={{ width: "100%" }} />
            </Container>
            <Container fluid className='backgrnd mt-4'>
           <h4 className='text-start ms-5 headline pt-5'><span style={{fontWeight:"800"}}>Happiness...</span> is living in the <br/>city of your dreams...</h4>
           <p className='text-start ms-5 para pb-5'>
           Cities in India are getting smarter and looking for secure,<br/>
            intelligent and smarter solutions of resource optimisation. <br/>
            Quality of Life is at the heart of this transformation. Nashik<br/>
            First is an initiative of active citizens of Nashik which is<br/>
            catalysing this growth by helping individuals, communities, <br/>
            working with government authorities to do what matters most.
           </p>
           <Container className='me-0'>
            <img src={city} className='city '/>
           </Container>
            </Container>
        </>
    )
}

export default Aboutbanner

