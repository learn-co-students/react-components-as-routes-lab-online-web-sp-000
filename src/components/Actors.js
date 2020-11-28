import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map((a) => (<div className='actor'>{a.name}<ul>{a.movies.map((name)=>(<li>{name}</li>))}</ul></div>))}
    </div>
  );
};

export default Actors;
