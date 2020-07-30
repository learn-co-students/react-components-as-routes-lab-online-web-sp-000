import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map(Director)}
    </div>
  );
}

const Director = ({name, movies}) => {
  return (
    <div>
      Name: {name} <br></br>
      Movies:
      <ul>
        {movies.map(f => <li>{f}</li>)}
      </ul>
    </div>
  )
}

export default Directors
