import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((direct, index) => (
        <div key={index}> 
          <h3>{direct.name}</h3>
          <label>Movies:</label>
          <ul>
            {direct.movies.map( (movie, key) =>
            <li key={key}>{movie}</li>
            )}
          </ul>
        </div>

      ))}

      
    </div>
  );
}

export default Directors
