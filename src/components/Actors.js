import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map(({name, movies}) => (
        <div>
          {name}
          <ul>{movies.map(m => <li>{m}</li>)}</ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
