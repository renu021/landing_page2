import "../Components/HeroImgStyle.css";

import React from 'react';

import IntroImg from "../Assests/hero.jpg";


const HeroImg = () => {
  return (
    <div className="hero">
      
      <div className="mask">
        <img src={IntroImg} alt="IntroImg" className="intro-img"/>
      </div>

    </div>
  );
}

export default HeroImg;