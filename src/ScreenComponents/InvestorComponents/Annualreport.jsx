import React from 'react';
import "../../Components/Investor.css";
import lghead from "../../Assets/Assets/MainBanner/lghead.png";
import img4 from "../../Assets/Assets/MainBanner/img4.jpg"
import investor from "../../Assets/Assets/Investor/investor.png";
import { Container } from 'react-bootstrap';

const Annualreport = () => {

  // Array of annual report details
  const reports = [
    { year: '2020 – 2021', link: 'https://www.nashikfirst.com/wp-content/uploads/2021/11/Copy-of-Annual-Return.pdf' },
    { year: '2020 – 2021', link: 'https://www.nashikfirst.com/wp-content/uploads/2021/11/Copy-of-Annual-Return.pdf' },
    { year: '2020 – 2021', link: 'https://www.nashikfirst.com/wp-content/uploads/2021/11/Copy-of-Annual-Return.pdf' }
  ];

  return (
    <>
      <Container fluid className='p-0 m-0 mb-0'>
        <img src={lghead} className='lghead d-none d-md-block' />
        <img src={img4} className='img4 d-block d-md-none' />
      </Container>

      <Container fluid className='investorbg pt-5 pb-0 p-0'>
        <h1 className='inverstorheadline'>Annual Reports</h1>
        <img src={investor} className='w-100 pt-5 mt-5 ' alt="Investor" style={{ position: "relative" }} />

        <Container className='return pt-4'>
          {reports.map((report, index) => (
            <a href={report.link} className='text-black' key={index}>
              <p className='returntext pt-3'>Annual Return {report.year}</p>
            </a>
          ))}
        </Container>
      </Container>
    </>
  );
};

export default Annualreport;
