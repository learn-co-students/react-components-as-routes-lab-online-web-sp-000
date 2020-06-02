import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const eachDirector = directors => {
    return (
      directors.map(director => {
        return (
          <div className="director" key={director.id}>
            <p>{director.name}</p>
            <ul>
              {director.movies.map(movie => {
                return(<li>{movie}</li>)
              })}
            </ul>
          </div>
        )
      })
    )
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {eachDirector(directors)}
    </div>
  );
}

export default Directors
