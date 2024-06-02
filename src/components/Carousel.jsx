import React, { useState } from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import '../App.css'; // Ensure your CSS is imported

const CarouselComponent = () => {
 const [index, setIndex] = useState(0);

 const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
 };

 const handlePrev = () => {
  setIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
 };

 const handleNext = () => {
  setIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
 };

 // const Banner1 = "/banner/main-banner1.png";
 const Banner2 = "/banner/main-banner2.png";
 const Banner3 = "/banner/main-banner3.png";
 const Banner4 = "/banner/main-banner4.png";
 const Banner5 = "/banner/main-banner5.png";

 return (
  <div className="text-center mt-3 position-relative">
   <BootstrapCarousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
    {/* <BootstrapCarousel.Item>
     <img className="d-block w-100" src={Banner1} alt="First slide" />
    </BootstrapCarousel.Item> */}
    <BootstrapCarousel.Item>
     <img className="d-block w-100" src={Banner2} alt="Second slide" />
    </BootstrapCarousel.Item>
    <BootstrapCarousel.Item>
     <img className="d-block w-100" src={Banner3} alt="Third slide" />
    </BootstrapCarousel.Item>
    <BootstrapCarousel.Item>
     <img className="d-block w-100" src={Banner4} alt="Fourth slide" />
    </BootstrapCarousel.Item>
    <BootstrapCarousel.Item>
     <img className="d-block w-100" src={Banner5} alt="Fourth slide" />
    </BootstrapCarousel.Item>
   </BootstrapCarousel>
   <button className="carousel-control-prev custom-prev" onClick={handlePrev}>
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
   </button>
   <button className="carousel-control-next custom-next" onClick={handleNext}>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
   </button>
   <ol className="carousel-indicators custom-indicators">
    {[0, 1, 2, 3, 4].map((indicatorIndex) => (
     <li
      key={indicatorIndex}
      data-target="#carouselExampleIndicators"
      data-slide-to={indicatorIndex}
      className={index === indicatorIndex ? 'active' : ''}
      onClick={() => setIndex(indicatorIndex)}
     ></li>
    ))}
   </ol>
  </div>
 );
};

export default CarouselComponent;
