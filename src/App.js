import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultsCard from "./components/ResultsCard";
import NominationsCard from "./components/NominationsCard";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState("");
  const [nominatedMovies, setNominatedMovies] = useState([]);

  console.log("LIST: ", movieList);
  console.log("nominatedMovies: ", nominatedMovies);

  return (
    <div>
      <SearchBar movieList={movieList} setMovieList={setMovieList} />
      <ResultsCard
        movieList={movieList}
        nominatedMovies={nominatedMovies}
        setNominatedMovies={setNominatedMovies}
      />
      <NominationsCard
        nominatedMovies={nominatedMovies}
        setNominatedMovies={setNominatedMovies}
      />
    </div>
  );
}

export default App;
