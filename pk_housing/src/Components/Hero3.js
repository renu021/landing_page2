

import React from 'react';
import "../Components/Hero3.css";

import p1 from "../Assests/project1.jpg";
import p2 from "../Assests/project2.jpg";
import p3 from "../Assests/p3.jpg";
import p4 from "../Assests/p4.avif";

const Hero3 = () => {
  return (
    <div className="Hero3-container"> 
      <img src={p1} alt="p1" />
      <img src={p2} alt="p2" />
      <img src={p3} alt="p3" />
      <img src={p4} alt="p4" />
    </div>
  );
}

export default Hero3;

