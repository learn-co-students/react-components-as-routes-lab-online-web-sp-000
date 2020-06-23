import React from 'react';
import { directors, movies } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

function renderMovies(movies){
  return movies.map(movie => <li>{movie}</li>);
}

function renderDirectors(){
  return directors.map(director => <div><ul>{director.name}{renderMovies(director.movies)}</ul></div>)
}

export default Directors
