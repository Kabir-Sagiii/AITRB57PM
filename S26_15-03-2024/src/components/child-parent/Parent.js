import { useState } from "react";
import Child from "./Child";

function Parent() {
  let [parentState, setParentState] = useState("No Data");
  return (
    <div
      style={{
        width: "500px",
        height: "300px",
        textAlign: "center",
        margin: "50px auto",
        padding: "30px",
        boxShadow: "0 0 10px coral",
      }}
    >
      <h2>Parent Component</h2>
      <p style={{ color: "green", fontWeight: "bold" }}>{parentState}</p>
      <Child setterFn={setParentState} />
    </div>
  );
}

export default Parent;
