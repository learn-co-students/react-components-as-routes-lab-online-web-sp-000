import React from 'react';
import { actors } from '../data';

const Actors = () => {
  
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor =>
        <div className= 'actor'> 
          <li>{actor.name}</li>
          <li>{actor.movies}</li>
        </div>  
      )}
    </div>
  );
};

export default Actors;
