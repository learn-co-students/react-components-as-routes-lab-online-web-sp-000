import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(element => <div className="director">{element.name}
        {element.movies.map(m => <ul>{m}</ul> )}
                            </div>)};
    </div>
  );
}

export default Directors
