import React from "react";
import logo from "../assets/the_shoppies_logo-01.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="homePage">
      {/* <div className="logo">Logo banner goes here</div> */}
      <img className="logo" alt="shoppiesLogo" src={logo} />
      <div className="linkToSearch">
        <a href="#searchBar">
          <h1>Nominate Movies</h1>
        </a>
      </div>
    </div>
  );
}
