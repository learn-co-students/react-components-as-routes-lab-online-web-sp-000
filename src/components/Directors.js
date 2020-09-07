import React from 'react';
import { directors } from '../data';

const Directors = () => {
  function director() {
    return directors.map(d =>
        (<div>
          <p>{d.name}</p>
          <ul>
            {d.movies.map(m => 
              <li>{m}</li>
            )}
          </ul>
        </div>)
    )
  }
  return (
    <div>
          <h1>Directors Page</h1>
          <React.Fragment>
          {director()}
          </React.Fragment>
    </div>
  );
}

export default Directors
