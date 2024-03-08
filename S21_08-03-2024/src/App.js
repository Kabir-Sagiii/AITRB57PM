import Parent from "./components/parent-child/Parent";
import ParentComp from "./components/child-parent/Parent";
import GithubHome from "./components/github/GithubHome";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <GithubHome />
      {/* <ParentComp />
      <Parent /> */}
    </div>
  );
}

export default App;
