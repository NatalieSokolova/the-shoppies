import React from "react";
import { Button } from "antd";

export default function ResultsCard({
  movieList,
  nominatedMovies,
  setNominatedMovies,
}) {
  console.log("nominatedMovies: ", nominatedMovies);
  return (
    <div>
      {movieList ? (
        movieList.map((movieCard) => (
          <div key={movieCard.imdbID}>
            <div>
              <div>{movieCard.Title}</div>
              <div>{movieCard.Year}</div>
              <img src={movieCard.Poster} alt={movieCard.Title} />
            </div>
            <Button
              onClick={() =>
                setNominatedMovies((nominatedMovies) =>
                  nominatedMovies.concat(movieCard)
                )
              }
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
