import React from "react";
import "./GithubProfile.css";

function GithubProfile({ user }) {
  return (
    <div className="profileCard">
      <img src={user.avatar_url} width={"100%"} height={200} />
      <h3>{user.login}</h3>
      <p>
        {user.bio || "Lorem ipsum dolor sit amet consectetur adipisicing elit"}
      </p>
      <button>Profile</button>
    </div>
  );
}

export default GithubProfile;
