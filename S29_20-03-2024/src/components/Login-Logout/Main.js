import { useContext } from "react";
import AuthContext from "./AuthContext";
import Login from "./Login";
import Home from "./Home";

function Main() {
  let contextData = useContext(AuthContext);
  return <div>{contextData.isLoggedIn ? <Home /> : <Login />}</div>;
}

export default Main;
