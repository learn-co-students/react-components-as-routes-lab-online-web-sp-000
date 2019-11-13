import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1> Movies Page </h1>
        {movies.map((movie,id) => <div key={id}>Title: {movie.title} Time: {movie.time} 
           <ul>{movie.genres.map((genre, id) => <li ky={id}>{genre}</li>)}</ul></div>)}
    </div>
  );
};

export default Movies;
