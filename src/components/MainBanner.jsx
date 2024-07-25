import React from 'react';
import CarouselComponent from './Carousel';
import RecommendMovies from '../screens/Movies/RecommendMovies';

const MainBanner = () => {
  return (
    <div className="container">
      <CarouselComponent />
      <RecommendMovies />
    </div>
  );
};

export default MainBanner;
