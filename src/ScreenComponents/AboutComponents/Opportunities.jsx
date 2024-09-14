import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import transport from '../../Assets/Assets/Aboutpage/transport.png'
import animal from '../../Assets/Assets/Aboutpage/animal.png'
import pollution from '../../Assets/Assets/Aboutpage/pollution.png'
import safety from '../../Assets/Assets/Aboutpage/safety.png'

const Opportunities = () => {
    return (
        <>
            <Container fluid className='oppobg mt-5 '>
                <h1 className='oppoheadline pt-5'>Opportunities of Work for ANF</h1>
                <Container>
                    <Row className='mx-5 px-5 justify-content-center'>
                        <Col lg={4}>
                            <img src={transport} className='oppoimg' />
                            <text className='oppoimgtext'>Health</text>
                        </Col>
                        <Col lg={4}>
                            <img src={animal} className='oppoimg ' />
                            <text className='oppoimgtext'>Stray Dog &<br /> Animals</text>
                        </Col>
                        <Col lg={4}>
                            <img src={pollution} className='oppoimg' />
                            <text className='oppoimgtext'>Environment and <br />Pollution</text>
                        </Col>
                        <Col lg={4} >
                            <img src={safety} className='oppoimg ' />
                            <text className='oppoimgtext text-center'>Safety Waste<br /> Management &<br />Sewage System</text>
                        </Col>
                        <Col lg={4}>
                            <img src={transport} className='oppoimg '/>
                            <text className='oppoimgtext'>Mass transport</text>
                        </Col>
                        <Col lg={4} className='pb-5'>
                            <img src={animal} className='oppoimg' />
                            <text className='oppoimgtext'>Stray Dog &<br /> Animals</text>
                        </Col>
                    
                    </Row>

                </Container>
            </Container>
        </>
    )
}

export default Opportunities
