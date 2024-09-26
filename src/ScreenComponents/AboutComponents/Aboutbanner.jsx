import React from 'react'
import frame1 from "../../Assets/Assets/MainBanner/Frame 1.png";
import img4 from "../../Assets/Assets/MainBanner/img4.jpg"
import { Container } from 'react-bootstrap';
import '../../Components/About.css'
import city from '../../Assets/Assets/Aboutpage/city.png'

const Aboutbanner = () => {
    return (
        <>
            <Container fluid className='pe-0 me-0 p-0'>
            <img src={frame1} className='lghead d-none d-md-block'/>
            <img src={img4} className='img4 d-block d-md-none'/>
            </Container>
            <Container fluid className='backgrnd mt-4 p-0'>
          <Container fluid className=' p-0 m-0 w-lg-75 w-sm-100'>
          <p className='text-start ms-lg-5 ms-md-0 headline pt-lg-5 w-lg-75 w-sm-100 ms-3'><span style={{fontWeight:"800"}}>Happiness...</span> is living in the <br/>city of your dreams...</p>
           <p className='text-start ms-lg-5  headlinetext pb-5 m-lg-0 w-lg-75 w-sm-100 ms-3'>
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

