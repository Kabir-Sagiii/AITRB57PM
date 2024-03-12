import React from "react";

function Login({ setIsLoggedIn }) {
  const verifyLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div
      style={{
        width: "500px",
        padding: "30px",
        boxShadow: "0 0 10px red",
        margin: "150px auto",
      }}
    >
      <h2>Login Component</h2>
      <div style={{ margin: "10px 0px" }}>
        <input type="text" placeholder="Enter Username" />
      </div>
      <div style={{ margin: "10px 0px" }}>
        <input type="password" placeholder="Enter Password" />
      </div>
      <div>
        <input type="button" value="Login" onClick={verifyLogin} />
      </div>
    </div>
  );
}

export default Login;
