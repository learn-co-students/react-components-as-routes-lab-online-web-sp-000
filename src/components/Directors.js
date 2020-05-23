import React from 'react';
import { directors } from '../data';


const Director = ({name, movies}) => {
  const moviesLis = movies.map(m => <li>{m}</li>)

  return (
    <div>
      <h2>Name: {name}</h2>
      Movies:
      <ul>
        {moviesLis}
      </ul>
    </div>
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(Director)}
    </div>
  );
}

export default Directors
