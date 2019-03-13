import React from "react";
import { directors } from "../data";

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, i) => (
        <div key={i}>
          <h2>Name: {director.name}</h2>
          <p>Movies:</p>
          <ul>
            {director.movies.map((movie, j) => (
              <li key={j.toString()}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Directors;
