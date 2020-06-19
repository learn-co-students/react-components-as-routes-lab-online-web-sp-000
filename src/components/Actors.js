import React from 'react';
import { actors } from '../data';
import { move } from 'superagent';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.map( actor =>{
          return(
            <div>
              {actor.name}
              <ul>
                {actor.movies.map( title => <li>{title}</li> )}
              </ul>
            </div>
          )
        })
      }
    </div>
  );
};

export default Actors;
