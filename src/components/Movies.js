import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, i) => 
          <div key={i}>
            {movie.title} {movie.time} minutes 
            <ul>
              {movie.genres}
            </ul>
            {movie.metascore}
          </div>
          )}
    </div>
  );
};

export default Movies;
