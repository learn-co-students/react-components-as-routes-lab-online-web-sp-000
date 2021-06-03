import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, idx) => {
          return(
            <div key={idx}>
              <h2>{movie.title}</h2>
              <h3>Minutes: {movie.time}</h3>
              <h4>Genres: {movie.genres.join(', ')}</h4>
            </div>
          )}
        )}
    </div>
  );
};

export default Movies;
