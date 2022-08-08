import React from "react";

const CarouselIndicators = ({ slides, currentIndex, switchIndex }) => {
  return (
    <div className="carousel-indicators">
      {/* <button className="carousel-indicator-item"></button>
      <button className="carousel-indicator-item active"></button>
      <button className="carousel-indicator-item"></button> */}
      {slides.map((_, index) => (
        <button
          className={`carousel-indicator-item ${
            currentIndex === index ? "active" : ""
          }`}
          onClick={() => switchIndex(index)}
        ></button>
      ))}
    </div>
  );
};

export default CarouselIndicators;
