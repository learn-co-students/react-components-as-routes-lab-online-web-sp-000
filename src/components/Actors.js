import React from 'react';
import { actors } from '../data';

const allActors = () =>{
  let count = 0
   return actors.map((actor)=>{
     return (
       <div key={count += 1} className="actor">
          <h3>{`Name: ${actor.name}`}</h3>
          <p>Movies</p>
          <ul>
            <li>{actor.movies[0]}</li>
            <li>{actor.movies[1]}</li>
            <li>{actor.movies[2]}</li>
          </ul>
       </div>
     )
      
   })
}

const Actors = () => {
  return (
    <div>
      <h1> Actors Page</h1>
       {allActors()}
      
    </div>
  );
};

export default Actors;
