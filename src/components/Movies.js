import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
     <h1>Movies Page</h1>
     {movies.map((movie, i) => (
       <div className='movie' key={i}>
        <h2> Movie Name: {movie.title} </h2>
        <h2> Movie Time: {movie.time} </h2>
        <ul>
           <h1>Genres</h1>
         {movie.genres.map((genre, i) => (
           <li key={i}>{genre}</li>
         ))}
         </ul>
    </div>
  ))}
    </div>
  );
};

export default Movies;
