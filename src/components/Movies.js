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

const Movie = ({ title, time, genres, metascore }) => {
  return ( 
    <div>
      <p>{title}</p>
      <p>{time}</p>
      <p>{genres.join(', ')}</p>
      <p>{metascore}</p>
    </div>
  )
}
export default Movies;
