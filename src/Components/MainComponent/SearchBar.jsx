import React from "react";
import SearchIcon from "../../assets/SearchIcon.png";
import MicIcon from "../../assets/micIcon.png";
import GoogleLens from "../../assets/GoogleLens.png";
// import "./Main.css";

const SearchBar = () => {
  return (
    <div>
      <form action="https://www.google.com/search" method="GET">
        <img src={SearchIcon} alt="" className="search-icon" />
        <input type="text" placeholder="Search Google or type a URL" />
        <img src={GoogleLens} alt="" className="google-lens" />
        <img src={MicIcon} alt="" className="mic-icon" />
      </form>
    </div>
  );
};

export default SearchBar;
