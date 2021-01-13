import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultsCard from "./components/ResultsCard";
import NominationsCard from "./components/NominationsCard";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState("");
  const [nominatedMovie, setNominatedMovie] = useState(false);

  console.log("LIST: ", movieList);
  console.log("nominatedMovie: ", nominatedMovie);

  return (
    <div>
      <SearchBar movieList={movieList} setMovieList={setMovieList} />
      <ResultsCard
        movieList={movieList}
        nominatedMovie={nominatedMovie}
        setNominatedMovie={setNominatedMovie}
      />
      <NominationsCard
        movieList={movieList}
        nominatedMovie={nominatedMovie}
        setNominatedMovie={setNominatedMovie}
      />
    </div>
  );
}

export default App;
