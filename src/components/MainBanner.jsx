import React from 'react';
import CarouselComponent from './Carousel';
import RecommendMovies from '../screens/Movies/RecommendMovies';

const MainBanner = () => {
  return (
    <div className="container">
      <CarouselComponent />
      <RecommendMovies />
      <div>
        <img src="./icon/bookmyshow.png" className="icon-bookmyshow" alt="Description of the banner" />
      </div>
    </div>
  );
};

export default MainBanner;
