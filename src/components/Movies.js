import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie=>{
        console.log(movie.genres)
        return (
          <div key={movie.title}>
            <h2>Title:{movie.title}</h2>
            <h3>Time :{movie.time}</h3>
            <ul>
              Genres:
              {movie.genres.map(genre => {
                return <li>{genre}</li>;
              })}
            </ul>
            
          </div>
          
        );
      })}
    </div>
  );
};

export default Movies;
