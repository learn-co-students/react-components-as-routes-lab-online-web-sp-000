import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>
        Movies Page
      </h1>
      
      {movies.map(movie => {
        return (
          <div>
            <h2 className="movie">Title: {movie.title}</h2>
            <h2 className="movie">RunTime: {movie.time} Minutes</h2>
            <h2 className="movie">Metascore: {movie.metascore} Minutes</h2>
            <ul>
              {movie.genres.map(genre => <li>{genre}</li>)}
            </ul>
          </div> 
        )}
        )}  
    </div>
  );
};

export default Movies;
