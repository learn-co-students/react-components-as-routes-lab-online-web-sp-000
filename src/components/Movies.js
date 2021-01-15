import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <React.fragment>
        <h1>Movies Page</h1>
        {movies.map(m=>(
          <div>
            <h2>{m.title}</h2>
            <p>{m.time}</p>
            <ul>{m.genres.map(g=>(
              <li>
                {g}
              </li>
            ))}</ul>
          
          </div>

        ))}

    </React.fragment>
  );
};

export default Movies;
