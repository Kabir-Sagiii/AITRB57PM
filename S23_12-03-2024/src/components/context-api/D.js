import { useContext } from "react";
import myContext from "./context";
import { themeContext } from "./context";

function D() {
  let data = useContext(myContext);
  let theme = useContext(themeContext);
  return (
    <div
      style={{
        width: "200px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 0 10px red",
        margin: "auto",
      }}
    >
      <h2>D Component</h2>
      <p>{data}</p>
      <p>{theme}</p>
    </div>
  );
}

export default D;
