import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {/* make a new <div> for each director. The <div> should contain the director's name and a <ul> with a list of their movies. */}
      {directors.map((director, index) => (
          <div key={index}>
              <h3>Name: {director.name}</h3>
              <p>Movies:</p>
              <ul>
                  {director.movies.map((movie, index) => (
                      <li key={index}>{movie}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
  );
}

export default Directors
