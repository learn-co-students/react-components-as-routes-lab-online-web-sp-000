import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}, {movie.time} minutes</h2>
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}

        </div>
      ))}
       </div>
  );
};

export default Movies;