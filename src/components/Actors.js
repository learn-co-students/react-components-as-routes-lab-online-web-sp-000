import React from 'react';
import { actors } from '../data';
import { render } from 'enzyme';

const Actors = () => {
  const eachActor = actors => {
    return (

      actors.map(actor => {
        return (
  
          <div className="actor" key={actor.id} >
            <p>{actor.name}</p>
            <ul>
              {actor.movies.map(movie => {
              return (
                <li>{movie}</li>
              )
              })}
            </ul>
          </div>
        )
      })
    )
  }
  

    return (
      <div>
        <h1>Actors Page</h1>
        {eachActor(actors)}
      </div>
    );
  
};

export default Actors;
