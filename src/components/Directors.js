import React from 'react';
import { directors } from '../data';

const Directors = () => {
	let loadDirectors = () => {
		return directors.map(director => {
			return (
				<div>
					<h3><b>Name: </b>{director.name}</h3>
					<ul><b>Movies: </b>{director.movies.map(movie => <li>{movie}</li>)}</ul>
				</div>
			)
		})
	}

  return (
    <div>
      <h1>Directors Page</h1>
			{loadDirectors()}
    </div>
  );
}

export default Directors
