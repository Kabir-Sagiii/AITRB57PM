import { useState } from "react";
import "./GithubHome.css";
import GithubProfile from "./GithubProfile";
import GithubDetails from "./GithubDetails";
import { useSelector } from "react-redux";

function GithubHome() {
  let info = useSelector(function (data) {
    return data.user;
  });

  let [username, setUserName] = useState("");
  let [userInfo, setUserInfo] = useState({
    login: "",
    id: 67724402,
    node_id: "MDQ6VXNlcjY3NzI0NDAy",
    avatar_url: "",
    gravatar_id: "",
    url: "",
    html_url: "https://github.com/Kabir-Sagiii",
    followers_url: "https://api.github.com/users/Kabir-Sagiii/followers",
    following_url:
      "https://api.github.com/users/Kabir-Sagiii/following{/other_user}",
    gists_url: "https://api.github.com/users/Kabir-Sagiii/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/Kabir-Sagiii/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/Kabir-Sagiii/subscriptions",
    organizations_url: "https://api.github.com/users/Kabir-Sagiii/orgs",
    repos_url: "https://api.github.com/users/Kabir-Sagiii/repos",
    events_url: "https://api.github.com/users/Kabir-Sagiii/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/Kabir-Sagiii/received_events",
    type: "User",
    site_admin: false,
    name: "",
    company: null,
    blog: "",
    location: "",
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 92,
    public_gists: 0,
    followers: 181,
    following: 0,
    created_at: "2020-07-02T04:01:45Z",
    updated_at: "2024-03-04T11:57:45Z",
  });

  const getUserName = (event) => {
    setUserName(event.target.value);
  };

  const getUsersData = () => {
    //https://api.github.com/users/{user}
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUserInfo(data);
      })
      .catch((error) => {
        alert("Something Went Wrong");
        console.log(error);
      });
  };

  return (
    <div className="gridContainer">
      <div className="row1">
        <h2>
          Github Search Component : Name:
          <span style={{ color: "green" }}>{info.name}</span> City:
          <span style={{ color: "red" }}>{info.city}</span>
        </h2>
      </div>

      <div className="row2">
        <div className="row2-col1">
          <input
            type="text"
            placeholder="Github Username"
            size={70}
            onChange={getUserName}
          />
        </div>

        <div className="row2-col2">
          <button onClick={getUsersData}>Search</button>
        </div>
      </div>

      <div className="row3">
        <div className="row3-col1">
          <GithubProfile user={userInfo} />
        </div>

        <div className="row3-col2">
          <GithubDetails user={userInfo} />
        </div>
      </div>
    </div>
  );
}

export default GithubHome;
