import React from "react";
import { Button } from "antd";
import poster from "../assets/mymind-KG_BfyEgXhk-unsplash.jpg";

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
    <div>
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
              disabled={
                nominatedMovies.length === 5
                  ? true
                  : disabledBtns.includes(movieCard.imdbID)
              }
            >
              nominate
            </Button>
            <hr />
          </div>
        ))
      ) : (
        <div>Nominate your favourite movies!</div>
      )}
    </div>
  );
}
