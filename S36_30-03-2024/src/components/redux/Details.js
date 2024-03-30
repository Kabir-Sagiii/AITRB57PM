import React from "react";
import { useSelector } from "react-redux";

function Details() {
  let myStoreData = useSelector(function (storedata) {
    return storedata.user;
  });
  //myStoreData = {name:"---",city:"----"}
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Details Component</h2>
      <dl>
        <dt>
          <b>User Name</b>
        </dt>
        <dd>{myStoreData.name}</dd>
        <dt>
          <b>City Name</b>
        </dt>
        <dd>{myStoreData.city}</dd>
      </dl>
    </div>
  );
}

export default Details;
