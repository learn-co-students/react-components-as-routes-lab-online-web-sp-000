import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className='actor'>
      <h1>Actors Page</h1>
      {actors.map(info => {
        const {name, movies} = info
        return (
          <div>
            <h3>{name}</h3>
            <ul>{movies.map(title => <li>{title}</li>)}</ul>
          </div>
        )})
      }
    </div>
  );
};

export default Actors;
