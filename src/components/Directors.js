import React from 'react';
import { directors } from '../data';

const buildDirectors = () => {
  return (
    directors.map(director => {
      return (
        <div>
          <p>{director.name}</p> 
          <ul>{director.movies.map(movie => <li> {movie}</li>)}</ul>
        </div> 
       )
    })
  )
}
const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {buildDirectors()}
      <p>This component should render the text Directors Page in an h1, and make a new div for each director. The div should contain the director's name and a ul with a list of their movies.</p>
  </div>
  );
}

export default Directors
