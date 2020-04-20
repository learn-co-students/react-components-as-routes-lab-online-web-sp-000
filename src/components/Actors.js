import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(Actor)}
    </div>
  );
};

const Actor = ({ name, movies }) => {
  return (
    <div>
      <h2>{name}</h2>
      {movies.map(title => Movie({title: title}))}
    </div>
  )
}

const Movie = ({ title }) => {
  return ( 
    <p>{title}</p>
  )
}

export default Actors;
