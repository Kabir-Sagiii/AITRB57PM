import React from "react";
import Login from "./Login";
import Home from "./Home";

function Main({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div>{isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />}</div>
  );
}

export default Main;
