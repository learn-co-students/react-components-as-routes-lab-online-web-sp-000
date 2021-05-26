import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>
        Directors Page
      </h1>
      {
        directors.map((actor, index) => (
        <div className='actor-cards' key={index}>
        <h3>Name: {actor.name}</h3>
        <h5>Movies: </h5>
          <ul>
            {
              actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
          </ul>
      </div>
      ))}
    </div>
  );
}

export default Directors
