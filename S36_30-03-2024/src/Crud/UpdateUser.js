import React from "react";

function UpdateUser({ setShowNewUser }) {
  return (
    <div
      style={{
        textAlign: "center",
        boxShadow: "0 0 10px black",
        padding: "30px",
      }}
    >
      <h2 style={{ color: "blue" }}>Update User</h2>

      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <input type="text" placeholder="User Name" />
      </div>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <input type="email" placeholder="Email" />
      </div>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <input type="radio" value="male" name="gender" />
        <label>Male</label>
        <input type="radio" value="female" name="gender" />
        <label>Female</label>
        <input type="radio" value="other" name="gender" />
        <label>Other</label>
      </div>
      <div>
        <button
          className="update-btn"
          onClick={() => {
            setShowNewUser(true);
          }}
        >
          Update User
        </button>
      </div>
    </div>
  );
}

export default UpdateUser;
