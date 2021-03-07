import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
            return (
            <div key={movie.title}>
               <h3>{movie.title}</h3>
               <time>Time: {movie.time}</time>
               <h4>Genres:</h4>
               <ul className="genres">
                  {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
               </ul>
            </div>)
         })}
    </div>
  );
};

// const renderMovies = () => {
//    return movies.map(movie => {
//       return (
//       <div key={movie.title}>
//          <h3>{movie.title}</h3>
//       </div>)
//    })
// }

export default Movies;
