import React, { useState } from "react";
import { Button } from "antd";
import poster from "../assets/mymind-KG_BfyEgXhk-unsplash.jpg";

export default function ResultsCard({
  movieList,
  nominatedMovies,
  setNominatedMovies,
  disabledBtn,
  setDisabledBtn,
}) {
  const nominateMovie = (movie, index) => {
    setNominatedMovies((nominatedMovies) => nominatedMovies.concat(movie));
    // isListFull();
    setDisabledBtn((disabledBtn) => disabledBtn.concat(index));
  };

  // const isListFull = () => {
  //   return nominatedMovies.length === 4 ? setDisabledBtn(true) : disabledBtn;
  // };

  return (
    <div>
      {console.log("disabledBtn: ", disabledBtn)}
      {movieList ? (
        movieList.map((movieCard, index) => (
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
              onClick={() => nominateMovie(movieCard, index)}
              type="primary"
              htmlType="submit"
              disabled={
                nominatedMovies.length === 5
                  ? true
                  : disabledBtn.includes(index)
              }
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
