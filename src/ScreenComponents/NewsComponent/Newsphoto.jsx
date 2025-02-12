import React, { useEffect, useState } from 'react';
import lghead from "../../Assets/Assets/MainBanner/lghead.jpg";
import img4 from "../../Assets/Assets/Home/traffic_education_mob.png";
import { Col, Container, Modal, Row } from 'react-bootstrap';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Newsphoto = () => {
  const [getdata, setdata] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const fetchData = () => {
    axios.get('news/get-news')
      .then((res) => {
        setdata(res.data.responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
    Aos.init();
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    768: 2,
    576: 1
  };

  return (
    <>
      <style>
        {`
          .masonry-grid {
            display: flex;
            margin-left: -15px;
            width: auto;
          }

          .masonry-grid_column {
            padding-left: 15px;
            background-clip: padding-box;
          }

          .masonry-card {
            margin-bottom: 15px;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          }

          .masonry-card img {
            width: 100%;
            display: block;
            border-radius: 8px;
            object-fit: cover;
          }
        `}
      </style>

      {/* Banner Section */}
      <Container fluid className='me-0'>
        <Row>
          <Col className='p-0'>
            <img src={lghead} className='lghead d-none d-md-block w-100' alt="Banner" />
            <img src={img4} className='img4 d-block d-md-none w-100' alt="Banner" />
          </Col>
        </Row>
      </Container>

      {/* News Title */}
      <h1
        style={{
          fontWeight: '700',
          fontFamily: "'Century Gothic Paneuropean', sans-serif",
          fontSize: '40px'
        }}
        className='mt-lg-4 my-4 text-center'
      >
        News
      </h1>

      {/* Masonry Layout */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid mx-lg-5 px-lg-3"
        columnClassName="masonry-grid_column"
      >
        {getdata.map((item, index) => (
          <div className="masonry-card" key={index} data-aos="zoom-in-down">
            <img src={item.img} alt={`Photo ${index + 1}`} onClick={() => {
              setShow(true)
              setId(index)
            }} />
          </div>
        ))}
      </Masonry>
      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Body>
          <img src={getdata[id]?.img} className=' img-fluid' alt={`Event Gallery `} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Newsphoto;
