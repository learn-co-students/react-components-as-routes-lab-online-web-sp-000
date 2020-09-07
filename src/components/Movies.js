import React from 'react';
import { movies } from '../data';

const Movies = () => {
  function movie() {
    return movies.map(m =>
        (<div>
          <p>{m.title}</p>
          <p>{m.time}</p>
          <ul>
            {m.genres.map(g => 
              <li>{g}</li>
            )}
          </ul>
        </div>)
    )
  }

  return (
    <div>
          <h1>Movies Page</h1>
          <React.Fragment>
          {movie()}
          </React.Fragment>
    </div>
  );
};

export default Movies;
