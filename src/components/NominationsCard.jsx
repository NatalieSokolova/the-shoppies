import React from "react";
import { Button } from "antd";
import poster from "../assets/mymind-KG_BfyEgXhk-unsplash.jpg";
import Banner from "./Banner";

export default function NominationsCard({
  nominatedMovies,
  setNominatedMovies,
  disabledBtn,
  setDisabledBtn,
}) {
  const removeNomination = (id) => {
    const newList = nominatedMovies.filter((movie) => movie.imdbID !== id);
    setNominatedMovies(newList);
    setDisabledBtn(false);
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
      {disabledBtn ? <Banner /> : null}
    </div>
  );
}
