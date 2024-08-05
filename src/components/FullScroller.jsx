import React, { useEffect, useRef } from "react";
// Ensure the CSS file is imported

const FullScroller = ({ image }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollerRef.current) {
        scrollerRef.current.scrollLeft += 1;
        if (
          scrollerRef.current.scrollLeft >=
          scrollerRef.current.scrollWidth / 2
        ) {
          scrollerRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="full-scroller-container overflow-hidden  w-full">
      <div className="full-scroller-track" ref={scrollerRef}>
        <img
          src={image}
          className="full-scroller-image w-full h-auto"
          alt="scroller"
        />
        <img
          src={image}
          className="full-scroller-image w-full h-auto"
          alt="scroller"
        />

        <img
          src={image}
          className="full-scroller-image w-full h-auto"
          alt="scroller"
        />
      </div>
    </div>
  );
};

export default FullScroller;
