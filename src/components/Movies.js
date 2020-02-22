import React from 'react';
import { movies } from '../data';

function renderMovie(m){
  return (
    <div>
       <h2>{`Name: ${m.title}`}</h2>
       <p>Time: {m.time}</p>
        <ul>{m.genres.map(g=><li>{g}</li>)}</ul>
    </div>

  )

}


const Movies = () => {
  return (
    <div>
       <h1>Movies Page</h1>
       {movies.map(m=>renderMovie(m))}
    </div>
  );
};

export default Movies;
