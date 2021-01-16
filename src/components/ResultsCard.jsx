import React from "react";
import { Button } from "antd";
import poster from "../assets/mymind-KG_BfyEgXhk-unsplash.jpg";
import "./ResultsCard.css";

export default function ResultsCard({
  movieList,
  nominatedMovies,
  setNominatedMovies,
  disabledBtns,
  setDisabledBtns,
}) {
  const nominateMovie = (movie) => {
    // console.log("NOMINATE ID: ", movie.imdbID);

    const result = {
      movies: setNominatedMovies((nominatedMovies) =>
        nominatedMovies.concat(movie)
      ),
      buttons: setDisabledBtns((disabledBtns) =>
        disabledBtns.concat(movie.imdbID)
      ),
    };

    return result;
  };

  return (
    <div className="results">
      {movieList ? (
        movieList.map((movieCard) => (
          <div key={movieCard.imdbID} className="resultCard">
            <a
              href={`https://www.imdb.com/title/${movieCard.imdbID}/`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="resultMoviePoster"
                alt={movieCard.Title}
                src={movieCard.Poster !== "N/A" ? movieCard.Poster : poster}
              />
            </a>
            <div className="movieInfo">
              {movieCard.Title} | {movieCard.Year}
            </div>
            <Button
              className="nominateBtn"
              onClick={() => nominateMovie(movieCard)}
              type="primary"
              htmlType="submit"
              disabled={
                nominatedMovies.length === 5
                  ? true
                  : disabledBtns.includes(movieCard.imdbID)
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
