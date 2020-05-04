import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, i) =>
        <div key={i}>
          {actor.name}
          <ul>{actor.movies}</ul>
        </div>
      )}
    </div>
  );
};

export default Actors;
