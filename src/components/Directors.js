import React from "react";
import { directors } from "../data";

const renderDirectors = (directors) => {
  return directors.map((director) => {
    return (
      <div key={director.name}>
        <h2>{director.name}</h2>
        <h3>Movies:</h3>
        <ul>
          {director.movies.map((movie) => {
            return <li key={movie}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });
};

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors(directors)}
    </div>
  );
};

export default Directors;
