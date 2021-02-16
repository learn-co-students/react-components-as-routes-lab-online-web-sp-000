import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        <ul>
          {actors.map((actor) => <div key={actor.name}><li>{actor.name} - {actor.movies}</li></div>)}
        </ul>
    </div>
  );
};

export default Actors;
