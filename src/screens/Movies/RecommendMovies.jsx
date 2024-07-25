import React, { useState, useContext } from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import ThemeContext from "../../context/ThemeContext";
import '../../css/RecommendMovies.css'

const RecommendMovies = () => {
 const { TextColor } = useContext(ThemeContext)
 const [index, setIndex] = useState(0);

 const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
 };

 const images = [
  "/movies/movies1.png",
  "/movies/movies2.png",
  "/movies/movies3.png",
  "/movies/movies4.png",
  "/movies/movies5.png",
  "/movies/movies6.png",
  "/movies/movies7.png",
  "/movies/movies8.png",
  "/movies/movies9.png",
  "/movies/movies10.png"
 ];

 return (
  <div className={TextColor}>
   <h4 className="mt-5"><b>Recommended Movies</b></h4>
   <div className="text-center mt-3 position-relative">
    <BootstrapCarousel
     activeIndex={index}
     onSelect={() => { }} // Disable default carousel behavior
     controls={false} // Disable default controls
     indicators={false}
     interval={null} // Disable auto sliding
    >
     <BootstrapCarousel.Item>
      <div className="d-flex justify-content-center">
       {images.slice(0, 5).map((src, i) => (
        <img key={i} src={src} alt={`Movie ${i + 1}`} className="movie-img" />
       ))}
      </div>
     </BootstrapCarousel.Item>
     <BootstrapCarousel.Item>
      <div className="d-flex justify-content-center">
       {images.slice(5, 10).map((src, i) => (
        <img key={i} src={src} alt={`Movie ${i + 6}`} className="movie-img" />
       ))}
      </div>
     </BootstrapCarousel.Item>
    </BootstrapCarousel>
    <div className="carousel-custom-controls">
     {index !== 0 && (
      <button
       className={`carousel-control-prev custom-button ${index === 1 ? 'active' : ''}`}
       onClick={() => setIndex(index === 1 ? 0 : 1)}
      >
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="sr-only">Previous</span>
      </button>
     )}
     {index !== 1 && (
      <button
       className={`carousel-control-next custom-button ${index === 0 ? 'active' : ''}`}
       onClick={() => setIndex(index === 0 ? 1 : 0)}
      >
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="sr-only">Next</span>
      </button>
     )}
    </div>
   </div>
  </div>
 );
};

export default RecommendMovies;
