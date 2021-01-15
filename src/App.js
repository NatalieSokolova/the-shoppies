import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultsCard from "./components/ResultsCard";
import NominationsCard from "./components/NominationsCard";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState("");
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [disabledBtns, setDisabledBtns] = useState([]);

  console.log("disabledBtns: ", disabledBtns);
  console.log("nominatedMovies: ", nominatedMovies);

  return (
    <div>
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
