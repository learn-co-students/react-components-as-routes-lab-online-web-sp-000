import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        <ul>
          {actors.map(actor => console.log(`<div className="actor">${actor.name}</div>`))}
        </ul>
    </div>
  );
};

export default Actors;
