import React from 'react';
import { movies } from '../data';

class Movies extends React.Component {

  createMovies = () => {
    let movieDivs = [];
    for(let i = 0; i < movies.length; i++) {
      movieDivs.push(
        <div>
          <h3>{movies[i].title}</h3>
          <p>Time: {movies[i].time}</p>
          <ul>
            {movies[i].genres.map(genre => <li>{genre}</li>)}
          </ul>
        </div>
      );
    }
    return movieDivs;
  }

  render() {
    return (
      <div>
        <h1>Movies Page</h1>
        <ul>
          {this.createMovies()}
        </ul>
      </div>
    );
  }

};

export default Movies;
