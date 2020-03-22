import React from 'react';
import { directors } from '../data';

const Directors = () => {

  let d = directors.map( (director) => {
    return (
      <div>
        <p>{director.name}</p>
        {director.movies.map( (movie) => <p>{movie}</p>)}
      </div> 
    )
  })
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
        {d}
    </div>
  );
}

export default Directors
