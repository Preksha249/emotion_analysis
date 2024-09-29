import React from 'react';
import Pos from '../images/positive.png';

const Positive = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Analysis Result</h1>
      <h3>POSITIVE</h3><br/>
          <img
            src={Pos}  // Replace with your image URL
            alt="Negative result"
            className="centered-image"
          />
    </div>
  )
}

export default Positive