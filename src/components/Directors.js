import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(Director)}
    </div>
  );
};

const Director = ({ name, movies }) => {
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
export default Directors
