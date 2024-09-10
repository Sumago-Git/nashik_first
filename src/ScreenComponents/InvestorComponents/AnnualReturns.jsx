import React from 'react';
import "../../Components/Investor.css";
import lghead from "../../Assets/Assets/MainBanner/lghead.png";
import investor from "../../Assets/Assets/Investor/investor.png";
import { Container } from 'react-bootstrap';

const AnnualReturns = () => {

  // Array to hold the annual return data
  const annualReports = [
    { year: '2020 – 2021', url: 'https://www.nashikfirst.com/wp-content/uploads/2021/11/Copy-of-Annual-Return.pdf' },
    { year: '2020 – 2021', url: 'https://www.nashikfirst.com/wp-content/uploads/2021/11/Copy-of-Annual-Return.pdf' },
    { year: '2020 – 2021', url: 'https://www.nashikfirst.com/wp-content/uploads/2021/11/Copy-of-Annual-Return.pdf' }
  ];

  return (
    <>
      <Container fluid className='p-0 m-0 mb-0'>
        <img src={lghead} className='w-100' alt="Header" />
      </Container>

      <Container fluid className='investorbg pt-5 pb-0 p-0'>
        <h1 className='inverstorheadline'>Annual Returns</h1>
        <img src={investor} className='w-100 pt-5 mt-5' style={{ position: "relative" }} alt="Investor" />
        
        <Container className='return'>
          {/* Dynamically rendering the links using map */}
          {annualReports.map((report, index) => (
            <a href={report.url} className='text-black' key={index}>
              <p className='returntext pt-2'>Annual Return {report.year}</p>
            </a>
          ))}
        </Container>
      </Container>
    </>
  );
};

export default AnnualReturns;
