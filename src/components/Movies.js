import React from "react";
import { movies } from "../data";

const renderMovies = (movies) => {
  return movies.map((movie, index) => {
    return (
      <div key={index}>
        <h2>{movie.title}</h2>
        <h3>Time: {movie.time}</h3>
        <h3>Genres:</h3>
        <ul>
          {movie.genres.map((genre, index) => {
            return <li key={index}>{genre}</li>;
          })}
        </ul>
      </div>
    );
  });
};

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies(movies)}
    </div>
  );
};

export default Movies;
