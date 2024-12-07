// src/components/FloatingIcons.js
import React from 'react';
import { FaWhatsapp, FaYoutube, FaPhoneAlt } from 'react-icons/fa';
import './FloatingIcons.css';

const Movingicon = () => {
  return (
    <div className="floating-icons">
      <a href="https://wa.me/+917796116555?text=Hello How Can I Help You ?"className="iconz whatsapp" target='_blank' rel="noopener noreferrer">
        <FaWhatsapp className="iconz whatsapp" />
      </a>
      {/* <a href="https://wa.me/8530388815"className="iconz whatsapp" rel="noopener noreferrer">
        <FaWhatsapp className="iconz whatsapp" />
      </a> */}
      {/* <a href="https://www.youtube.com/@SumagoInfotechPvtLtd"  className="iconz youtube" rel="noopener noreferrer">
        <FaYoutube className="iconz youtube" />
      </a> */}
      <a href={`tel:+91 7796116555`} className="iconz phone">
        <FaPhoneAlt className="iconz phone"/>
        {/* <span className="tooltip">+91 7796116555</span> */}
      </a>
    </div>
  );
};


export default Movingicon