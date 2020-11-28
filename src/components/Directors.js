import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map((d) => (<div className='director'>{d.name}<ul>{d.movies.map((name)=>(<li>{name}</li>))}</ul></div>))}
    </div>
  );
}

export default Directors
