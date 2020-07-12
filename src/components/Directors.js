import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>

      <h1>Directors Page </h1>
      { directors.map((director, id) => <div key ={id} className ="director">{director.name}<ul>{director.movies.map((movie, id) => <li key={id}>{movie}</li>)}</ul></div>) }

    </div>
  );
}

export default Directors
