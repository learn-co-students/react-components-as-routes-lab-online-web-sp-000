import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

const renderDirectors = () => {
   return directors.map(director => {
      return (
         <div key={director.name}>
            <h3>{director.name}</h3>
            <h4>Movies:</h4>
            <ul>
               {director.movies.map(movie => <li key={movie}>{movie}</li>)}
            </ul>
         </div>
      )
   })
}

export default Directors
