import React from 'react';
import { movies } from '../data';

const Movies = () => {

  function getMovies() {
    return movies.map(e => {
      return (
        <div>
          <h2>{e.title}</h2>
          <span>{e.time} minutes</span>
          <ul>
            {e.genres.map(g => <li>{g}</li>)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
      {getMovies()}
    </div>
  );
};

export default Movies;
