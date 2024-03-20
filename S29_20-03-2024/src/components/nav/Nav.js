import { useContext } from "react";
import AuthContext from "../Login-Logout/AuthContext";
import { Link } from "react-router-dom";
function Nav() {
  let contextData = useContext(AuthContext);

  const logoutUser = () => {
    contextData.logout();
  };
  return (
    <div style={{ display: "flex", height: "70px", backgroundColor: "black" }}>
      <div
        style={{
          width: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "white" }}>Axios API</h2>
      </div>
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "50px",
          }}
        >
          Home
        </Link>
        <Link
          to="/github"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "50px",
          }}
        >
          Github
        </Link>
        <Link
          to="/profile"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "50px",
          }}
        >
          Profile
        </Link>
        <Link
          to="/products"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "50px",
          }}
        >
          Products
        </Link>
        <Link
          to="/cart"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "50px",
          }}
        >
          Add-To-Cart
        </Link>
        <button
          style={{ border: "none", padding: "7px 15px" }}
          onClick={logoutUser}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Nav;
