import React from 'react'
// import '../Components/Header.css'
import lghead from '../Assets/Assets/MainBanner/lghead.png';
import frame1 from "../Assets/Assets/MainBanner/Frame 1.png"
import frame2 from "../Assets/Assets/MainBanner/Frame 2.png"
import img4 from "../Assets/Assets/MainBanner/img4.jpg";
import frame3 from "../Assets/Assets/MainBanner/Frame 3.png"
import frame4 from "../Assets/Assets/MainBanner/Frame 4.png"
import frame5 from "../Assets/Assets/MainBanner/Frame 5.png"
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
      <img src={frame1} className='lghead d-none d-md-block'/>
        <img src={img4} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={frame2} className='lghead d-none d-md-block'/>
      <img src={img4} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>

      <Carousel.Item>
      <img src={frame3} className='lghead d-none d-md-block'/>
      <img src={img4} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={frame4} className='lghead d-none d-md-block'/>
      <img src={img4} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={frame5} className='lghead d-none d-md-block'/>
      <img src={img4} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
    </Carousel>
   </>
  )
}

export default MainBanner
