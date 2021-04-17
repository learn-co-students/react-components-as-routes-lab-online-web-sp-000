import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(mov => {
          return (
            <div>
              {mov.title}
              {mov.genres.map(genre => {
                return (
                  <li>{genre}</li>
                )
              })}
              Time: {mov.time}
            </div>
          )
       })}
    </div>
  );
};

export default Movies;
