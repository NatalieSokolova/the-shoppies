import React from "react";
import { Button } from "antd";
import poster from "../assets/mymind-KG_BfyEgXhk-unsplash.jpg";
import Banner from "./Banner";
import "./NominationsCard.css";

export default function NominationsCard({
  nominatedMovies,
  setNominatedMovies,
  disabledBtns,
  setDisabledBtns,
}) {
  const removeNomination = (movie) => {
    console.log("REMOVE ID: ", movie.imdbID);
    const newMovieList = nominatedMovies.filter(
      (removedMovie) => removedMovie.imdbID !== movie.imdbID
    );
    const newBtnList = disabledBtns.filter(
      (movieId) => movieId !== movie.imdbID
    );
    const result = {
      movies: setNominatedMovies(newMovieList),
      buttons: setDisabledBtns(newBtnList),
    };

    return result;
  };

  return (
    <div>
      <div>My Nominations:</div>
      {nominatedMovies.length > 0 ? (
        nominatedMovies.map((nominatedMovie) => (
          <div key={nominatedMovie.imdbID}>
            <div>
              <div>{nominatedMovie.Title}</div>
              <div>{nominatedMovie.Year}</div>
              <a
                href={`https://www.imdb.com/title/${nominatedMovie.imdbID}/`}
                target="_blank"
              >
                <img
                  src={
                    nominatedMovie.Poster !== "N/A"
                      ? nominatedMovie.Poster
                      : poster
                  }
                  alt={nominatedMovie.Title}
                />
              </a>
            </div>
            <Button
              onClick={() => removeNomination(nominatedMovie)}
              type="primary"
              htmlType="submit"
            >
              remove
            </Button>
          </div>
        ))
      ) : (
        <div>Nominated movies go here</div>
      )}
      {nominatedMovies.length === 5 ? <Banner /> : null}
    </div>
  );
}
