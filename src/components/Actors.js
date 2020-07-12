import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const listActors = () => {
    return (actors.map((actor) => {
      return (
        <div key={actor.name}>
          Name: {actor.name}<br />
          Movies: <ul>
            {actor.movies.map((movie) => <li key={movie}>{movie}</li>)}
          </ul>
          <br />
      </div>
      )
    }))
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {listActors()}
    </div>
  );
};

export default Actors;
