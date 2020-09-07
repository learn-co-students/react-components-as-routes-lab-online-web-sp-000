import React from 'react';
import { actors } from '../data';

const Actors = () => {
  function actor() {
    return actors.map(a =>
        (<div className="actor">
          <p>{a.name}</p>
          <ul>
            {a.movies.map(m => 
              <li>{m}</li>
            )}
          </ul>
        </div>)
    )
  }
  return (
    <div>
          <h1>Actors Page</h1>
          <React.Fragment>
          {actor()}
          </React.Fragment>
    </div>
  );
};

export default Actors;
