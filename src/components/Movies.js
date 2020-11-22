import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Pages</h1>
  {movies.map(mov => {
    return <div>
              <p>title: {mov.title}</p>
              <p>time: {mov.time}</p>
              <ul>
                {mov.genres.map( g => {
                    return <li>{g}</li>
                    })
                  }
              </ul>
      
      </div>})
  }


    </div>
  );
};

export default Movies;
