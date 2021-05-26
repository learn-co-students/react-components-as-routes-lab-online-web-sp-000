import React from 'react';
import { actors } from '../data';

function generateActors(){
  return actors.map(actor => {
    <div key={actor.name} className='actor'>
      {actor.name}
      {actor.movies}
    </div>
  })
}

const Actors = () => {
  return (
    <div>
      <h1>
        Actors Page
      </h1>
      <div className='actor-cards'>
        {generateActors()}
      </div>
    </div>
  );
};

export default Actors;
