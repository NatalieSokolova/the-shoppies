import React from "react";
import { Button } from "antd";
import poster from "../assets/mymind-KG_BfyEgXhk-unsplash.jpg";

export default function ResultsCard({
  movieList,
  nominatedMovies,
  setNominatedMovies,
}) {
  // console.log("nominatedMovies: ", nominatedMovies);

  const nominateMovie = (movie) => {
    setNominatedMovies((nominatedMovies) => nominatedMovies.concat(movie));
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
