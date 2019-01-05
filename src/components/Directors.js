import React from "react";
import { directors } from "../data";

const Directors = () => {
  return (
    <div>
      Directors Page
      {directors.map(director => (
        <div>
          {director.name}
          <ul>
            {director.movies.map(movie => (
              <li>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Directors;

// This component should render the text Directors Page, and make a new < div >
// for each director.The < div > should contain the director's name and an <ul>
// for each of their movies.
