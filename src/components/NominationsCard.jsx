import React from "react";
import { Button } from "antd";
import poster from "../assets/the_shoppies_noposter-01.png";
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
    <div className="nominations">
      <h2>My Nominations:</h2>
      <br />
      {nominatedMovies.length > 0 ? (
        nominatedMovies.map((nominatedMovie) => (
          <div key={nominatedMovie.imdbID} className="nominationCard">
            <div>
              <a
                href={`https://www.imdb.com/title/${nominatedMovie.imdbID}/`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="nominatedMoviePoster"
                  src={
                    nominatedMovie.Poster !== "N/A"
                      ? nominatedMovie.Poster
                      : poster
                  }
                  alt={nominatedMovie.Title}
                />
              </a>
            </div>
            <div className="nominatedInfo">
              <div className="movieInfo">
                {nominatedMovie.Title} | {nominatedMovie.Year}
              </div>
            </div>
            <Button
              className="nominateBtn"
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
