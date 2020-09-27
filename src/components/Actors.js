import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, idx) => {
        return <div key={idx}>
          {actor.name}
          {actor.movies.map((movie, idx) => {
            return <ul key={idx}>
                <li>{movie}</li>
              </ul>
          })}
        </div>
      })}
    </div>
  );
};

export default Actors;
