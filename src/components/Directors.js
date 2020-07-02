import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      <div className="director">
        <h2>{directors[0].name}</h2>
        <ul>
          <li>{directors[0].movies[0]}</li>
          <li>{directors[0].movies[1]}</li>
          <li>{directors[0].movies[2]}</li>
        </ul>
      </div>
      <div className="director">
        <h2>{directors[1].name}</h2>
        <ul>
          <li>{directors[1].movies[0]}</li>
          <li>{directors[1].movies[1]}</li>
          <li>{directors[1].movies[2]}</li>
        </ul>
      </div>
      <div className="director">
        <h2>{directors[2].name}</h2>
        <ul>
          <li>{directors[2].movies[0]}</li>
          <li>{directors[2].movies[1]}</li>
          <li>{directors[2].movies[2]}</li>
        </ul>
      </div>
    </div>
  );
}

export default Directors
