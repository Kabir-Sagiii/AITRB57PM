import { useState } from "react";
import axios from "axios";

function NewUser() {
  let [newuser, setnewuser] = useState({
    name: "",
    email: "",
    gender: "",
  });

  const registerUser = async () => {
    try {
      var res = await axios.post("http://localhost:5000/results", newuser, {});
      console.log(res);
    } catch (error) {
      alert("Error while Registering user");
      console.log(error);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        boxShadow: "0 0 10px black",
        padding: "30px",
      }}
    >
      <h2 style={{ color: "green" }}>New User</h2>

      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => {
            setnewuser({
              ...newuser,
              name: e.target.value,
            });
          }}
        />
      </div>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setnewuser({
              ...newuser,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <input
          type="radio"
          value="male"
          name="gender"
          onChange={() => {
            setnewuser({
              ...newuser,
              gender: "male",
            });
          }}
        />
        <label>Male</label>
        <input
          type="radio"
          value="female"
          name="gender"
          onChange={() => {
            setnewuser({
              ...newuser,
              gender: "female",
            });
          }}
        />
        <label>Female</label>
        <input
          type="radio"
          value="other"
          name="gender"
          onChange={() => {
            setnewuser({
              ...newuser,
              gender: "other",
            });
          }}
        />
        <label>Other</label>
      </div>
      <div>
        <button className="btn" onClick={registerUser}>
          Register
        </button>
      </div>
    </div>
  );
}

export default NewUser;
