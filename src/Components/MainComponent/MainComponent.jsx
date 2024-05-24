import React from "react";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import Languages from "./Languages";
import GoogleIcon from "./GoogleIcon";
import "./Main.css";

const MainComponent = () => {
  return (
    <div className="main-container">
      <GoogleIcon />
      <SearchBar />

      <SearchButton />

      <Languages />
    </div>
  );
};

export default MainComponent;
