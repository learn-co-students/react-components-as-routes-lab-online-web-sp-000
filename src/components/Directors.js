import React from 'react';
import { directors } from '../data';


const allDirectors = () =>{
  let count = 0
   return directors.map((director)=>{
     return (
        <div key={count += 1} className="director">
          <h3>{`Name: ${director.name}`}</h3>
          <p>Movies</p>
          <ul>
            <li>{director.movies[0]}</li>
            <li>{director.movies[1]}</li>
            <li>{director.movies[2]}</li>
          </ul>
        </div>
     )
      
   })
}


const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors() }
    </div>
  );
}

export default Directors
