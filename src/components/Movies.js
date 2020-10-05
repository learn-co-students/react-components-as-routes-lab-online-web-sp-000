import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <h3>{movie.time}</h3>
          {movie.genres.map((genre, index) => (
            <ul key={index}>{genre}</ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Movies;
