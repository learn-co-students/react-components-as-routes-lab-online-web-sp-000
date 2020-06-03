import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>'Actors Page'</h1>
      {actors.map(actor => (
        <div key={actor.name}>
          <h3 className="actor">Name: {actor.name}</h3>
          <p>Movies:</p>
          {actor.movies.map(movie => <ul key={movie}>{movie}</ul>)}
        </div>
      ))}
    </div>
  );
};

export default Actors;
