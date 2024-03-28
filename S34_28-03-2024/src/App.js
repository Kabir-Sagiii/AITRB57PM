import Nav from "./components/nav/Nav";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Routing/Home";
import Profile from "./components/profile/Profile";
import Products from "./components/Routing/Products";
import Cart from "./components/Routing/Cart";
import Github from "./components/github/GithubHome";
import PageNotFound from "./components/Routing/PageNotFound";
import Electronics from "./components/Routing/Electronics";
import Jewelery from "./components/Routing/Jewelery";
import MensClothing from "./components/Routing/MensClothing";
import WomensClothing from "./components/Routing/WomensClothing";
import ProductDetails from "./components/Routing/ProductDetails";
import UseReducer from "./components/use-reducer/UseReducer";
import Name from "./components/redux/Name";
import Details from "./components/redux/Details";
import City from "./components/redux/City";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/redux"
          element={
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "800px",
                  margin: "auto",
                }}
              >
                <Name /> <City />
              </div>
              <hr />
              <Details />
            </div>
          }
        />
        <Route path="/products" element={<Products />}>
          <Route path="" element={<Navigate to="electronics" />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="jewelery" element={<Jewelery />} />
          <Route path="mens" element={<MensClothing />} />
          <Route path="womens" element={<WomensClothing />} />
        </Route>
        <Route path="/reducer" element={<UseReducer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/github" element={<Github />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
