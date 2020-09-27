import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, idx) => { 
        return <div key={idx}>
          <p><strong>Title:</strong> {movie.title}</p>
          <span>Duration: {movie.time}</span>
          {movie.genres.map((genre, idx) => {
            return <ul key={idx}>
              <li>{genre}</li>
            </ul>
          })}
        </div>})
      }
    </div>
  );
};

export default Movies;

// {title: "Doctor Strange", time: 115, genres: Array(3), metascore: 74}