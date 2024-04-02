import { useContext } from "react";
import AuthContext from "./AuthContext";
import Login from "./Login";
import Home from "./Home";
import Profile from "../profile/Profile";

function Main() {
  let contextData = useContext(AuthContext);
  return <div>{contextData.isLoggedIn ? <Profile /> : <Login />}</div>;
}

export default Main;
