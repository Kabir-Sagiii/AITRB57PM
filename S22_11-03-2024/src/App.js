import Nav from "./components/nav/Nav";
import A from "./components/context-api/A";
import { AuthContext } from "./components/context-api/context";

function App() {
  return (
    <div className="App">
      <Nav />
      <AuthContext.Provider value={""}>
        <A />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
