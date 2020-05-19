import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map(actor => <div><h3>{actor.name}</h3><ul>{actor.movies.map(m =><li>{m}</li>)}</ul></div>)}
    </div>
  );
}

export default Directors
