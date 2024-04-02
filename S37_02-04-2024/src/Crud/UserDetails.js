import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "./UserService";

function UserDetails({ setShowNewUser, users, setUsers, setUser }) {
  useEffect(() => {
    getUsers(setUsers);
  }, []);

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
                      className="btn btn-primary"
                      onClick={() => {
                        setUser(user);
                        setShowNewUser(false);
                      }}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deleteUser(user.id, setUsers);
                      }}
                    >
                      Delete
                    </button>
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
