import React from "react";
import "./GithubProfile.css";

function GithubProfile(props) {
  console.log();
  return (
    <div className="profileCard">
      <img src={props.user.avatar_url} width={"100%"} height={200} />
      <h3>{props.user.login}</h3>
      <p>
        {props.user.bio ||
          "Lorem ipsum dolor sit amet consectetur adipisicing elit"}
      </p>
      <button>Profile</button>
    </div>
  );
}

export default GithubProfile;
