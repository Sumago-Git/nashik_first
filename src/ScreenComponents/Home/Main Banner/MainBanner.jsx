import React from 'react'
// import '../Components/Header.css'
import lghead from '../../../Assets/Assets/MainBanner/lghead.png';
import img4 from "../../../Assets/Assets/MainBanner/img4.jpg"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MainBanner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
   <>
<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={lghead} className='lghead d-none d-md-block'/>
        <img src={img4} className='img4 d-block d-md-none'/>
       
      </Carousel.Item>
      <Carousel.Item>
      <img src={lghead} className='lghead d-none d-md-block'/>
        <img src={img4} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={lghead} className='lghead d-none d-md-block'/>
      <img src={img4} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
    </Carousel>
   </>
  )
}

export default MainBanner
