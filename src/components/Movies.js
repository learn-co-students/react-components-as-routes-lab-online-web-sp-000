import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div> 
      <h1>Movies Page</h1>
        <h3>{movies.map(movie => {
            return(
              <div>
                <h3>Movie Title: { movie.title }</h3>
                <h3>Time: { movie.time }</h3>
                <h4>Genre: { movie.genres.map(genre => <ul>{ genre }</ul>)}</h4>
              </div>
            )
          }
          )}
        </h3>
    </div>
  );
};

export default Movies;
