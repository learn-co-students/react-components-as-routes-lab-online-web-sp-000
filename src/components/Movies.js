import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movies, index) => (
          <div key={index}>
            <h3>Name: {movies.title}</h3>
            <p>Time: {movies.time}</p>
            <p>Genres:</p>
            <ul>
              {movies.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
