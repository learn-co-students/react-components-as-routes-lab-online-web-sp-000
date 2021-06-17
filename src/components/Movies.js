import React from 'react';
import { movies } from '../data';


const allMovies = () =>{
  let count = 0
   return movies.map((movie)=>{
     return (
        <div key={count += 1} className="movie">
          <h3>{`Name: ${movie.title}`}</h3>
          <p>{`Time: ${movie.time}`}</p>
          <p>Genres:</p>
          <ul>
        
          {movie.genres.map((genre)=>{
            return <li key={count += 1}>{genre}</li>})
          }
          
          </ul>
        </div>
     )
      
   })
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {allMovies()}
    </div>
  );
};

export default Movies;
