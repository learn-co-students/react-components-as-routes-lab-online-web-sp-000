import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
        <h1>Directors Page</h1>
        {directors.map((director) => {
          return (
            <div>
              <h4>{`Name: ${director.name}`}</h4>
              <h6>Movies:</h6>
              <ul>
              {director.movies.map(movie => <li>{movie}</li>)}
              </ul>
            </div>
          )}
        )}
    </div>
  );
}

export default Directors
