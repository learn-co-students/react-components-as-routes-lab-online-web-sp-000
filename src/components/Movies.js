import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {
          movies.map((movie, index) => (
            <div className="movie_card" key={index}>
              <h3>Title: {movie.title}</h3>
              <h5>Runtime: {movie.time}</h5>
              <ul>
                {
                  movie.genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                  ))}
              </ul>
            </div>
          ))
        }
    </div>
  );
};

export default Movies;
