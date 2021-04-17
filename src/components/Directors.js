import React from 'react';
import { directors } from '../data';

const Directors = () => {
  console.log(directors)
  return (
    <div>
        <h1>Directors Page</h1>
        {directors.map(director => {
          return (
            <div>
              {director.name}
              {director.movies.map(mov => {
                return (
                  <li>{mov}</li>
                )
              })}
            </div>
          )
       })}
    </div>
  );
}

export default Directors
