import React from 'react';
import { movies } from '../data';

const Movies = () => {
    return (
    <div>
        <h1>Movies Page</h1>
        <hr></hr>

        {movies.map((movie, index) => (     // why ()'s and not {}'s ???
            <div key={index} className="movie">
                <h3>{movie.title}</h3>
                <p>duration: {movie.time} min</p>

                <ul>
                {movie.genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))}
                </ul>

                <p>rating: {movie.metascore}</p>
                <hr></hr>
            </div>
        ))}
    </div>
    )
};

export default Movies;

// if (movie.metascore) {
//     <p>rating: {movie.metascore}</p>
// } else {
//     <p>rating: n/a</p>
// }
