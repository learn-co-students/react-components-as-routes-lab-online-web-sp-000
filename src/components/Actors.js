import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
     {actors.map(act => {
       return <div>
         <p>{act.name}</p>
         <ul>
           {act.movies.map(m => {
             return <li>{m}</li>
           })}
         </ul>
       </div>
     })}
    </div>
  );
};

export default Actors;
