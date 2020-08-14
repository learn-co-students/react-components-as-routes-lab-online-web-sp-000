import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <React.Fragment>
       <h1>Actors Page</h1>
       {actors.map(a => <div key={a.name}> {a.name} {a.movies} </div>)}
   </React.Fragment>
    </div>
  );
};

export default Actors;
