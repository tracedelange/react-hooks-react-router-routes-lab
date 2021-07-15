import React from "react";
import { directors } from "../data";

function Directors() {

  console.log(directors)

  const directorArray = directors.map((person) => {
    
    const personMovieArray = person.movies.map((movie) => {

      return (

        <li>{movie}</li>

      )

    })
    
    return (

    <div>
      {person.name}
      <ul>{personMovieArray}</ul>
    </div>
  )}
  )



  return (

    <>
      <h1>Directors Page</h1>
      {directorArray}
    </>
  );
}

export default Directors;
