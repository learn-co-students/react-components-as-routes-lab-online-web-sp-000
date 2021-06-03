import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, idx) => {
        return(
          <div className={actor} key={idx}>
            <h2>{actor.name}</h2>
            <h3>Movies</h3>
            <ul>
              {actor.movies.map((movie, idx) => {
                return(
                  <li key={idx}>{movie}</li>
                )
              })}
            </ul>
          </div>
        )}
      )}
    </div>
  );
};

export default Actors;
