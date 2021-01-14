import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultsCard from "./components/ResultsCard";
import NominationsCard from "./components/NominationsCard";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState("");
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [fullList, setFullList] = useState(false);

  // console.log("LIST: ", movieList);
  // console.log("nominatedMovies: ", nominatedMovies);

  return (
    <div>
      <SearchBar movieList={movieList} setMovieList={setMovieList} />
      <ResultsCard
        movieList={movieList}
        nominatedMovies={nominatedMovies}
        setNominatedMovies={setNominatedMovies}
        fullList={fullList}
        setFullList={setFullList}
      />
      <NominationsCard
        nominatedMovies={nominatedMovies}
        setNominatedMovies={setNominatedMovies}
        fullList={fullList}
        setFullList={setFullList}
      />
    </div>
  );
}

export default App;
