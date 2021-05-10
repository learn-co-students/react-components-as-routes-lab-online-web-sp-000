import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {
          <h1>Movies Page</h1>
        }
        {
          movies.map(movie=>{
            return(
              <div>
                <h2>Title: {movie.title}</h2>
                <h3>Time: {movie.time}</h3>
                <h3>Genres:</h3>
                <ul>
                  {movie.genres.map(genre=> <li>{genre}</li>)}
                </ul>
              </div>
            )
          })
        }
    </div>
  );
};

export default Movies;

// This component should render the text `Movies Page` in an `<h1>`, and make a new `<div>` for
// each movie. The `<div>` should contain the movie's title, time and a `<ul>` with a list of its
// genres.