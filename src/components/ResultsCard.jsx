import React from "react";
import { Button } from "antd";

export default function ResultsCard({
  movieList,
  nominatedMovies,
  setNominatedMovies,
}) {
  console.log("nominatedMovies: ", nominatedMovies);

  const nominateMovie = (movie) => {
    setNominatedMovies((nominatedMovies) => nominatedMovies.concat(movie));
  };

  // europeana-qi9jveT9X6A-unsplash-min.jpg
  // src={require("../assets/top-min.jpg")}

  return (
    <div>
      {movieList ? (
        movieList.map((movieCard) => (
          <div key={movieCard.imdbID}>
            <div>
              <div>{movieCard.Title}</div>
              <div>{movieCard.Year}</div>
              <img
                src={require("../assets/europeana-qi9jveT9X6A-unsplash-min.jpg")}
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
