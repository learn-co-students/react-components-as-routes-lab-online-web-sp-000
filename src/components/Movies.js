import React from 'react';
import { movies } from '../data';

const Movies = () => {

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, i) => {
        return <div key={i}>
          <h3>{movie.title}</h3>
          Time: {movie.time}<br />
          Genres:
          <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Movies;
