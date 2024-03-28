import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  let params = useParams();
  let [product, setProduct] = useState({
    id: "",
    title: "",
    description: "",
    category: "",
    rating: {},
    price: "",
  });
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{product.category}</h2>
      <img src={product.image} width={300} height={300} />
      <br />
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
