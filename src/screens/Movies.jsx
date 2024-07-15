import React, { useState, useContext } from "react";
import MoviesList from "../components/MoviesList";
import ThemeContext from "../context/ThemeContext";
 
const Movies = () => {

 const {textColor} = useContext(ThemeContext) 
 // APi call
 const [movies] = useState([
  { title: "Movie 1", subTitle: "Movie Sub 1" },
  { title: "Movie 2", subTitle: "Movie Sub 2" },
  { title: "Movie 3", subTitle: "Movie Sub 3" },
  { title: "Movie 4", subTitle: "Movie Sub 4" },
  { title: "Movie 5", subTitle: "Movie Sub 5" },
 ]);

 return (
  <div className={textColor}>
  <div class="container">
   <div>Movies list</div>
   <MoviesList movies={movies} />
  </div>
  </div>
 );
};

export default Movies;