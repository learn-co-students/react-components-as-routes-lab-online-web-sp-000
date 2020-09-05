import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
    {movies.map(element => <div className="movie">{element.title}, {element.time}, {element.metascore}
      {element.genres.map(g => <ul>{g}</ul> )}
                          </div>)};
    </div>
  );
};

export default Movies;
