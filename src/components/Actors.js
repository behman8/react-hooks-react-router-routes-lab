import React from "react";
import { actors } from "../data";
import { v4 as uuid } from "uuid"

const eachActor = actors.map((actor) => 
  <div key={uuid()}>{actor.name}
    <ul>
      {actor.movies.map((movie) => 
      <li key={uuid()}>{movie}</li>)}
    </ul>
  </div>
)

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {eachActor}
  </div>;
}

export default Actors;
