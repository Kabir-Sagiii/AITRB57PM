import Child from "./Child";
import { useState } from "react";
function Parent() {
  let [inputdata, setInputData] = useState("");
  let [childData, setChildData] = useState("");

  function getInputTextData(event) {
    setInputData(event.target.value);
  }

  function passDataToChild() {
    setChildData(inputdata);
  }
  return (
    <div
      style={{
        width: "500px",
        padding: "30px",
        textAlign: "center",
        margin: "100px auto",
        boxShadow: "0 0 10px black",
      }}
    >
      <h2>Parent Component</h2>
      <input
        type="text"
        placeholder="enter some text"
        onChange={getInputTextData}
      />
      <button onClick={passDataToChild}>Send</button>
      <Child data={childData} />
    </div>
  );
}

export default Parent;
