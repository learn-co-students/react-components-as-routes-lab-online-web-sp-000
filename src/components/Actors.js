import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1> Actors Page </h1>
   { 
   	actors.map((actor, i) => (

	<div>
         <h1> {actor.name} </h1>
         <p> Movies: </p>
         <ul>
       {actor.movies.map((mov) => <li>{mov}</li>)}  
           </ul>

      </div>     
   ))} 
  
    </div>
  );
};

export default Actors;
