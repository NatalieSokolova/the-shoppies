import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultsCard from "./components/ResultsCard";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState(null);
  console.log("LIST: ", movieList);

  return (
    <div>
      <SearchBar movieList={movieList} setMovieList={setMovieList} />
      <ResultsCard movieList={movieList} setMovieList={setMovieList} />
    </div>
  );
}

export default App;
