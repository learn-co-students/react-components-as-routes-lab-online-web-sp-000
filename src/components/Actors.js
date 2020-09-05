import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(element => <div className="actor">{element.name}
        {element.movies.map(m => <ul>{m}</ul> )}
                            </div>)};
    </div>
  )
}
export default Actors;
