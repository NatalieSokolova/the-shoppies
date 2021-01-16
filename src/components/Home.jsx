import React from "react";
import logo from "../assets/the_shoppies_logo-01.png";
import "./Home.css";

export default function Home() {
  return (
    <article className="homePage">
      <img className="logo" alt="shoppiesLogo" src={logo} />
      <footer>
        <h1>Movie awards for entrepreneurs</h1>
        <button className="linkBtn">
          <a href="#searchBar" className="linkToSearch">
            Nominate Movies
          </a>
        </button>
      </footer>
    </article>
  );
}
