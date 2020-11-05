import React from "react";
import { directors } from "../data";

const renderDirectors = (directors) => {
  return directors.map((director, index) => {
    return (
      <div key={index}>
        <h2>{director.name}</h2>
        <h3>Movies:</h3>
        <ul>
          {director.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>;
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
