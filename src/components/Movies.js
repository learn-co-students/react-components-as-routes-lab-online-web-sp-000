import React from 'react';
import { movies } from '../data';

const Movies = () => {

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((eachMovie) =>
      (<div>
        <h2>{eachMovie.title}</h2>
        <p>{eachMovie.time} mins</p>
        <ul>{eachMovie.genres.map((genre) => (<li>{genre}</li>))}</ul>
      </div>)
    )}
  </div>
  )
}

export default Movies;



// return (
//   <div>
//     <h1>Actors Page</h1>
//     {actors.map((actor) => 
//     (<div>
//       <p>{actor.name}</p>
//       <ul>{actor.movies.map((movie) = () => { <li>{movie}</li>})} </ul>
//     </div>))}
//   </div>
// );
// };
