import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.forEach(actor => {
          <div>
            <p>{actor.name}</p>
            <ul>
              {
                actor.movies.forEach(movie => {
                  <li>{movie}</li>
                })
              }
            </ul>
          </div>
        })
      }
    </div>
  );
};

export default Actors;
