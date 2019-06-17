import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      <ul>
        {actors.map((actor, index) => (
          <div key={index}>
              <p>Name: {actor.name}</p>
              <p>Movies:</p>
              <ul>
                  {actor.movies.map((movie, index) => (
                      <li key={index}>{movie}</li>
                  ))}
              </ul>
          </div>))}
        </ul>
    </div>
  );
};

export default Actors;
