import React, { useLayoutEffect } from 'react';
import { movies } from '../data';

const Movies = () => {

  console.log(movies);

  let array = [];

  if (movies && movies.map) {
    array = movies.map(movie =>           
      <div>
      {movie.title}
      {movie.time}
      {movie.genres.map(genre => {
        <ul>
          {genre}
        </ul>
      })}
    </div>
    )
  }

  return (
    <>
      <div>
          <h1>
            Movies Page
          </h1>
          {
            let array = [];
          
            if (movies && movies.map) {
              array = movies.map(movie =>           
                <div>
                  {movie.title}
                  {movie.time}
                  {movie.genres.map(genre => {
                    <ul>
                      {genre}
                    </ul>
                  })}
                </div>
              )
            }
          }
  
      </div>
    </>
  );
};

export default Movies;
