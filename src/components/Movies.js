import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(Movie)}
    </div>
  );
};

const Movie = ({title, time, genres}) => {
  return (
    <div>
      Title: {title} <br></br>
      Time: {time} <br></br>
      Genres:
      <ul>
  {genres.map(g => <li>{g}</li>)}
      </ul>
    </div>
  )
}

export default Movies;
