import React from "react";
import logo from "../assets/the_shoppies_logo-01.png";
import "./Home.css";

export default function Home() {
  return (
    <article className="homePage">
      <img className="logo" alt="shoppiesLogo" src={logo} />
      <a href="#searchBar">
        <h1 className="linkToSearch">Nominate Movies</h1>
      </a>
    </article>
  );
}
