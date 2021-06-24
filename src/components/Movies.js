import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        
        <h1>Movies Page</h1>
        {movies.map((movie, index) => (
          <div key={index}>
              <h1>Title:{movie.title}</h1>
              <p>Time:{movie.time}</p>
              {movie.genres.map((genre, index) => (
                <p key={index}>{genre}</p>
              ))}
              <p>Metascore:{movie.metascore}</p>
          </div>
        ))}
    </div>
  );
};

export default Movies;
