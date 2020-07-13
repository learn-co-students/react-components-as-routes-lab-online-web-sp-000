import React from 'react';
import { movies } from '../data';

let grabMovies = movies.map((movie) => {
  return (
    <div>
      <h1>{movie.title}, {movie.time}</h1>
      <ul>{movie.genres.map((genre) => <li>{genre}</li>)}</ul>
    </div>
  )
})

const Movies = () => {
  return (
    <div>
        <h1>"Movies Page"</h1>
        {grabMovies}
    </div>
  );
};

export default Movies;

