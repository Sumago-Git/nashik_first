import React from 'react'
// import '../Components/Header.css'
import lghead from '../Assets/Assets/MainBanner/lghead.png';
import lghead2 from "../Assets/Assets/MainBanner/lghead2.png"
import lghead3 from "../Assets/Assets/MainBanner/lghead3.png"
import img4 from "../Assets/Assets/MainBanner/img4.jpg";
import lghead4 from "../Assets/Assets/MainBanner/lghead4.png"
import lghead5 from "../Assets/Assets/MainBanner/lghead5.png"
import pain from "../Assets/Assets/MainBanner/pain.jpg"
import chat from "../Assets/Assets/MainBanner/chat.jpg"
import ears from "../Assets/Assets/MainBanner/ears.jpg"
import head from "../Assets/Assets/MainBanner/head.jpg"
import pain2 from "../Assets/Assets/MainBanner/pain2.png"
import chat2 from "../Assets/Assets/MainBanner/chat2.png"
import ears2 from "../Assets/Assets/MainBanner/ears2.png"
import head2 from "../Assets/Assets/MainBanner/head2.png"
import speed2 from "../Assets/Assets/MainBanner/speed2.png"
import speed from "../Assets/Assets/MainBanner/speed.jpg"
import ants from "../Assets/Assets/MainBanner/ants.jpg"
import ants2 from "../Assets/Assets/MainBanner/ants2.jpg"
import drive from "../Assets/Assets/MainBanner/drive.jpg"
import drive2 from "../Assets/Assets/MainBanner/drive2.jpg"
import hands from "../Assets/Assets/MainBanner/hands.jpg"
import hands2 from "../Assets/Assets/MainBanner/hands2.jpg"
import nature from "../Assets/Assets/MainBanner/nature.jpg"
import nature2 from "../Assets/Assets/MainBanner/nature2.jpg"
import lanes from "../Assets/Assets/MainBanner/lanes.jpg"
import lanes2 from "../Assets/Assets/MainBanner/lanes2.jpg"
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
      <img src={pain} className='lghead d-none d-md-block'/>
        <img src={pain2} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={chat} className='lghead d-none d-md-block'/>
      <img src={chat2} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>

      <Carousel.Item>
      <img src={head} className='lghead d-none d-md-block'/>
      <img src={head2} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={ears} className='lghead d-none d-md-block'/>
      <img src={ears2} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={speed} className='lghead d-none d-md-block'/>
      <img src={speed2} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={ants} className='lghead d-none d-md-block'/>
      <img src={ants2} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={drive} className='lghead d-none d-md-block'/>
      <img src={drive2} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={hands} className='lghead d-none d-md-block'/>
      <img src={hands2} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={nature} className='lghead d-none d-md-block'/>
      <img src={nature2} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={lanes} className='lghead d-none d-md-block'/>
      <img src={lanes2} className='img4 d-block d-md-none'/>
        
      </Carousel.Item>
    </Carousel>
   </>
  )
}

export default MainBanner
