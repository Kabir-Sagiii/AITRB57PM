import { useState } from "react";
import { nameActionCreator } from "../../action-creator/actionCreator";
import store from "../../Store/store";

function Name() {
  let [state, setState] = useState("");

  const sendData = () => {
    // let actionObj = nameActionCreator(state);
    // store.dispatch(actionObj);

    store.dispatch(nameActionCreator(state));
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Name Component</h2>
      <input
        type="text"
        placeholder="Add Some Name"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      &nbsp;&nbsp;
      <button onClick={sendData}>Submit</button>
    </div>
  );
}

export default Name;
