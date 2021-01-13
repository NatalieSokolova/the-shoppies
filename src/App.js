import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState(null);

  return (
    <div>
      <SearchBar movieList={movieList} setMovieList={setMovieList} />
    </div>
  );
}

export default App;
