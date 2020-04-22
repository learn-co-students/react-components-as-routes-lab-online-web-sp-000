import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index}>
          <h2>{actor.name}</h2>
          {actor.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}

        </div>
      ))}
       </div>
  )
}




export default Actors;

//render the text Actors Page in a <h1>, and make a new <div> for each actor. 
//The <div> should contain the actor's name and an <ul> for each of their movies.