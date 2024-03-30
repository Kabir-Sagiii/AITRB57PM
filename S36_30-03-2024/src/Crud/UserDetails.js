import { useEffect, useState } from "react";
import axios from "axios";

function UserDetails({ setShowNewUser }) {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    try {
      var res = await axios.get("http://localhost:5000/results");
      console.log(res.data);
      setUsers(res.data);
    } catch (error) {
      alert("Something went wrong while accessing user data");
      console.log(error);
    }
  };
  return (
    <div className="Details">
      <h2>User Details</h2>
      <table className="table" cellPadding={10}>
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>GENDER</th>
            <th colSpan={2}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>
                    <button
                      onClick={() => {
                        setShowNewUser(false);
                      }}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default UserDetails;
