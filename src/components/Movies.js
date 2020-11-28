import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => 
        <div>
          <h3>{movie.title}</h3>
          <p>{movie.time}</p>
          <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>
        </div>)}
        {/*{code here}*/}
    </div>
  );
};

export default Movies;
