import React from 'react';
import { movies } from '../data';

const Movies = () => {

  let m = movies.map( (movie) => {
    return (
      <div>
        <p>{movie.title} </p>
        <p>Time: {movie.time}</p>
        {movie.genres.map( (genre) => <p>{genre}</p> )}
      </div>
    )
   } )
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {m}
    </div>
  );
};

export default Movies;
