import React from 'react';
import { actors } from '../data';



const Actors = () => {

  const renderActors = () => {
    return (
        <React.Fragment>
          {actors.map(actor => {
            return(
            <div>
              Name: {actor.name}
              Movies: <ul>{actor.movies.map(movie => {
                return <li>{movie}</li>
              })}</ul>
            </div>
            )
          })
          }
        </React.Fragment>
    )

}
    return (
      <div>
        <h1>Actors Page</h1>
        {renderActors()}
      </div>
    );
};

export default Actors;
