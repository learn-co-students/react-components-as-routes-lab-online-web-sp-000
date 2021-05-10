import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {
        <h1>Actors Page</h1>
      }
      {
        actors.map(actor =>{
          return(
            <div>
            <h2>Name: {actor.name}</h2>
            <h3>Movies: </h3>
            <ul>
              {actor.movies.map(movie => <li>{movie}</li>)}
            </ul>
            </div>
          )
        })
      }
    </div>

  );
};

export default Actors;

// This component should render the text `Actors Page` in an `<h1>`, and make a new `<div>` for
// each actor. The `<div>` should contain the actor's name and a `<ul>` with a list of their
// movies. 

// > Note: The tests will count how many `<div>`s are nested inside your `Movies`, `Directors`, and 
// `Actors` components. So to get tests to pass, you must create _exactly one_ `<div>` for each movie, 
// director, or actor, and no additional nested `<div>`s in those components. 