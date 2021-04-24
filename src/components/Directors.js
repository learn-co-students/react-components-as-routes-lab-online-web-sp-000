import React from 'react';
import { directors } from '../data';

const Director = ({ name, movies}) => (
  <div className="director" key={name}>
    <h1>Name: {name}</h1>
    <p>Movies:</p>
    <ul>
      {movies.map(m => <li>{m}</li>)}
    </ul>
  </div>
);

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(Director)}
    </div>
  );
};

export default Directors
