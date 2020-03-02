import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>
        Actors Page
      </h1>
      {actors.map(e => <div>{e.name}<ul>{e.movies.map(e2 => <li>{e2}</li>)}</ul></div>)}
    </div>
  );
};

export default Actors;
