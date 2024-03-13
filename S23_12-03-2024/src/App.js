import Nav from "./components/nav/Nav";
import Main from "./components/Login-Logout/Main";
import "./App.css";
import { useState } from "react";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? <Nav setIsLoggedIn={setIsLoggedIn} /> : null}
      <Main isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
