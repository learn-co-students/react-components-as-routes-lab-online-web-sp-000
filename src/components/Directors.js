import React from 'react';
import { directors } from '../data';

const Director = ({
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

const Directors = () => {
  return (
    <div>
        {<h1>Directors Page</h1>}
        {directors.map(Director)}
    </div>
  );
}

export default Directors
