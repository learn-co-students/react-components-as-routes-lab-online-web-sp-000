import React from 'react';
import { movies } from '../data';

const Movies = () => {
  debugger
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => (makeMovie(movie)))}
    </div>
  );
};

const makeMovie = (movie) => {
  return(
    <div>
      <h2>{movie.title}</h2>
      <h3>{movie.time}</h3>
      <ul>{movie.genres}</ul>
    </div>
  )
}

export default Movies;
