import React from "react";

export default function ResultsCard({ movieList }) {
  console.log("LIST FROM RESULTS: ", movieList);
  return (
    <div>
      {movieList.map((movieCard) => (
        <div key={movieCard.imdbID}>
          <div>
            <div>{movieCard.Title}</div>
            <div>{movieCard.Year}</div>
            <img src={movieCard.Poster} alt={movieCard.Title} />
          </div>
        </div>
      ))}
    </div>
  );
}
