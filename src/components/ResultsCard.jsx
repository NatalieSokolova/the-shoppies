import React from "react";
import { Button } from "antd";

export default function ResultsCard({ movieList }) {
  console.log("LIST FROM RESULTS: ", movieList);
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
            <Button type="primary" htmlType="submit">
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
