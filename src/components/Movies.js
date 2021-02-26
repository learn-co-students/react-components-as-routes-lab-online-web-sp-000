import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesList = movies.map( movie => 
    <div>
      <h4>{movie.title}</h4>
      <h5>Time: {movie.time} minutes</h5>
      <h5>Genres</h5>
      <ul>
        {movie.genres.map( genre => <li>{genre}</li>)}
      </ul>
      <h5>Metascore: {movie.metascore || "N/A"}</h5>
    </div>)
  return (
    <div>
        <h1>Movies Page</h1>
        {moviesList}
    </div>
  );
};

export default Movies;
