import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
       <h1>Actors Page</h1>
        {actors.map((actor) => {
          return (
            <div>
              <h4>{`Name: ${actor.name}`}</h4>
              <h6>Movies:</h6>
              <ul>
              {actor.movies.map(movie => <li>{movie}</li>)}
              </ul>
            </div>
          )}
        )}
    </div>
  );
};

export default Actors;
