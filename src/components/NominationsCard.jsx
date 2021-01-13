import React from "react";
import { Button } from "antd";

export default function NominationsCard({
  nominatedMovies,
  setNominatedMovies,
}) {
  // console.log("LIST FROM RESULTS: ", movieList);
  // console.log("nominatedMovies: ", nominatedMovies);

  const removeNomination = (id) => {
    const newList = nominatedMovies.filter((movie) => movie.imdbID !== id);
    setNominatedMovies(newList);
    // console.log("newList: ", newList);
    // console.log("id: ", id);
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
              <img src={nominatedMovie.Poster} alt={nominatedMovie.Title} />
            </div>
            <Button
              onClick={() => {
                removeNomination(nominatedMovie.imdbID);
              }}
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
    </div>
  );
}
