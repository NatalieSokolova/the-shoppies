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
      <SearchBar movieList={movieList} setMovieList={setMovieList} />
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
  );
}

export default App;
