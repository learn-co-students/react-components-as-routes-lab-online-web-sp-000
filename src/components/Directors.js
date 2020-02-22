import React from 'react';
import { directors } from '../data';


function renderDirector(d){
  return (
    <div>
      <h2>{`name: ${d.name}`}</h2>
      <ul>
        {d.movies.map(m=><li>{m.title}</li>)}
      </ul>
    </div>
  )
}


const Directors = () => {

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d=>renderDirector(d))}
    </div>
  );
}

export default Directors
