import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";
// import Home from "./Home";
// import { Profile, Product } from "./Profile";

//Add your ReactDOM code
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <div>
//     <Product />
//     <Profile />
//     <App />
//     <Home />
//     <Profile />
//     <Product />
//   </div>,
//   document.getElementById("root")
// );
