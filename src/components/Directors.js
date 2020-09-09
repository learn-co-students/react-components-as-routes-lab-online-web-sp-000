import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div>
          <h3 key={index}>{director.name}</h3>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>
                {movie}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/*{code here}*/}
    </div>
  );
}

export default Directors
