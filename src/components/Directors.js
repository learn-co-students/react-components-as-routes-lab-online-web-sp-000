import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map((director, index) => {
        return(
          <div key={index}>
            <ul>
              <h2>{director.name}</h2>
              {director.movies.map((movie, index) => <li key={index}>{movie}</li>)}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
