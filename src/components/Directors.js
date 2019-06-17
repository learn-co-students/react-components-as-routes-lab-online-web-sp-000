import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
    <ul>
      {directors.map((director, index) => (
        <div key={index}>
            <p>Name: {director.name}</p>
            <p>Movies:</p>
            <ul>
                {director.movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>
        </div>))}
      </ul>
    </div>
  );
}

export default Directors
