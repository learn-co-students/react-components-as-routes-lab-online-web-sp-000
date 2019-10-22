import React from "react";
import { actors } from "../data";

const listMovies = (movies) => {

	return (
		<ul>
			{movies.map(movie => <li key={movie}>{movie}</li>)}
		</ul>
	)

}

const displayActors = () => {

	return (
		actors.map(actor => {
			return (
				<div key={actor.name}>
					<h3>Name: {actor.name}</h3>
					<span>Movies: {listMovies(actor.movies)}</span>
				</div>
			);
		})
	)

}

const Actors = () => {

	return (
		<div>
			<h1>Actors Page</h1>
			{displayActors()}
		</div>
	)

}

export default Actors
