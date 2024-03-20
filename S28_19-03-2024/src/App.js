import Nav from "./components/nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Routing/Home";
import Profile from "./components/Routing/Profile";
import Products from "./components/Routing/Products";
import Cart from "./components/Routing/Cart";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
