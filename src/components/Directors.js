import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      <ul>
          {directors.map((director) => <div key={director.name}><li>{director.name} - {director.movies}</li></div>)}
        </ul>
    </div>
  );
}

export default Directors
