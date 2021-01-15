import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultsCard from "./components/ResultsCard";
import NominationsCard from "./components/NominationsCard";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState("");
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [disabledBtn, setDisabledBtn] = useState([]);

  return (
    <div>
      <SearchBar movieList={movieList} setMovieList={setMovieList} />
      <ResultsCard
        movieList={movieList}
        nominatedMovies={nominatedMovies}
        setNominatedMovies={setNominatedMovies}
        disabledBtn={disabledBtn}
        setDisabledBtn={setDisabledBtn}
      />
      <NominationsCard
        nominatedMovies={nominatedMovies}
        setNominatedMovies={setNominatedMovies}
        disabledBtn={disabledBtn}
        setDisabledBtn={setDisabledBtn}
      />
    </div>
  );
}

export default App;
