import React from "react";
import { movies } from "../data";
import { v4 as uuid } from "uuid"

const eachMovie = movies.map((movie) => <div key={uuid()}>
    {movie.title}, {movie.time}
    <ul>
      {movie.genres.map((genre) => <li key={uuid()}>{genre}</li>)}
    </ul>
  </div>)

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {eachMovie}
  </div>;
}

export default Movies;
