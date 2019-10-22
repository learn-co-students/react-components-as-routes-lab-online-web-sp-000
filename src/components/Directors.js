import React from "react";
import { directors } from "../data";

const listMovies = (movies) => {

	return (
		<ul>
			{movies.map(movie => <li key={movie}>{movie}</li>)}
		</ul>
	)

}

const displayDirectors = () => {

	return (
		directors.map(director => {
			return (
				<div key={director.name}>
					<h3>Name: {director.name}</h3>
					<span>Movies: {listMovies(director.movies)}</span>
				</div>
			);
		})
	)

}

const Directors = () => {

	return (
		<div>
			<h1>Directors Page</h1>
			{displayDirectors()}
		</div>
	)

}

export default Directors
