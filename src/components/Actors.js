import React from 'react';
import { actors, movies } from '../data';

class Actors extends React.Component{

  getActorInfo(actors) {
    return actors.map((actor, index) => {
      return (
        <div key={index} className="actor">
          <h3>Name: {actor.name}</h3>
          <p>Movies: </p>
          <ul>
            {this.renderMovies(actor.movies)}
          </ul>
        </div>
      );
    });
  };

  renderMovies(movies) {
    return movies.map((movie, index) => {
      return (
        <li key={index}>{movie}</li>
      );
    });
  };

  render(){
  return (
    <div>
      <h1>Actors Page</h1>
      {this.getActorInfo(actors)}
    </div>
  );
};
}

export default Actors;
