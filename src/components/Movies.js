import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map(({title, time, genres}) => (
          <div>
            {title} {time}
            <ul>{genres.map(g => <li>{g}</li>)}</ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
