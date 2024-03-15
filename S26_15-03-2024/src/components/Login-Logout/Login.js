import { useContext, useState } from "react";
import AuthContext from "./AuthContext";

function Login() {
  let [userdata, setUserData] = useState({
    name: "",
    password: "",
  });

  let contextData = useContext(AuthContext);
  const verifyLogin = () => {
    if (userdata.name === "Kabir" && userdata.password === "kabir@21") {
      contextData.login();
    } else {
      alert("Enter Proper Credentials");
      setUserData({
        name: "",
        password: "",
      });
    }
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
        <input
          type="text"
          placeholder="Enter Username"
          value={userdata.name}
          onChange={(e) => {
            setUserData({
              ...userdata,
              name: e.target.value,
            });
          }}
        />
      </div>
      <div style={{ margin: "10px 0px" }}>
        <input
          type="password"
          placeholder="Enter Password"
          value={userdata.password}
          onChange={(e) => {
            setUserData({
              ...userdata,
              password: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <input type="button" value="Login" onClick={verifyLogin} />
      </div>
    </div>
  );
}

export default Login;
