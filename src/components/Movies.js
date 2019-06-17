import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        <ul>
        {movies.map((movie, index) => (
          <div key={index}>
              <p>Name: {movie.title}</p>
              <p>Time: {movie.time}</p>
              <p>Genres:</p>
              {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>))}
          </div>))}
        
        </ul>
    </div>
  );
};

export default Movies;
