import React, { useEffect } from 'react';
import "../../Components/Investor.css";
import frame4 from "../../Assets/Assets/MainBanner/Frame 4.png";
import img4 from "../../Assets/Assets/MainBanner/img4.jpg"
import investor from "../../Assets/Assets/Investor/investor.png";
import investorMob from "../../Assets/Assets/Investor/investorMob.jpg";
import { Card, Container } from 'react-bootstrap';
import Banner from '../../Components/Banner';
import axios from 'axios';

const AnnualReport = () => {

  useEffect(() => {
    axios.get("annualreport/get-annualreports").then((res) => {
      console.log("res", res.responseData);

    }).catch((err) => {
      console.log("err", err);

    })
  }, [])
  // Array of annual report details
  const reports = [
    { year: '2020 – 2021', link: 'https://www.nashikfirst.com/wp-content/uploads/2021/11/Copy-of-Annual-Return.pdf' },
    { year: '2021 – 2022', link: "" },
    { year: '2022 – 2023', link: 'https://www.nashikfirst.com/wp-content/uploads/2021/11/Copy-of-Annual-Return.pdf' }
  ];

  return (
    <>
      <Banner bannerImg={frame4} bannerImgMob={img4} />
      <section className='investorbg d-none d-md-block'>
        <Container fluid className='p-0 pt-5 pb-4'>
          <h1 className='fw-bold inverstorheadline'>Annual Reports</h1>
        </Container>
        <Container fluid className='p-0 py-5'>
          <h1 className='fw-bold '></h1>
        </Container>
        <div >
          <Container className='position-absolute start-50 translate-middle'>
            <Card className='p-5 rounded-4 bg-white border-top-0 border-end-0 border-start-0 shadow-lg mt-5' style={{ borderBottom: "10px solid ", borderColor:"#F96945", zIndex: 1 }}>
              {
                reports.map((report, index) => {
                  return (
                    <>
                      <a href={report.link} className='text-black my-2' key={index}>
                        <p className='returntext'>Annual Reports {report.year}</p>
                      </a>
                    </>
                  )
                })
              }
            </Card>
          </Container>
          <img src={investor} alt={investor} className='img-fluid' />
        </div>

      </section>

      {/* Mobile View */}

      <section>
        <Container fluid className='p-0 pt-5 pb-4 investorbg'>
          <h1 className='fw-bold '>Annual Reports</h1>
        </Container>
        <Container fluid className='p-0 py-5 investorbg'>
          <h1 className='fw-bold '></h1>
        </Container>
        <div >
          <Container className='position-absolute start-50 translate-middle'>
            <Card className='p-5 rounded-4 bg-white border-top-0 border-end-0 border-start-0 shadow-lg mt-5' style={{ borderBottom: "10px solid ", borderColor:"#F96945", zIndex: 1}}>
              {
                reports.map((report, index) => {
                  return (
                    <>
                      <a href={report.link} className='text-black my-2' key={index}>
                        <p className='returntext'>Annual Reports {report.year}</p>
                      </a>
                    </>
                  )
                })
              }
            </Card>
          </Container>
          <img src={investorMob} alt={investorMob} className='img-fluid' />
        </div>
      </section>
    </>
  );
};

export default AnnualReport;