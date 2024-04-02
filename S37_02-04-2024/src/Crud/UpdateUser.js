import { useState, useEffect } from "react";
import { updateUser } from "./UserService";

function UpdateUser({ setShowNewUser, user, setUsers }) {
  let [updateuserdata, setUpdateUserData] = useState({
    name: "",
    email: "",
    gender: "",
  });
  useEffect(() => {
    setUpdateUserData(user);
  }, []);
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
        <input
          value={updateuserdata.name}
          type="text"
          placeholder="User Name"
          onChange={(e) => {
            setUpdateUserData({
              ...updateuserdata,
              name: e.target.value,
            });
          }}
        />
      </div>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <input
          value={updateuserdata.email}
          onChange={(e) => {
            setUpdateUserData({
              ...updateuserdata,
              email: e.target.value,
            });
          }}
          type="email"
          placeholder="Email"
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
          onChange={(e) => {
            setUpdateUserData({
              ...updateuserdata,
              gender: "male",
            });
          }}
          name="gender"
        />
        <label>Male</label>
        <input
          type="radio"
          value="female"
          onChange={(e) => {
            setUpdateUserData({
              ...updateuserdata,
              gender: "male",
            });
          }}
          name="gender"
        />
        <label>Female</label>
        <input
          type="radio"
          value="other"
          onChange={(e) => {
            setUpdateUserData({
              ...updateuserdata,
              gender: "male",
            });
          }}
          name="gender"
        />
        <label>Other</label>
      </div>
      <div>
        <button
          className="update-btn"
          onClick={() => {
            updateUser(updateuserdata, setUsers);
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
