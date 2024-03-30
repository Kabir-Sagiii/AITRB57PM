import { useState } from "react";
import "./HomeUser.css";
import NewUser from "./NewUser";
import UpdateUser from "./UpdateUser";
import UserDetails from "./UserDetails";

function HomeUser() {
  let [showNewUser, setShowNewUser] = useState(true);
  return (
    <div className="Home">
      <div>
        {showNewUser ? (
          <NewUser />
        ) : (
          <UpdateUser setShowNewUser={setShowNewUser} />
        )}
      </div>
      <div>
        <UserDetails setShowNewUser={setShowNewUser} />
      </div>
    </div>
  );
}

export default HomeUser;
