import React from 'react';
import { directors } from '../data';

const showDirectors = () => {
  return (
    directors.map( director => {
      return (
        <div>
          <h3>Name: {director.name}</h3>
          <h3>Movies: </h3>
          <ul>{showMovies(director.movies)}</ul>
        </div>
      )      
    })
  )
}

const showMovies = (movies) => {
  return movies.map( movie => <li>{movie}</li>)
}

const Directors = () => {
  return (
    <React.Fragment>
      <h1>Directors Page</h1>
      {showDirectors()}
    </React.Fragment>
  );
}

export default Directors
