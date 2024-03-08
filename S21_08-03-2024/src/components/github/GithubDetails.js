import React from "react";
import "./GithubDetails.css";

function GithubDetails(props) {
  return (
    <div className="detailsCard">
      <dl>
        <dt>
          <b>User Name</b>
        </dt>
        <dd>{props.user.name || props.user.login}</dd>
        <dt>
          <b>Email</b>
        </dt>
        <dd>{props.user.email || "abc@gmail.com"}</dd>
        <dt>
          <b>Followers</b>
        </dt>
        <dd>{props.user.followers}</dd>
        <dt>
          <b>Following</b>
        </dt>
        <dd>{props.user.following}</dd>
        <dt>
          <b>User Name</b>
        </dt>
        <dd>{props.user.name || props.user.login}</dd>
        <dt>
          <b>Email</b>
        </dt>
        <dd>{props.user.email || "abc@gmail.com"}</dd>
        <dt>
          <b>Followers</b>
        </dt>
        <dd>{props.user.followers}</dd>
        <dt>
          <b>Following</b>
        </dt>
        <dd>{props.user.following}</dd>
      </dl>
    </div>
  );
}

export default GithubDetails;
