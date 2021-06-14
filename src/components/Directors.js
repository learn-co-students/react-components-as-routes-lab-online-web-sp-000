import React from 'react';
import { directors } from '../data';

const Directors = () => {
  // debugger
  return (
    <div className="directors">
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>{director.name}
              <ul>
                {director.movies.map(favorite => <li>{favorite}</li>)}
              </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
