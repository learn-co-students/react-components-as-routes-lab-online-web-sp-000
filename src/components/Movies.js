import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => (
          <div>
            <h2 key={movies.indexOf(movie.title)}>{movie.title}</h2>
            <h3>Time: {movie.time}</h3>
            <ul>
              {movie.genres.map(genre => ( <li key={movie.genres.indexOf(genre)}>{genre}</li> ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
