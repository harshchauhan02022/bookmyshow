import React from "react";
import '../css/RecommendMovies.css'; // Import the CSS file for styling 

const MoviesList = ({ movies }) => {
 return (
  <div className="movies-list">
   {movies.map((movie, index) => (
    <div key={index} className="movie-item">
     <img src={movie.image} alt={movie.title} className="movie-image" />
     <h3 className="movie-title">{movie.title}</h3>
     <p className="movie-subtitle">{movie.subTitle}</p>
    </div>
   ))}
  </div>
 );
};

export default MoviesList;
