import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
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
