import React from 'react';
import { actors } from '../data';

const showActors = () => {
  return (
    actors.map( actor => {
      return (
        <div>
          <h3>Name: {actor.name}</h3>
          <ul>{showMovies(actor.movies)}</ul>
        </div>
      )
    })
  )
}

const showMovies = (movies) => {
  return movies.map( movie => <li>{movie}</li>)
}

const Actors = () => {
  return (
    <React.Fragment>
      <h1>Actors Page</h1>
      {showActors()}
    </React.Fragment>
  );
};

export default Actors;
