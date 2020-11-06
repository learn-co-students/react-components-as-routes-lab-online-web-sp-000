import React from 'react';
import { movies } from '../data';

const Movie = ({
  title,
  time,
  genres
}) => {
  return (
    <div>
      <h2>Name: {title}</h2>
      <p>Time: {time}</p>
      <p>Genres: </p>
      <ul>
        {genres.map((genre, index) => (
                      <li key={index}>{genre}</li>
        ))} 
      </ul>
    </div>
  );
};

const Movies = () => {
  return (
    <div>
        {<h1>Movies Page</h1>}
        {movies.map(Movie)}
    </div>
  );
};

export default Movies;