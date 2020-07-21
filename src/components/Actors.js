import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      { actors.map(actorDiv) }
    </div>
  );
};

export default Actors;


const actorDiv = ({name, movies}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Movies with {name} </p>
            <ul>
              {movies.map(movie => <li>{movie}</li>)}
            </ul>
    </div>
  )
}