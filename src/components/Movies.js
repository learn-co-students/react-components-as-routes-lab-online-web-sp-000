import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}    
    </div>
  );
};


function renderGenres(genres){
  return genres.map(genre => <li>{genre}</li>);
}

function renderMovies(){
  return movies.map(movie => 
  <div>
    Title: {movie.title} ,
    Running Time: {movie.time} ,
    Metascore: {movie.metascore}
    <ul>{renderGenres(movie.genres)}</ul>
  </div>)
}


export default Movies;
