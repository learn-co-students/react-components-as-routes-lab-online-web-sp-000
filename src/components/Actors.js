import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
       {actors.map((actor, i) => <div className="actor"  obj={actor.name} movies={actor.movies} key={i} />)}

    </div>
  );
};

export default Actors;
