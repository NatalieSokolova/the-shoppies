import React, { useState } from "react";
import { Button } from "antd";
import poster from "../assets/mymind-KG_BfyEgXhk-unsplash.jpg";

export default function ResultsCard({
  movieList,
  nominatedMovies,
  setNominatedMovies,
  fullList,
  setFullList,
}) {
  // console.log("nominatedMovies: ", nominatedMovies);

  const nominateMovie = (movie) => {
    // console.log("nominatedMovies length:", nominatedMovies.length);
    setNominatedMovies((nominatedMovies) => nominatedMovies.concat(movie));
    isListFull();
  };

  const isListFull = () => {
    return nominatedMovies.length === 4 ? setFullList(true) : fullList;
  };

  return (
    <div>
      {console.log("fullList: ", fullList)}
      {movieList ? (
        movieList.map((movieCard) => (
          <div key={movieCard.imdbID}>
            <div>
              <div>{movieCard.Title}</div>
              <div>{movieCard.Year}</div>
              <img
                src={movieCard.Poster !== "N/A" ? movieCard.Poster : poster}
                alt={movieCard.Title}
              />
            </div>
            <Button
              onClick={() => nominateMovie(movieCard)}
              type="primary"
              htmlType="submit"
              disabled={fullList}
            >
              nominate
            </Button>
          </div>
        ))
      ) : (
        <div>Nominate your favourite movies!</div>
      )}
    </div>
  );
}
