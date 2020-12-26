import React from 'react';
import { movies } from '../data';

// The <div> should contain the movie's title, time
// and a <ul> with a list of its genres.
const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
          {movies.map((m)=> (
            <div key={m.title}>
              <ul>{m.title}
                <li>{m.time}</li>
                <li>{m.genres}</li>
                <li>{m.metascore}</li>
              </ul>
            </div>
          )
        )}
    </div>
  );
};

export default Movies;
