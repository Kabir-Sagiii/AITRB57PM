import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Electronics() {
  let [electronics, setElectronics] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((res) => {
        console.log(res.data);
        setElectronics(res.data);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  }, []);
  return (
    <div>
      {electronics.length > 0 ? (
        <div style={{ height: "400px" }}>
          <h3
            style={{
              margin: "0",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            {electronics[0].category} Category
          </h3>
          <ul
            type="none"
            style={{
              height: "100%",
              // display: "flex",
              // flexDirection: "column",
              // justifyContent: "space-evenly",
            }}
          >
            {electronics.map((element) => {
              return (
                <li key={element.id} style={{ marginTop: "30px" }}>
                  <Link style={{ textDecoration: "none" }} to="/productdetails">
                    {element.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div
          style={{
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontStyle: "italic",
          }}
        >
          <h2 style={{ color: "red", margin: "0" }}>No Data to Display</h2>
        </div>
      )}
    </div>
  );
}

export default Electronics;
