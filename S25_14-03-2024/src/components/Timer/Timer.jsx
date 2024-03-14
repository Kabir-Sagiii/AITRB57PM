import { useState, useRef } from "react";
import { startTimer } from "./Timer.js";
function Timer() {
  let [timer, setTimer] = useState(0);
  let timerId = useRef(null); // timerId = {current:null} timerId.current = 100
  //   let clearTimerId; //undefined
  let h2Ref = useRef(null); //h2Ref = {current:null}
  let startBtnRef = useRef(null);
  let stopBtnRef = useRef(null);

  return (
    <div
      style={{
        width: "500px",
        margin: "100px auto",
        boxShadow: "0 0 10px green",
        padding: "30px 20px",
      }}
    >
      <h2 ref={h2Ref}>Timer Component : {timer}</h2>

      <button
        ref={startBtnRef}
        style={{ marginRight: "20px" }}
        onClick={() => {
          startTimer(timer, setTimer, timerId, h2Ref, startBtnRef, stopBtnRef);
        }}
      >
        Start
      </button>
      <button
        disabled={true}
        ref={stopBtnRef}
        style={{ marginRight: "20px" }}
        onClick={() => {
          clearInterval(timerId.current);
          h2Ref.current.style.color = "red";
          startBtnRef.current.disabled = false;
          stopBtnRef.current.disabled = true;
        }}
      >
        Stop
      </button>
      <button
        onClick={() => {
          setTimer(0);
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default Timer;
