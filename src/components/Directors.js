import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>

      {directors.map((director, idx) => {
        return(
          <div key={idx}>
            <h2>{director.name}</h2>
            <h3>Movies</h3>
            <ul>
              {director.movies.map((movie, idx) => {
                return(
                  <li key={idx}>{movie}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
