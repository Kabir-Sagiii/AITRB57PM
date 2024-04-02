import { useState } from "react";
import "./HomeUser.css";
import NewUser from "./NewUser";
import UpdateUser from "./UpdateUser";
import UserDetails from "./UserDetails";

function HomeUser() {
  let [showNewUser, setShowNewUser] = useState(true);
  let [users, setUsers] = useState([]);
  let [user, setUser] = useState({ name: "", email: "", gender: "", id: "" });
  return (
    <div className="Home">
      <div>
        {showNewUser ? (
          <NewUser setUsers={setUsers} />
        ) : (
          <UpdateUser
            user={user}
            setUsers={setUsers}
            setShowNewUser={setShowNewUser}
          />
        )}
      </div>
      <div>
        <UserDetails
          users={users}
          setUser={setUser}
          setUsers={setUsers}
          setShowNewUser={setShowNewUser}
        />
      </div>
    </div>
  );
}

export default HomeUser;
