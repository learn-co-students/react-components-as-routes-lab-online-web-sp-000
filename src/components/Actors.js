import React from 'react';
import { actors } from '../data';

const Actors = () => {
    return (
    <div>
        <h1>Actors Page</h1>
        <hr></hr>
        {actors.map((actor, index) => (     // why ()'s and not {}'s ???
            <div key={index} className="actor">
                <h3>{actor.name}</h3>

                <p>Movies:</p>
                <ul>
                {actor.movies.map((movie, index) => (   // why ()'s and not {}'s ???
                    <li key={index}>{movie}</li>
                ))}
                </ul>

                <hr></hr>
            </div>
        ))}
    </div>
    );
};

export default Actors;

// 1st attempt:

// const Actors = () => {
//     return (
//     <div>
//         <h1>Actors Page</h1>
//
//         {actors.map((actor, index) => {  // why do I need to add ()'s instead of {}'s after the arrow function?
//             <div className="actor">
//                 <h3>{actor.name}</h3>
//                 <h3>Movies:</h3>
//                 <ul>
//                     {actor.movies.map((movie, index) => {
//                         <li key={index}>{movie}</li> })
//                     }
//                 </ul>
//             </div>
//             })
//         }
//     </div>
//     );
// };
//
// export default Actors;
