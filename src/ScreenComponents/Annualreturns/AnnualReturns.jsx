import React, { useEffect } from 'react';
import "../../Components/Investor.css";
import lghead from "../../Assets/Assets/MainBanner/lghead.jpg";
import img4 from "../../Assets/Assets/MainBanner/img4.jpg"
import investor from "../../Assets/Assets/Investor/investor.png";
import investorMob from "../../Assets/Assets/Investor/investorMob.jpg";
import { Card, Container,Col,Row } from 'react-bootstrap';
import Banner from '../../Components/Banner';
import axios from 'axios';
import annualreturns1 from "../../Assets/Assets/Investor/annualreturns1.pdf";
import annualreturn2 from "../../Assets/Assets/Investor/annualreturn2.pdf";
import annualreturns3 from "../../Assets/Assets/Investor/annualreturns3.pdf";
import pdfimg from "../../Assets/Assets/Investor/pdfimg.png"
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
    { year: '2020 – 2021', link: annualreturns1 },
    { year: '2021 – 2022', link: annualreturn2 },
    { year: '2022 – 2023', link: annualreturns3 }
  ];

  return (
    <>
      <Banner bannerImg={lghead} bannerImgMob={img4} />
      <section className='investorbg d-none d-md-block'>
        <Container fluid className='p-0 pt-5 pb-4'>
          <h1 className='fw-bold inverstorheadline'>Annual Returns</h1>
        </Container>
        <Container fluid className='p-0 py-5'>
          <h1 className='fw-bold '></h1>
        </Container>
        <div >
          <Container className='position-absolute start-50 translate-middle'>
            <Card className='p-5 rounded-4 bg-white border-top-0 border-end-0 border-start-0 shadow-lg mt-5' style={{ borderBottom: "10px solid ", borderColor: "#F96945", zIndex: 1 }}>
              <Row className='d-flex justify-content-center align-items-center flex-wrap'>
                {
                  reports.map((report, index) => {
                    return (
                      <Col lg={4} md={3} sm={4} xs={5} className="d-flex justify-content-center mb-4" key={index}>
                        <a href={report.link} target="_blank" rel="noopener noreferrer" className='text-black my-2 d-flex flex-column align-items-center'>
                          <img src={pdfimg} className='img-fluid h-100 w-50' alt="PDF icon" />
                          <p className='returntext mb-0 text-center'> {report.year}</p>
                        </a>
                      </Col>
                    );
                  })
                }
              </Row>
            </Card>
          </Container>
          <img src={investor} alt={investor} className='img-fluid' />
        </div>

      </section>

      {/* Mobile View */}

      <section className='d-block d-md-none'>
        <Container fluid className='p-0 pt-5 pb-4 investorbg'>
          <h1 className='fw-bold '>Annual Returns</h1>
        </Container>
        <Container fluid className='p-0 py-5 investorbg'>
          <h1 className='fw-bold '></h1>
        </Container>
        <div >
          <Container className='position-absolute start-50 translate-middle'>
            <Card className='p-5 rounded-4 bg-white border-top-0 border-end-0 border-start-0 shadow-lg mt-5' style={{ borderBottom: "10px solid ", borderColor: "#F96945", zIndex: 1 }}>
              {
                reports.map((report, index) => {
                  return (
                    <>
                      <a href={report.link} className='text-black my-2' key={index}>
                        <p className='returntext'>Annual Returns {report.year}</p>
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