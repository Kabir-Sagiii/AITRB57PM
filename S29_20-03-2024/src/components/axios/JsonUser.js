import { useState } from "react";
import axios from "axios";

function JsonUser() {
  let [state, setState] = useState([]);
  const getUsersData = () => {
    var response = axios.get("https://jsonplaceholder.typicode.com/users");
    response
      .then((res) => {
        //res = {data:[{},{}],headers,statuscode:""}
        console.log(res.data);
        setState(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>Users Information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
        veritatis expedita! Fugit quia animi adipisci! Earum qui, fuga voluptate
        est quidem rem quos, iure omnis nobis quia repellendus? Alias maiores
        quibusdam ipsam laudantium sed inventore, natus animi in, velit maxime,
        nisi nostrum veniam tempora. Et soluta nam harum eum veniam. Ut
        explicabo repellendus, voluptatum debitis voluptatem mollitia,
        consectetur dolorum nulla qui, quis facere quasi architecto. Quod nulla
        neque excepturi voluptate velit ut, dolores iste voluptatem facere.
        Inventore voluptates possimus deleniti minima ut debitis eligendi
        repudiandae magnam laudantium aspernatur, atque, labore cum. Laudantium
        ducimus repellat sed voluptatem dolorem? Quisquam, quaerat eius!
      </p>
      <button onClick={getUsersData}>Get Users</button>
      {state.length > 0 && (
        <div id="usersdata" style={{ width: "800px", margin: "50px auto" }}>
          <table width={"100%"} frame="box" rules="all" cellPadding={10}>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>CITY</th>
                <th>EMAIL</th>
                <th>PHONE</th>
              </tr>
            </thead>
            <tbody>
              {state.map(function (element) {
                //[{},{},{},{}] element = {}
                return (
                  <tr>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>{element.address.city}</td>
                    <td>{element.email}</td>
                    <td>{element.phone}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default JsonUser;
