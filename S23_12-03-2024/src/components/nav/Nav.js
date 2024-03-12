function Nav({ setIsLoggedIn }) {
  const logoutUser = () => {
    setIsLoggedIn(false);
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
        <h2 style={{ color: "white" }}>Context API</h2>
      </div>
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href=""
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "50px",
          }}
        >
          Home
        </a>
        <a
          href=""
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "50px",
          }}
        >
          Profile
        </a>
        <a
          href=""
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "50px",
          }}
        >
          Products
        </a>
        <a
          href=""
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "50px",
          }}
        >
          Add-To-Cart
        </a>
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
