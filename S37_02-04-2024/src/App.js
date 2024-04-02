import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Nav from "./components/nav/Nav";

import HomeUser from "./Crud/HomeUser";

function App() {
  return (
    <div className="App">
      <Nav />
      <HomeUser />
    </div>
  );
}

export default App;
