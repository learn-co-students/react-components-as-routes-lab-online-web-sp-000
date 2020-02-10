import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h3>{movie.title} {movie.time}</h3>
          {movie.genres.map((genre, index) =>(
            <ul>
              <li key={index}>{genre}</li>
            </ul>
          ))}
          </div>
          ))}
    </div>
  );
};

export default Movies;
