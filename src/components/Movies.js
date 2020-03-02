import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>
        Movies Page
      </h1>
      {movies.map(e => <div>{e.title}, {e.time}<ul>{e.genres.map(e2 => <li>{e2}</li>)}</ul></div>)}
    </div>
  );
};

export default Movies;
