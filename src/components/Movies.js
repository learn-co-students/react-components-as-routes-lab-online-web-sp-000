import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      <ul>
      {console.log(movies)}
      {movies.map((movie) => <div key={movie.title}><li>{movie.title} - {movie.time} - {movie.genres} - {movie.metascore}</li></div>)}  
      </ul>
    </div>
  );
};

export default Movies;
