import { useState } from "react";
function State() {
  let [state, setState] = useState("State Concept in React");

  let [counter, setCounter] = useState(0);

  function updateData() {
    setState("Hello, React State !!!");
    setCounter(counter + 1);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        {state}---- {counter}
      </h2>
      <button onClick={updateData}>Change State Data</button>
    </div>
  );
}

export default State;
