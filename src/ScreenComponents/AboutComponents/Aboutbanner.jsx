import React from 'react'
import lghead from "../../Assets/Assets/MainBanner/lghead.png";
import img4 from "../../Assets/Assets/MainBanner/img4.jpg"
import { Container } from 'react-bootstrap';
import '../../Components/About.css'
import city from '../../Assets/Assets/Aboutpage/city.png'

const Aboutbanner = () => {
    return (
        <>
            <Container fluid className='pe-0 me-0 p-0'>
            <img src={lghead} className='lghead d-none d-md-block'/>
            <img src={img4} className='img4 d-block d-md-none'/>
            </Container>
            <Container fluid className='backgrnd mt-4'>
          <Container fluid className='ms-3'>
          <p className='text-start ms-5 headline pt-5'><span style={{fontWeight:"800"}}>Happiness...</span> is living in the <br/>city of your dreams...</p>
           <p className='text-start ms-5 headlinetext pb-5'>
           Cities in India are getting smarter and looking for secure,<br/>
            intelligent and smarter solutions of resource optimisation. <br/>
            Quality of Life is at the heart of this transformation. Nashik<br/>
            First is an initiative of active citizens of Nashik which is<br/>
            catalysing this growth by helping individuals, communities, <br/>
            working with government authorities to do what matters most.
           </p>
          </Container>
           <Container className='me-0'>
            <img src={city} className='city d-none d-md-block img-fluid'/>
           </Container>
            </Container>
        </>
    )
}

export default Aboutbanner

