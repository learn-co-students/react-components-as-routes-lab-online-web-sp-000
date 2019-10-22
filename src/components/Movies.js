import React from "react";
import { movies } from "../data";

const listGenres = (genres) => {

	return (
		<ul>
			{genres.map(genre => <li key={genre}>{genre}</li>)}
		</ul>
	)

}

const displayMovies = () => {

	return (
		movies.map(movie => {
			return (
				<div key={movie.title}>
					<h3>Name: {movie.title}</h3>
					<span>Time: {movie.time}</span>
					<br/><br/>
					<span>Genres: {listGenres(movie.genres)}</span>
				</div>
			);
		})
	)

}

const Movies = () => {

	return (
		<div>
			<h1>Movies Page</h1>
			{displayMovies()}
		</div>
	)

}

export default Movies
