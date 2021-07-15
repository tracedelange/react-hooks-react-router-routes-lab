import React from "react";
import { movies } from "../data";

function Movies() {

  const movieArray = movies.map((movie) => {

    const genreArray = movie.genres.map(genre => <li>{genre}</li>)

    return (

      <div>
        <h2>Movie Title: {movie.title}</h2>
        <h3>Movie Runtime: {movie.time}</h3>
        <ul>
          {genreArray}
        </ul>
      </div>

  )})

  return (
    <>

      <h1>Movies Page</h1>

      {movieArray}

    </>
  );
}

export default Movies;
