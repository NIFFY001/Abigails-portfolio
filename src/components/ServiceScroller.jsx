import React, { useEffect, useRef } from "react";

const ServiceScroller = ({ image }) => {
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
    <div className=" service-scroller-container">
      <div className=" service-scroller-track " ref={scrollerRef}>
        <img src={image} className="service-scroller-image" alt="scroller" />
      </div>
    </div>
  );
};

export default ServiceScroller;
