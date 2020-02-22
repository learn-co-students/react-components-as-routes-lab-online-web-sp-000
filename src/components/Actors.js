import React from 'react';
import { actors } from '../data';

function renderActor(d){
  return (
    <div>
      <h2>{`name: ${d.name}`}</h2>
      <ul>
        {d.movies.map(m=><li>{m.title}</li>)}
      </ul>
    </div>
  )
}
const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(d=>renderActor(d))}
    </div>
  );
};

export default Actors;


