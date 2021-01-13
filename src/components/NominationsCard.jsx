import React from "react";
import { Button } from "antd";

export default function NominationsCard({
  movieList,
  nominatedMovies,
  setNominatedMovies,
}) {
  console.log("LIST FROM RESULTS: ", movieList);
  console.log("nominatedMovies: ", nominatedMovies);

  return (
    <div>
      {nominatedMovies.length > 0 ? (
        nominatedMovies.map((nominatedMovie) => (
          <div key={nominatedMovie.imdbID}>
            <div>
              <div>{nominatedMovie.Title}</div>
              <div>{nominatedMovie.Year}</div>
              <img src={nominatedMovie.Poster} alt={nominatedMovie.Title} />
            </div>
            <Button type="primary" htmlType="submit">
              remove
            </Button>
          </div>
        ))
      ) : (
        <div>Nominated movies go here</div>
      )}
    </div>
  );
}
