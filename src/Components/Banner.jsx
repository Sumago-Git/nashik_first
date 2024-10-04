import React from 'react'
import { Container } from 'react-bootstrap'

const Banner = ({ bannerImg, bannerImgMob }) => {
    return (
        <div>
            <Container fluid className='p-0'>
                <section>
                    <img src={bannerImg} alt={bannerImg} className='img-fluid d-none d-md-block' />
                    <img src={bannerImgMob} alt={bannerImgMob} className='img-fluid d-block d-md-none' />
                </section>
            </Container>
        </div>
    )
}

export default Banner