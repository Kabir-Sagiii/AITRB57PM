import { useState } from "react";
import myContext from "./context";
import { themeContext } from "./context";
import B from "./B";

function A() {
  let [state, setState] = useState("");
  let [data, setData] = useState("");

  return (
    <div
      style={{
        width: "600px",
        padding: "10px",
        textAlign: "center",
        boxShadow: "0 0 10px black",
        margin: "50px auto",
      }}
    >
      <h2>A Component</h2>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setData(state);
        }}
      >
        Submit
      </button>
      <themeContext.Provider value={"dark theme"}>
        <myContext.Provider value={data}>
          <B />
        </myContext.Provider>
      </themeContext.Provider>
    </div>
  );
}

export default A;
