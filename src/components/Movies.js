import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>

          `${movies.map(movie =>
            <div>
              `${movie.title}`
              `${movie.time}`
              <ul>`${movie.genres.map(genre =>
                  <li>
                    `${genre}`
                  </li>)}`
              </ul>
            </div>
          )}`



    </div>
  );
};

// renderGenres = () => {
//   movies.genres.map(genre => <li>`${genre}`</li>)
// }


export default Movies;


// <h2>`${movie.title}`</h2>
// <h3>`${movie.time}`</h3>
// <ul>`${this.renderGenres()}`</ul>


//<div>
  //movies.map(movie => <div></div>)

//</div>
