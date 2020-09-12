import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        return (
          <div>
            <h3>{director.name}</h3>
            <ul>
              <b>Movies</b>
              {director.movies.map(m => <li>{m}</li>)}
            </ul>
          </div>
        )
      })}
    </div>
  );
}




export default Directors
