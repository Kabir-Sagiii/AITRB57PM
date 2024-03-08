import React from "react";
import "./GithubHome.css";
import GithubProfile from "./GithubProfile";
import GithubDetails from "./GithubDetails";

function GithubHome() {
  return (
    <div className="gridContainer">
      <div className="row1">
        <h2>Github Search Component </h2>
      </div>

      <div className="row2">
        <div className="row2-col1">
          <input type="text" placeholder="Github Username" size={70} />
        </div>

        <div className="row2-col2">
          <button>Search</button>
        </div>
      </div>

      <div className="row3">
        <div className="row3-col1">
          <GithubProfile />
        </div>

        <div className="row3-col2">
          <GithubDetails />
        </div>
      </div>
    </div>
  );
}

export default GithubHome;
