import React from 'react';
import Neg from '../images/negative.png';

const Negative = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Analysis Result</h1>
      <h3>NEGATIVE</h3><br/>
          <img
            src={Neg}  // Replace with your image URL
            alt="Negative result"
            // className="centered-image"
          />
    </div>
  )
}

export default Negative