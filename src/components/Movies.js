import React from 'react';
import { movies } from '../data';

const Movie = ({ title, time, genres }) => (
  <div className="movie" key={title}>
    <h1>Name: {title}</h1>
    <p>Time: {time}</p>
    <p>Genres:</p>
    <ul>
      {genres.map(g => <li>{g}</li>)}
    </ul>
  </div>
);

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(Movie)}
    </div>
  );
};

export default Movies;
