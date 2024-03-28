import React from "react";

function Details() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Details Component</h2>
      <dl>
        <dt>
          <b>User Name</b>
        </dt>
        <dd>{}</dd>
        <dt>
          <b>City Name</b>
        </dt>
        <dd>{}</dd>
      </dl>
    </div>
  );
}

export default Details;
