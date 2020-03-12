import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map( d => {
          return(
            <div>
              <h3>Name: {d.name}</h3>
              <h4>Director Name: {d.movies.map(movie => <ul>{ movie }</ul>)}</h4>
            </div>           
          )
        }
        )}
    </div>
  );
}

export default Directors
// {directors.movies.map( movie => (
//   <ul>
//     <h4>Director's Movie: { movie.movie }</h4>
//   </ul>
// )
// )}