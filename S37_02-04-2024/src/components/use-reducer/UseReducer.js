import { useReducer } from "react";

const countReducer = (currentState, action) => {
  //action = {type:"increment"}
  //Reducer function is used to perform different action on the state
  // and update the state with new Value

  if (action.type === "increment") {
    currentState = {
      ...currentState,
      countValue: currentState.countValue + action.count,
    };
  } else if (action.type === "decrement") {
    currentState = {
      ...currentState,
      countValue: currentState.countValue - action.count,
    };
  } else {
    currentState = {
      ...currentState,
      countValue: 0,
    };
  }

  return currentState;
};

function UseReducer() {
  let [state, dispatch] = useReducer(countReducer, { countValue: 0 });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>useReducer() hook</h2>
      <hr />
      <p style={{ fontSize: "21px", fontWeight: "bold" }}>
        Count Value is : {state.countValue}
      </p>
      <button
        onClick={() => {
          dispatch({
            type: "increment",
            count: 1,
          });
        }}
      >
        IncCount
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "decrement",
            count: 1,
          });
        }}
      >
        DecCount
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "clear",
          });
        }}
      >
        Clear
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "increment",
            count: 5,
          });
        }}
      >
        Increase By 5
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "decrement",
            count: 3,
          });
        }}
      >
        Decrease By 3
      </button>
    </div>
  );
}

export default UseReducer;
