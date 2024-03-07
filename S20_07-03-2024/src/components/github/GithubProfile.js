import React from "react";
import "./GithubProfile.css";

function GithubProfile() {
  return (
    <div className="profileCard">
      <img
        src="https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg"
        width={"100%"}
        height={200}
      />
      <h3>Raj Verma</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <button>Profile</button>
    </div>
  );
}

export default GithubProfile;
