// ImageScroller.jsx
import React from "react";
import scroller from "../assets/scroller.png"; // Update with the correct path to your image

const ImageScroller = () => {
  return (
    <div className="h-64 overflow-auto">
      <img
        src={scroller}
        alt="Scrolling content"
        className="block"
        style={{ width: "200%" }} // Simulate a larger image if needed
      />
    </div>
  );
};

export default ImageScroller;
