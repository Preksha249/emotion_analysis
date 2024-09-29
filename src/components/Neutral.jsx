import React from 'react';
import Nue from '../images/nuetral.png'

const Neutral = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Analysis Result</h1>
      <h3>NUETRAL</h3><br/>
          <img
            src={Nue}  // Replace with your image URL
            alt="Negative result"
            className="centered-image"
          />
    </div>
  )
}

export default Neutral