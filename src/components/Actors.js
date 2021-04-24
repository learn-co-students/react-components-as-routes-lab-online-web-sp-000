import React from 'react';
import { actors } from '../data';

const Actor = ({ name, movies}) => (
  <div className="actor" key={name}>
    <h1>Name: {name}</h1>
    <p>Movies:</p>
    <ul>
      {movies.map(m => <li>{m}</li>)}
    </ul>
  </div>
);


const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(Actor)}
    </div>
  );
};

export default Actors;
