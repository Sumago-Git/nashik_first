import React from 'react';
import { QRCodeCanvas } from 'qrcode.react'; // Use QRCodeCanvas or QRCodeSVG

const QRCodePage = () => {
//   const uniqueUrl = 'https://nashikfirst.com/Calenderpagerestrictred?access=9f4f8a69ab47f51bb34b16294d12dfab'; // Replace with your unique URL
  const uniqueUrl = 'https://nashikfirst.com/Calenderpagerestrictred?access=9f4f8a69ab47f51bb34b16294d12dfab'; // Replace with your unique URL

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Scan this QR Code to Access the Page</h1>
      <QRCodeCanvas value={uniqueUrl} size={200} /> {/* Use QRCodeCanvas */}
    </div>
  );
};

export default QRCodePage;
