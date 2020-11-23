import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {<h1>Movies Page</h1>}
        {  
          movies.map(m => {
            return (<div>
              <h2>Title: {m.title}</h2>
              <h3>Time: {m.time}</h3>
              <ul>
                {m.genres.map(g => {
                  return(<li>
                    {g}
                  </li>)
                })}
              </ul>
            </div>)
          })
        }
    </div>
  );
};

export default Movies;
