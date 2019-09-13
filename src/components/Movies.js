import React from 'react';
import { movies } from '../data';
import { unlink } from 'fs';

const Movies = () => {
  return (
    <div>

        <h1>Movies Page</h1>

        {movies.map(movie => {
          return <div>
          <h3>Movie Title: {movie.title}</h3>
          <h3>Movie Time: {movie.time} minutes</h3>
          <ul>{movie.genres.map(genre => (<li>{genre}</li>))}</ul>
          </div>
        })}
        
      
      
    </div>
  );
};

export default Movies;
