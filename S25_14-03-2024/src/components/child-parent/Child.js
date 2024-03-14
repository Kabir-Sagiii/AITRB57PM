import { useState } from "react";

function Child({ setterFn }) {
  let [childState, setChildState] = useState("");

  function SendDataToParent() {
    setterFn(childState);
  }

  function updateChildState(event) {
    setChildState(event.target.value);
  }
  return (
    <div
      style={{
        width: "300px",
        height: "150px",
        textAlign: "center",
        margin: "20px auto",
        padding: "20px 70px",
        boxShadow: "0 0 10px green",
      }}
    >
      <h2>Child Component</h2>
      <input
        type="text"
        placeholder="Enter Some Data"
        onChange={updateChildState}
      />
      <button onClick={SendDataToParent}>Send to Parent</button>
    </div>
  );
}

export default Child;
