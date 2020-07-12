import React from 'react';
import { directors } from '../data';

export default class Directors extends React.Component {

  render() {
    return (
      <div>
        <h1>Directors Page</h1>
        {directors.map(director => (
          <div>
            <h2>{director.name}</h2>
            <strong>Movies:</strong>
              <ul>
                {director.movies.map(movie => (
                  <li>{movie}</li>
                ))}
              </ul>
          </div>
        ))}
      </div>
    )
  }
}
