import React from 'react';
import { directors } from '../data';
import Movies from './Movies';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(directorDiv)}
    </div>
  );
}

const directorDiv = ({ name, movies }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Movies by {name} </p>
      <ul>
        {movies.map(movie=><li>{movie}</li>)}
      </ul>
      </div>
  )
}

export default Directors
