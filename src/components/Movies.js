import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie) => {
          return (
            <div>
              <h4>{`Name: ${movie.title}`}</h4>
              <h6>{`Time: ${movie.time}`}</h6>
              <h6>Genres:</h6>
              <ul>
              {movie.genres.map(genre => <li>{genre}</li>)}
              </ul>
            </div>
          )}
        )}
    </div>
  );
};

export default Movies;
