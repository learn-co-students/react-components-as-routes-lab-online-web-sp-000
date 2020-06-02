import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const eachMovie = movies => {
    return (
      movies.map(movie => {
        return (
          <div key={movie.id} className="movies">{movie.title}
            <ul>
              <li>{movie.genres.map(genre => {
                return(
                <li>{genre}</li>
                )
              })}</li>
              <li>time: {movie.time}</li>
              <li>metascore: {movie.metascore}</li>
            </ul>
            
          </div>
        )
      })
    )
  }
  return (
    <div>
        <h1>Movies Page</h1>
        {eachMovie(movies)}
    </div>
  );
};

export default Movies;
