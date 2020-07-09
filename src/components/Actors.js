import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}    </div>
  );
};

function renderActors(){
  return actors.map(actor => <div>{actor.name}<ul>{renderMovies(actor.movies)}</ul></div>)
}

function renderMovies(movies){
  return movies.map(movie => <li>{movie}</li>);
}

export default Actors;
