import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
      {movies.map((movie, index) => 
        <div className="movie" key={movie.index}>
          Movie Title: {movie.title}
          Time: {movie.time}
          {movie.genres.map(genre => 
            <ul>{genre}</ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Movies;
