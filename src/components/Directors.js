import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, idx) => {
        return <div key={idx}>
          {director.name}
          {director.movies.map((movie, idx) => {
            return <ul key={idx}>
                <li>{movie}</li>
              </ul>
          })}
        </div>
      })}
    </div>
  );
}

export default Directors
