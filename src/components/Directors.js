import React from "react";
import { directors } from "../data";
import { v4 as uuid } from "uuid"

const eachDirector = directors.map((director) => 
  <div key={uuid()}>{director.name}
    <ul>{director.movies.map((movie) => 
      <li key={uuid()}>{movie}</li>)}
    </ul>
  </div>)

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {eachDirector}
  </div>;
}

export default Directors;
