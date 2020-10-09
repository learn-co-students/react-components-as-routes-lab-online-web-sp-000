import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {/* make a new <div> for each movie. The <div> should contain the movie's title, time and a <ul> with a list of its genres */}
      {movies.map((movie, index) => (
          <div key={index}>
              <h3>Name: {movie.title}</h3>
              <p>Time: {movie.time}</p>
              <p>Genres:</p>
              <ul>
                  {movie.genres.map((genre, index) => (
                      <li key={index}>{genre}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
  );
};

export default Movies;
