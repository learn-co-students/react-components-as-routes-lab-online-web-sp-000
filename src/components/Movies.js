import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const listMovies = () => {
    return (movies.map((movie) => {
      return (
        <div key={movie.title}>
        Name: {movie.title}<br />
      Time: {movie.time}<br />
        Genres: <ul>
          {movie.genres.map((genre) => <li key={genre}>{genre}</li>)}
        </ul>
      </div>
      )
    }))
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {listMovies()}
    </div>
  );
};

export default Movies;
