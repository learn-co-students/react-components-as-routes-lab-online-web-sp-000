import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <div>
          <h2 key={actors.indexOf(actor.name)}>{actor.name}</h2>
          <ul>
              {actor.movies.map(movie => ( <li key={actor.movies.indexOf(movie)}>{movie}</li> ))}
            </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
