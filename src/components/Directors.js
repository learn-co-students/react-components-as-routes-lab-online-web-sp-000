import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      
        {directors.map(({name, movies}) => (
          <div>
            {name}
            <ul>{movies.map(m => <li>{m}</li>)}</ul>
          </div>
          
          
        ))}
    </div>
  );
}

export default Directors
