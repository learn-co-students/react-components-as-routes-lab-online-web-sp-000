import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
      <div>
      <h1> Directors Page </h1>
      {directors.map((director, index) => (
        <div className='director' key={index}>
          <h2>Director Name: {director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li className='movie' index={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
      </div>
  );
}

export default Directors
