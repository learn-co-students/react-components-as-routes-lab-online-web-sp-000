import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
      {movies.map((movie, index) => { 
        return <div key={index}> 
        <a>{movie.title}</a>
        <a>{movie.time}</a>
          <ul>
            {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Movies;
