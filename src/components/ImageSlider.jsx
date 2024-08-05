import React from "react";

import scroller from "../assets/scroller.png";
const ImageSlider = () => {
  return (
    <div className="slider-container overflow-hidden mt-5 ">
      <div className="slider-track flex ">
        <img src={scroller} className="slider-image" alt="samtllogo" />
      </div>
    </div>
  );
};

export default ImageSlider;
