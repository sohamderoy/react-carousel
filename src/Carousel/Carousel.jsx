import CarouselItem from "./CarouselItem";
import "./Carousel.css";
import { useState, useEffect, useRef } from "react";
import CarouselControls from "./CarouselControls";
import CarouselIndicators from "./CarouselIndicators";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideInterval = useRef();

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 3000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  const prev = () => {
    startSlideTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };
  const next = () => {
    startSlideTimer();
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const switchIndex = (index) => {
    startSlideTimer();
    setCurrentSlide(index);
  };
  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <CarouselItem
            slide={slide}
            key={index}
            startSlide={startSlideTimer}
            stopSlide={stopSlideTimer}
          />
        ))}
      </div>
      <CarouselIndicators
        slides={slides}
        currentIndex={currentSlide}
        switchIndex={switchIndex}
      />
      <CarouselControls prev={prev} next={next} />
    </div>
  );
};

export default Carousel;
