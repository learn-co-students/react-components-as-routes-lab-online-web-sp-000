import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let a = actors.map( (actor) => {
    return (
      <div className="actor">
        <p>{actor.name}</p> 
        {actor.movies.map( (movie) => <p>{movie}</p>) }
      </div>
    )
  })

  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
          {a}
    </div>
  );
};

export default Actors;
