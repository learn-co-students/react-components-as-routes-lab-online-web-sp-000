import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      <div id="movies-list">
        {movies.map((movie, i) => (
          <Movie key={i.toString()} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;

const Movie = props => {
  return (
    <div id="movie">
      <h2>Name: {props.movie.title}</h2>
      <p>Time: {props.movie.time}</p>
      <p>Genres:</p>
      <ul>
        {props.movie.genres.map(genre => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  );
};
