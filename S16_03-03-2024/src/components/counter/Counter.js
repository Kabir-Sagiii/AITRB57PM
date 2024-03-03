import { useState } from "react";

function Counter() {
  let [state, setState] = useState(0);

  var counterStyles = {
    textAlign: "center",
    margin: "100px auto",
    boxShadow: "0 0 10px green",
    width: "500px",
    padding: "70px 20px",
  };

  var countValue = 100;

  //   function incCount() {
  //     var spanRef = document.getElementById("title");
  //     spanRef.innerText = Number(spanRef.innerText) + 1;
  //   }

  function incCount() {
    countValue = countValue + 1;
    console.log(countValue);
  }

  return (
    <div style={counterStyles}>
      <h2>
        Count Value is : {state}
        {/* Count Value is : <span id="title">{countValue}</span> */}
      </h2>
      <button onClick={incCount}>Increase Count</button>&nbsp;&nbsp;
      <button>Decrease Count</button>
    </div>
  );
}
export default Counter;
