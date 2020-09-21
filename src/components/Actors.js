import React from 'react';
import { actors } from '../data';


const buildActors = () => {
  return (
    actors.map(actor => {
      return (
        <div>
          <p>{actor.name}</p> 
          <ul>{actor.movies.map(movie => <li> {movie}</li>)}</ul>
        </div> 
       )
    })
  )
}
const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {buildActors()}
      <p>and make a new div for each actor. The div should contain the actor's name and a ul with a list of their movies.</p>
    </div>
  );
};

export default Actors;
