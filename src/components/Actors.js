import React from 'react';
import { actors } from '../data';

export default class Actors extends React.Component {
  render() {
    return (
      <div>
        <h1>Actors Page</h1>
        {actors.map(actor => (
          <div>
            <h2>{actor.name}</h2>
            <strong>Movies:</strong>
              <ul>
                {actor.movies.map(movie => (
                  <li>{movie}</li>
                ))}
              </ul>
          </div>
        ))}
      </div>
    )
  }
}
