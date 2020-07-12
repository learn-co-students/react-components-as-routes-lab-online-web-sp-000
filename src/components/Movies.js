import React from 'react';
import { movies } from '../data';

export default class Movies extends React.Component {
  render() {
    return (
      <div>
        <h1>Movies Page</h1>
        {movies.map(movie => (
          <div>
            <h2>{movie.title}</h2>
            <h3>{movie.time} minutes</h3>
            <strong>Genres:</strong>
              <ul>
                {movie.genres.map(genre => (
                  <li>{genre}</li>
                ))}
              </ul>
          </div>
        ))}
      </div>
    )
  }
}
