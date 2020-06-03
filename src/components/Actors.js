import React from 'react';
import { actors } from '../data';

const Actors = () => {
  
  let loadActors = () => {
		return actors.map(actor => {
			return (
				<div>
					<h3><b>Name: </b>{actor.name}</h3>
					<ul><b>Movies: </b>{actor.movies.map(movie => <li>{movie}</li>)}</ul>
				</div>
			)
		})
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {loadActors()}
    </div>
  );
};

export default Actors;
