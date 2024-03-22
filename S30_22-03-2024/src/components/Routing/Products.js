import React from "react";
import "./Product.css";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="productContainer">
      <div className="links">
        <Link to="electronics" className="linkstyle">
          Electronics
        </Link>
        <Link to="jewelery" className="linkstyle">
          Jewelery
        </Link>
        <Link to="mens" className="linkstyle">
          Men'sClothing
        </Link>
        <Link to="womens" className="linkstyle">
          Women'sClothing
        </Link>
      </div>

      <div className="comps">
        <Outlet />
      </div>
    </div>
  );
}

export default Products;
