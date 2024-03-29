import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  let cartInfo = useSelector(function (storedata) {
    return storedata.products;
  });
  console.log(cartInfo);
  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ color: "blue" }}>Cart Component</h2>
      {cartInfo.cart.length > 0 ? (
        <div>
          {cartInfo.cart.map((element) => {
            return (
              <div key={element.id} style={{ display: "flex", margin: "30px" }}>
                <img src={element.image} width={100} height={100} />
                <p>{element.title}</p>
                <button>Remove</button>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>No Data in the Cart</h2>
      )}
    </div>
  );
}

export default Cart;
