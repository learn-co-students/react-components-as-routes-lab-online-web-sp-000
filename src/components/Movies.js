import React from 'react';
import { movies } from '../data';

const buildMovies = () => {
  return (
    movies.map(movie => {
      return (
        <div>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time}</p> 
          <ul>{movie.genres.map(genre => <li> {genre}</li>)}</ul>
        </div> 
       )
    })
  )
}
const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {buildMovies()}
      <p> should contain the movies title, time and a ul with a list of its genres. </p>
    </div>
  );
};

export default Movies;
