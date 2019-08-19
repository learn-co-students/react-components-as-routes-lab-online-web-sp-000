import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) =>
      <div>
        <h4>{movie.title}</h4>
        <h6>Time: {movie.time} minutes</h6>
        {movie.genres.map((genre) =>
          <li>{genre}</li>
        )}
      </div>
    )}
  </div>
  );
};

export default Movies;
