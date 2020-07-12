import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      { movies.map(movie => {
        return <div className='movie'>{movie.title} - Genres: {movie.genres.join(', ')} - Runtime: {movie.time}.</div> 
      }) }
    </div>
  );
};

export default Movies;
