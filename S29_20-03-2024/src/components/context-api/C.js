import { useContext } from "react";
import myContext from "./context";
import D from "./D";

function C() {
  let info = useContext(myContext);
  return (
    <div
      style={{
        width: "300px",
        padding: "10px",
        textAlign: "center",
        boxShadow: "0 0 10px blue",
        margin: "auto",
      }}
    >
      <h2>C Component : {info}</h2>
      <D />
    </div>
  );
}

export default C;
