import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(MovieDiv)}
    </div>
  );
};

const MovieDiv = ({title, time, genres, metascore}) => { //destructured for easier accessiblity
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
