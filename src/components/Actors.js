import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      { actors.map( actor => {
        return (
          <div>
            <h3>{actor.name}</h3>
            <ul>
              <b>Movies</b>
              {actor.movies.map(movie => <li>{movie}</li>)}
            </ul>
          </div>
        )
      }) }
    </div>
  );
};

export default Actors;
