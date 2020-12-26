import React from 'react';
import { directors } from '../data';

// The <div> should contain the director's name and a <ul> with a list of their movies.
const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((d)=> (
        <div key={d.name}>
          <ul>{d.name}
            <li>{d.movies}</li>
          </ul>
        </div>
      )
      )}
    </div>
  );
}

export default Directors
