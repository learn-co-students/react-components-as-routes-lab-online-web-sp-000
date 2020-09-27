import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
        <h1>Actors Page</h1>
        <hr></hr>
        {actors.map((actor, index) => (     
            <div key={index} className="actor">
                <h3>{actor.name}</h3>

                <p>Movies:</p>
                <ul>
                {actor.movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
                </ul>

                <hr></hr>
            </div>
        ))}
    </div>
  );
};

export default Actors;
