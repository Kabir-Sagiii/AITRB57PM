import Nav from "./components/nav/Nav";
import Main from "./components/Login-Logout/Main";
import "./App.css";
import { useState } from "react";
import AuthContext from "./components/Login-Logout/AuthContext";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        {isLoggedIn ? <Nav /> : null}
        <Main />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
