import { useState } from "react";

function List() {
  let [state, setState] = useState([
    "raj",
    "sonal",
    "sid",
    "riya",
    "priya",
    "Kabir",
    "Sagar",
    "AIT",
  ]);
  return (
    <div style={{ padding: "50px" }}>
      <h2>User Names</h2>
      <ol>
        {state.map(function (element, index) {
          return <li key={index + 100}>{element}</li>;
        })}
      </ol>
    </div>
  );
}

export default List;
