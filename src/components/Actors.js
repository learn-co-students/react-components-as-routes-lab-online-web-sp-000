import React from 'react';
import { actors } from '../data';

const Actor = ({
  name,
  movies
}) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Movies: </p>
      <ul>
        {movies.map((title, index) => (
                      <li key={index}>{title}</li>
        ))} 
      </ul>
    </div>
  );
};

const Actors = () => {
  return (
    <div>
        {<h1>Actors Page</h1>}
        {actors.map(Actor)}
    </div>
  );
};

export default Actors;