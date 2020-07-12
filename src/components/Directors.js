import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      { directors.map(director => <div className='director'>{director.name} - Movies: {director.movies.join(', ')}.</div>) }
    </div>
  );
}

export default Directors
