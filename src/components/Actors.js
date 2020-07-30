import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(Actor)}
    </div>
  );
};

const Actor = ({name, movies}) => {
  return (
    <div>
      Name: {name} <br></br>
      Movies:
      <ul>
      {movies.map(m => <li>{m}</li>)}
      </ul>
    </div>
  )
}

export default Actors;
