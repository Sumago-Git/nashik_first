import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';


const MainBanner = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]); 
 
  const fetchData = async () => {
    try {
      const response = await axios.get('homeBanner/get-homeBanners');
      setData(response.data.responseData); 
      console.log(response.data.responseData); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((item, idx) => (
          <Carousel.Item key={idx}>
            <img src={item.img2} className="lghead d-none d-md-block" alt="desktop view" />
            <img src={item.img1} className="img4 d-block d-md-none" alt="mobile view" />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default MainBanner;
