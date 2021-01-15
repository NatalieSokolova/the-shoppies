import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ResultsCard from "./components/ResultsCard";
import NominationsCard from "./components/NominationsCard";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState("");
  const [disabledBtns, setDisabledBtns] = useState([]);
  const [nominatedMovies, setNominatedMovies] = useState([]);

  useEffect(() => {
    const nominatedMovies = JSON.parse(localStorage.getItem("nominatedMovies"));
    if (nominatedMovies) {
      setNominatedMovies(nominatedMovies);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("nominatedMovies", JSON.stringify(nominatedMovies));
  }, [nominatedMovies]);

  console.log("disabledBtns: ", disabledBtns);
  console.log("nominatedMovies: ", nominatedMovies);

  return (
    <div>
      <Home />
      <div id="movieSection">
        <SearchBar movieList={movieList} setMovieList={setMovieList} />
        <div id="resultSection">
          <ResultsCard
            movieList={movieList}
            nominatedMovies={nominatedMovies}
            setNominatedMovies={setNominatedMovies}
            disabledBtns={disabledBtns}
            setDisabledBtns={setDisabledBtns}
          />
          <NominationsCard
            nominatedMovies={nominatedMovies}
            setNominatedMovies={setNominatedMovies}
            disabledBtns={disabledBtns}
            setDisabledBtns={setDisabledBtns}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
