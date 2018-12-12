import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
     {directors.map((director, i) => <div  obj={director.name} movies={director.movies} key={i} />)}
    </div>
  );
}

export default Directors
