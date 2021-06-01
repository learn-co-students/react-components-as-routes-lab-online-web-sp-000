import React from 'react';
import { directors } from '../data';

const Directors = () => {

  function getDirectors() {
    return directors.map(e => {
      return (
        <div>
          <h2>{e.name}</h2>
          <h3>Movies</h3>
          <ul>
            {e.movies.map(m => <li>{m}</li>)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {getDirectors()}
    </div>
  );
}

export default Directors
