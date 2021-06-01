import React from 'react';
import { actors } from '../data';
const Actors = () => {

  function getActors() {
    return actors.map(e => {
      return <div>
        <h2>{e.name}</h2>
        <h3>Movies</h3>
        <ul>
          {e.movies.map(m => <li>{m}</li>)}
        </ul>
      </div>
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {getActors()}
    </div>
  );
};

export default Actors;
