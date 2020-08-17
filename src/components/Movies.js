import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1> Movies Page </h1>
    {movies.map((movie, index) => (
      <div className='movie' key={index}>
        <h2>Movie Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <p>Metascore {movie.metascore}</p>
        <ul>
            {movie.genres.map((genre, index) => (
              <li className='genre' index={index}>{genre}</li>
            ))}
          </ul>
      </div>
    ))}
    </div>
  );
};

export default Movies;
