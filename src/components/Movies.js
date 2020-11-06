import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((movie, index) => {
          return (
            <div key={index}>
              <h2>{movie.title}</h2>
              <p>{movie.time}</p>
              <ul>
                {movie.genres.map((genre, index) => {
                  return <li key={index}>{genre}</li>
                })}
              </ul>
              
            </div>
          )
        })}
        {/*{code here}*/}
    </div>
  );
};

export default Movies;
