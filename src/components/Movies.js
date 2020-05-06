import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) =>
        <div className="movie" key={index}>
          <h2>{movie.title}</h2>
            <p>Runtime: {movie.time}</p>
            <p>Genres:</p>
            <ul>
              {movie.genres.map((genre, index) =>
            <li key={index}>{genre}</li>
            )}
            </ul>
            <p>Metascore: {movie.metascore || 'N/A'}</p>
        </div>
        )}
    </div>
  );
};

export default Movies;
