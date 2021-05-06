import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        { 
          movies.forEach(movie => {
            <div>
              <p>{movie.title}</p>
              <p>{movie.time}</p>
              <ul>
                { movie.genres.forEach(genre => {
                  <li>{genre}</li>
                }) }
              </ul>
            </div>
          })
        }
    </div>
  );
};

export default Movies;
