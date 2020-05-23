import React from 'react';
import { movies } from '../data';


const Movie = ({title, time, genres}) => {
  const genreLis = genres.map(g => <li>{g}</li>)

  return (
    <div>
      <h2>Name: {title}</h2>
      Time: {time}<br />
      <br />
      Genres:
      <ul>
        {genreLis}
      </ul>
    </div>
  )
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(Movie)}
    </div>
  );
};

export default Movies;
