import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>
        Directors Page
      </h1>
      {directors.map(e => <div>{e.name}<ul>{e.movies.map(e2 => <li>{e2}</li>)}</ul></div>)}
    </div>
  );
}

export default Directors
