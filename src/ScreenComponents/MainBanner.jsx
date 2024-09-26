import React from 'react'
// import '../Components/Header.css'
import lghead from '../Assets/Assets/MainBanner/lghead.png';
import lghead2 from "../Assets/Assets/MainBanner/lghead2.png"
import lghead3 from "../Assets/Assets/MainBanner/lghead3.png"
import img4 from "../Assets/Assets/MainBanner/img4.jpg";
import lghead4 from "../Assets/Assets/MainBanner/lghead4.jpg"
import lghead5 from "../Assets/Assets/MainBanner/lghead5.png"
// import frame5 from "../Assets/Assets/MainBanner/Frame 5.png"
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
      <img src={lghead2} className='lghead d-none d-md-block'/>
        <img src={img4} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={lghead3} className='lghead d-none d-md-block'/>
      <img src={img4} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>

      <Carousel.Item>
      <img src={lghead4} className='lghead d-none d-md-block'/>
      <img src={img4} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={lghead5} className='lghead d-none d-md-block'/>
      <img src={img4} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
      {/* <Carousel.Item>
      <img src={frame5} className='lghead d-none d-md-block'/>
      <img src={img4} className='img4 d-block d-md-none'/>
        
      </Carousel.Item> */}
    </Carousel>
   </>
  )
}

export default MainBanner
