import { useState } from "react";
import { usersdata } from "./usersdata";

function Card() {
  let [users, setUsers] = useState(usersdata);
  return (
    <div
      style={{
        width: "1000px",

        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      }}
    >
      {users.map(function (element, index) {
        return (
          <div
            key={index + 1}
            style={{
              width: "250px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 0 10px green",
              margin: "10px",
            }}
          >
            <img src={element.image} width={"100%"} height={200} />
            <h3>{element.name}</h3>
            <p>{element.bio}</p>
            <button>Profile</button>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
