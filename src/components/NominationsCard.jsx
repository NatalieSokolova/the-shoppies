import React from "react";
import { Button } from "antd";
import poster from "../assets/mymind-KG_BfyEgXhk-unsplash.jpg";

export default function NominationsCard({
  nominatedMovies,
  setNominatedMovies,
  fullList,
  setFullList,
}) {
  // console.log("LIST FROM RESULTS: ", movieList);
  // console.log("nominatedMovies: ", nominatedMovies);

  console.log("fullList: ", fullList);

  const removeNomination = (id) => {
    if (nominatedMovies.length === 5) {
      console.log("HIDE BANNER AND ENABLE NOMINATE BTNS");
    }
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
              <img
                src={
                  nominatedMovie.Poster !== "N/A"
                    ? nominatedMovie.Poster
                    : poster
                }
                alt={nominatedMovie.Title}
              />
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
