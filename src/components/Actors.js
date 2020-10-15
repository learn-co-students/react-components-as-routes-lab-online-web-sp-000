import React from "react";
import { actors } from "../data";

const renderActors = (actors) => {
  return actors.map((actor, index) => {
    return (
      <div key={index}>
        <h2>{actor.name}</h2>
        <h3>Movies:</h3>
        <ul>
          {actor.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });
};

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors(actors)}
    </div>
  );
};

export default Actors;
