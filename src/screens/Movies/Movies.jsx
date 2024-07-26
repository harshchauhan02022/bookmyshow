import React, { useContext } from "react";
import MoviesList from "../../components/MoviesList";
import ThemeContext from "../../context/ThemeContext";

const Movies = () => {
  const { textColor } = useContext(ThemeContext);

  // Updated movies array with image paths
  const [movies] = React.useState([
    { title: "Movie 1", subTitle: "Movie Sub 1", image: "/movies/movies1.png" },
    { title: "Movie 2", subTitle: "Movie Sub 2", image: "/movies/movies2.png" },
    { title: "Movie 3", subTitle: "Movie Sub 3", image: "/movies/movies3.png" },
    { title: "Movie 4", subTitle: "Movie Sub 4", image: "/movies/movies4.png" },
    { title: "Movie 5", subTitle: "Movie Sub 5", image: "/movies/movies5.png" },
  ]);

  return (
    <div className={textColor}>
      <div className="container">
        <h2>Movies List</h2>
        <MoviesList movies={movies} />
      </div>
    </div>
  );
};

export default Movies;
