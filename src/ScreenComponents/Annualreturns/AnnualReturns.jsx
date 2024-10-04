// import React from 'react';
// import "../../Components/Investor.css";
// import frame4 from "../../Assets/Assets/MainBanner/Frame 4.png";
// import img4 from "../../Assets/Assets/MainBanner/img4.jpg"
// import investor from "../../Assets/Assets/Investor/investor.png";
// import { Container } from 'react-bootstrap';

// const Annualreport = () => {

//   // Array of annual report details
//   const reports = [
//     { year: '2020 – 2021', link: 'https://www.nashikfirst.com/wp-content/uploads/2021/11/Copy-of-Annual-Return.pdf' },
//     { year: '2021 – 2022', link: "" },
//     { year: '2022 – 2023', link: 'https://www.nashikfirst.com/wp-content/uploads/2021/11/Copy-of-Annual-Return.pdf' }
//   ];

//   return (
//     <>
//       <Container fluid className='p-0 m-0 mb-0'>
//         <img src={frame4} className='lghead d-none d-md-block' />
//         <img src={img4} className='img4 d-block d-md-none' />
//       </Container>

//       <Container fluid className='p-0 position-relative'>
//         <div className='investorbg position-relative pt-lg-5 pt-3 pb-0 p-0'>
//           <h1 className='inverstorheadline position-relative'>Annual Returns</h1>
//           <img src={investor} className='w-100 pt-lg-5 mt-lg-5 pt-5 mt-3 ' alt="Investor" />
//         </div>
//       </Container>
//       <Container >
//         <div className='return mt-lg-5 position-absolute top-100 start-50 translate-middle m-lg-0'>
//           {reports.map((report, index) => (
//             <a href={report.link} className='text-black' key={index}>
//               <p className='returntext pt-lg-4 pt-2 mt-2'>Annual Return {report.year}</p>
//             </a>
//           ))}
//         </div>
//       </Container>

//     </>
//   );
// };

// export default Annualreport;

import React from 'react';
import "../../Components/Investor.css";
import frame4 from "../../Assets/Assets/MainBanner/Frame 4.png";
import img4 from "../../Assets/Assets/MainBanner/img4.jpg"
import investor from "../../Assets/Assets/Investor/investor.png";
import { Card, Container } from 'react-bootstrap';
// import Banner from '../../Components/Banner';

const AnnualReturn = () => {

  // Array of annual report details
  const reports = [
    { year: '2020 – 2021', link: 'https://www.nashikfirst.com/wp-content/uploads/2021/11/Copy-of-Annual-Return.pdf' },
    { year: '2021 – 2022', link: "" },
    { year: '2022 – 2023', link: 'https://www.nashikfirst.com/wp-content/uploads/2021/11/Copy-of-Annual-Return.pdf' }
  ];

  return (
    <>

      {/* <Banner bannerImg={frame4} bannerImgMob={img4} /> */}
      <Container fluid className='p-0 m-0 mb-0'>
         <img src={frame4} className='lghead d-none d-md-block' />
         <img src={img4} className='img4 d-block d-md-none' />
       </Container>

      <Container fluid className='p-0 investorbg'>
        <h1 className='fw-bold  '>Annual Returns</h1>
      </Container>



      <Container className='position-absolute top-100 start-50 translate-middle '>
        <Card className='p-4 rounded-4 bg-white border-top-0 border-end-0 border-start-0 shadow-lg' style={{ borderBottom: "5px solid red", zIndex: 1 }}>
          {
            reports.map((report, index) => {
              return (
                <>
                  <a href={report.link} className='text-black my-2' key={index}>
                    <p className='returntext'>Annual Return {report.year}</p>
                  </a>
                </>
              )
            })
          }
        </Card>
      </Container>
      <img src={investor} alt={investor} className='img-fluid mt-lg-5 pt-lg-5' />


    </>
  );
};

export default AnnualReturn;