import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {<h1>Movies Page</h1>}
        {
          movies.map(movie => {
            return (
              <div>
                <h2>Title: {movie.title}</h2>
                <h3>Runtime: {movie.time}</h3>
                <h3>Genres: </h3>
                <ul>
                  {movie.genres.map(genre => <li>{genre}</li>)}
                </ul>
              </div>
            )
          })
        }
    </div>
  );
};

export default Movies;