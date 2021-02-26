import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const listDirectors = directors.map( director => 
    <div>
      <h4>{director.name}</h4>
      <ul>
        {director.movies.map( movie => <li>{movie}</li>)}
      </ul>
    </div> )

  

  return (
    <div>
      <h1>Directors Page</h1>
      {listDirectors}
    </div>
  );
}

export default Directors
