import React from "react";
import { cityActionCreator } from "../../action-creator/actionCreator";
import { useDispatch } from "react-redux";
function City() {
  const dispatch = useDispatch();
  const selectCity = (event) => {
    var cityAction = cityActionCreator(event.target.value);
    dispatch(cityAction);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>City Component</h2>
      <select onChange={selectCity}>
        <option>Select City</option>
        <option>Delhi</option>
        <option>Hyderabd</option>
        <option>Banglore</option>
      </select>
    </div>
  );
}

export default City;
