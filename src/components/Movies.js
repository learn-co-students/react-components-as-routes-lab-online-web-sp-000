import React from 'react';
import { movies } from '../data';

const Movies = () => {

  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(d => <div key={d.title}> {d.title} {d.time} {d.genres} {d.metascore}</div>)}
    </div>
  );
};

export default Movies;
