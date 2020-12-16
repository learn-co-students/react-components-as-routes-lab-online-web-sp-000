import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map(director => (
          <div>
            <h2 key={directors.indexOf(director.name)}>{director.name}</h2>
            <ul>
              {director.movies.map(movie => ( <li key={director.movies.indexOf(movie)}>{movie}</li> ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default Directors
