import React from 'react';
import { movies } from '../data';

const showMovies = () => {
  return (
    movies.map( movie => {
      return (
        <div>
          <h3>Title: {movie.title}</h3>
          <h3>Time: {movie.time} minutes</h3>
          <h3>Genres:</h3>
          <ul>{showGenres(movie.genres)}</ul>
        </div>
      )
    })
  )
}

const showGenres = (genres) => {
  return ( genres.map( genre => <li>{genre}</li> ))
}

const Movies = () => {
  return (
    <React.Fragment>
        <h1>Movies Page</h1>
        {showMovies()}
    </React.Fragment>
  );
};

export default Movies;