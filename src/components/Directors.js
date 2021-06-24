import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
        <h1>Directors Page</h1>
        {directors.map((director, index) => (
          <div key={index}>
            <h1>Name: {director.name}</h1>
            <h1>Movies:</h1>
            {director.movies.map((movie) => (
              <p key={index}>{movie}</p>
            ))}
            </div>
        ))}
    </div>
  )
}

export default Directors
