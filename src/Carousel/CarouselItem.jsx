import React from "react";

const CarouselItem = ({ slide, key, startSlide, stopSlide }) => {
  return (
    <div
      className="carousel-item"
      onMouseEnter={stopSlide}
      onMouseOut={startSlide}
    >
      <img src={slide} alt="" />
    </div>
  );
};

export default CarouselItem;
