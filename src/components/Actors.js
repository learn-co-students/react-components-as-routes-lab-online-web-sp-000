import React from 'react';
import { actors } from '../data';

const Actors = () => {
  
  let grabActors = actors.map((actor) => {
    return (
    <div>
      <h1>{actor.name}</h1> 
      <ul>{actor.movies.map((movie) => <li>{movie}</li>)}</ul>
    </div>
    )
  })



  return (
    <React.Fragment>
      <h1>"Actors Page"</h1>
        {grabActors}
    </React.Fragment>
    
  );
};

export default Actors;
