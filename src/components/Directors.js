import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.forEach(director => {
          <div>
            <p>{director.name}</p>
            <ul>
              {
                director.movies.forEach(movie => {
                  <li>{movie}</li>
                })
              }
            </ul>
          </div>
        })}
    </div>
  );
}

export default Directors
