import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
      <h1>Movies Page</h1>
      {movies.map((a) => (<div className='movie'>{a.title}{a.time}<ul>{a.genres.map((name)=>(<li>{name}</li>))}</ul></div>))}
    </div>
  );
};

export default Movies;
