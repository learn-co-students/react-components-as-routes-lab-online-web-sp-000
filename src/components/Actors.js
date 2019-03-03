import React from 'react';
import { actors } from '../data';

class Actors extends React.Component {
  constructor() {
    super()
  }

  createActors = () => {
    let actorDivs = []
    for(let i = 0; i < actors.length; i++) {
      actorDivs.push(
        <div>
          <h3>{actors[i].name}</h3>
          <p>Movies:</p>
          <ul>
            {actors[i].movies.map(movie => <li>{movie}</li>)}
          </ul>
        </div>
      );
    }
    return actorDivs;
  }

  render() {
    return (
      <div>
        <h1>Actors Page</h1>
          {this.createActors()}
        </div>
    );
  }
};

export default Actors;
