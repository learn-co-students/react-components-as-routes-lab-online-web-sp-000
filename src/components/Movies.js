import React from 'react';
import { movies } from '../data';

const Movies = () => {  
  let loadMovies = () => {
  	return movies.map(movie => {
			return (
				<div>
					<h3 key={movie.title}><b>Title: </b>{movie.title}</h3>
					<p key={movie.time}><b>Time: </b>{movie.time}</p>
					<ul key={`${movie.title}-genres`}><b>Genres:</b> {movie.genres.map(genre => <li>{genre}</li>)}</ul>
					<br/>
				</div>
			)
  	})
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {loadMovies()}
    </div>
  );
};

export default Movies;

			// <div key={movie.title}><b>Title: </b>{movie.title}</div>
			// <div key={movie.time}><b>Time: </b>{movie.time}</div>
			// <ul key={`${movies.title}-genres`}><b>Genres: </b>{movie.title}</ul>