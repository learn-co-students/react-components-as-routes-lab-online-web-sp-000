import React from 'react';
import { directors } from '../data';


let grabDirectors = directors.map((director) => {
  return (
    <div>
      <h1>{director.name}</h1>
      <ul>{director.movies.map((movie) => <li>{movie}</li>)}</ul>
    </div>
  )
})


const Directors = () => {
  return (
    <React.Fragment>
      <h1>Directors Page</h1>
      {grabDirectors}
    </React.Fragment>
  );
}

export default Directors

