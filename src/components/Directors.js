import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
     <h1> Directors Page </h1>
   {directors.map((dir, i) => (

	<div>
       <h1>   {dir.name} </h1>
       
         <p> Movies: </p>
         <ul>
       {dir.movies.map((mov) => <li>{mov}</li>)}  
           </ul>

      </div>     
   ))} 
  
    </div>
  );
};


export default Directors
