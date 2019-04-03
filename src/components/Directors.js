import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, idx) => (
        <div key={idx}>
          <h3>Name{director.name}</h3>
          <ul>
            Movies:
            <li>{director.movies[0]}</li>
            <li>{director.movies[1]}</li>
            <li>{director.movies[2]}</li>
          </ul>
        </div>
    ))};
  </div>
  )
}

export default Directors
