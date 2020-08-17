import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
      <div>
      <h1> Actors Page </h1>
      {actors.map((actor, index) => (
        <div className='actor' key={index}>
          <h2>Actor Name: {actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li className='movie' index={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
      </div>
  );
};

export default Actors;
