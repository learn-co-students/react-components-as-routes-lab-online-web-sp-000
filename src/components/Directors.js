import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      { directors.map((director) => <div className="director"><p>{directors.name}</p></div>) }
    </div>
  );
}

export default Directors
