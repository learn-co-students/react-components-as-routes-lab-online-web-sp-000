import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
      {movies.map((movie, index) => { 
        return <div key={index}> 
        <h2>{movie.title}</h2>
        <a>Running time: {movie.time} minutes.</a>
          <ul>
            <h3>Genres:</h3>
            {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Movies;
