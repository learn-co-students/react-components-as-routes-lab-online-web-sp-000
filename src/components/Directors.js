import React from 'react';
import { directors } from '../data';

class Directors extends React.Component {
  constructor() {
    super()
  }

  createDirectors = () => {
    let directorDivs = []
    for(let i = 0; i < directors.length; i++) {
      directorDivs.push(
        <div>
          <h3>{directors[i].name}</h3>
          <p>Movies:</p>
          <ul>
            {directors[i].movies.map(movie => <li>{movie}</li>)}
          </ul>
        </div>
      );
    }
    return directorDivs;
  }

  render() {
    return (
      <div>
        <h1>Directors Page</h1>
        {this.createDirectors()}
      </div>
    );
  }
}

export default Directors
