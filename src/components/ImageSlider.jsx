import React from "react";
import imgslider from "../assets/imgslider.png";

const ImageSlider = () => {
  return (
    <div className="slider-container overflow-hidden mt-5 ">
      <div className="slider-track flex ">
        <img src={imgslider} className="slider-image" alt="samtllogo" />
        <img src={imgslider} className="slider-image" alt="samtllogo" />
      </div>
    </div>
  );
};

export default ImageSlider;
