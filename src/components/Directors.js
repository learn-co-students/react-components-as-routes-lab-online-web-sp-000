import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const listDirectors = () => {
    return (directors.map((director) => {
      return (
        <div key={director.name}>
          Name: {director.name}<br />
          Movies: <ul>
            {director.movies.map((movie) => <li key={movie}>{movie}</li>)}
          </ul>
          <br />
      </div>
      )
    }))
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {listDirectors()}
    </div>
  );
}

export default Directors
