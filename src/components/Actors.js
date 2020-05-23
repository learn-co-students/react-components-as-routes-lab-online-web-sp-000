import React from 'react';
import { actors } from '../data';

const Actor = ({name, movies}) => {
  const moviesLi = movies.map(m => <li>{m}</li>)

  return (
    <div>
      <h2>Name: {name}</h2>

      Movies:
      <ul> {moviesLi}
      </ul>
    </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(Actor)}
    </div>
  );
};

export default Actors;
