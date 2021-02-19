import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
      <div className='movies'>
        <h1>Movies Page</h1>
        {movies.map(movie => {
          const {title, time, genres, metascore} = movie
          return (
            <div>
              <h3>{title}</h3>
              <p>{time} minutes</p>
              <ul>{genres.map(g => <li>{g}</li>)}</ul>
            </div>
          )
        })}
      </div>
  );
};

export default Movies;
